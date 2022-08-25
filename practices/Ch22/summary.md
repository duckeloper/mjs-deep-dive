# 22장 `this`

## 22.1 `this` 키워드

> 객체는 상태(state)를 나타내는 프로퍼티와 동작(behavior)을 나타내는 메서드를 하나의 논리적인 단위로 묶은 복합적인 자료구조다.
>
> 동작을 나타내는 메서드는 자신이 속한 객체의 상태, 즉 프로퍼티를 참조하고 변경할 수 있어야 한다. 이때 메서드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 한다.
>
> _342p_

<br>

```javascript
function Circle(radius) {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  ????.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없다.
  return 2 * ????.radius;
};

// 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야 한다.
const circle = new Circle(5);
```

<br>

> `this`는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수(self-referencing variable)다. `this`를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.
>
> `this`는 자바스크립트 엔진에 의해 암묵적으로 생성되며, 코드 어디서든 참조할 수 있다. 함수를 호출하면 `arguments` 객체와 `this`가 암묵적으로 함수 내부에 전달된다. 함수 내부에서 `arguments` 객체를 지역 변수처럼 사용할 수 있는 것처럼 `this`도 지역변수처럼 사용할 수 있다. 단, `this`가 가리키는 값, 즉 `this` 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.
>
> _343p_

<br>

## 22.2 함수 호출 방식과 `this` 바인딩

### 22.2.1 일반 함수 호출

> 기본적으로 `this`에는 전역 객체(glbal object)가 바인딩된다.
>
> _347p_

```javascript
function foo() {
  console.log("foo's this: ", this); // window
  function bar() {
    console.log("bar's this: ", this); // window
  }
  bar();
}
foo();
```

<br>

### 22.2.2 메서드 호출

> 메서드 내부의 `this`에는 메서드를 호출한 객체, 즉 메서드를 호출할 때 메서드 이름 앞의 마침표(`.`) 연산자 앞에 기술한 객체가 바인딩된다. 주의할 것은 메서드 내부의 `this`는 메서드를 소유한 객체가 아닌 메서드를 호출한 객체에 바인딩된다는 것이다.
>
> _350p_

<br>

### 22.2.3 생성자 함수 호출

> 생성자 함수 내부의 `this`에는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩된다.
>
> _353p_

<br>

### 22.2.4 `Function.prototype.apply`/`call`/`bind` 메서드에 의한 간접 호출

```javascript
function getThisBinding() {
  return this;
}

// this로 사용할 객체
const thisArg = { a: 1 };

console.log(getThisBinding()); // window

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩한다.
console.log(getThisBinding.apply(thisArg)); // {a: 1}
console.log(getThisBinding.call(thisArg)); // {a: 1}
```

> `apply`와 `call` 메서드의 본질적인 기능은 함수를 호출하는 것이다.
>
> _355p_

<br>

> `Function.prototype.bind` 메서드는 `apply`와 `call` 메서드와 달리 함수를 호출하지 않는다. 다만 첫 번째 인수로 전달한 값으로 `this` 바인딩이 교체된 함수를 새롭게 생성해 반환한다.
>
> `bind` 메서드는 메서드의 `this`와 메서드 내부의 중첩 함수 또는 콜백 함수의 `this`가 불일치하는 문제를 해결하기 위해 유용하게 사용된다.
>
> _357p_

```javascript
const person = {
  name: "Lee",
  foo(callback) {
    // ①
    setTimeout(callback, 100);
  },
};

person.foo(function () {
  console.log(`Hi! my name is ${this.name}.`); // ② Hi! my name is .
  // 일반 함수로 호출된 콜백 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다.
  // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''이다.
  // Node.js 환경에서 this.name은 undefined다.
});
```

```javascript
const person = {
  name: "Lee",
  foo(callback) {
    // bind 메서드로 callback 함수 내부의 this 바인딩을 전달
    setTimeout(callback.bind(this), 100);
  },
};

person.foo(function () {
  console.log(`Hi! my name is ${this.name}.`); // Hi! my name is Lee.
});
```
