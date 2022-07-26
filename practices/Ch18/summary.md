# 18장 함수와 일급 객체

## 18.1 일급 객체

> 다음과 같은 조건을 만족하는 객체를 일급 객체라 한다.
>
> 1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
> 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
> 3. 함수의 매개변수에 전달할 수 있다.
> 4. 함수의 반환값으로 사용할 수 있다.
>
> 자바스크립트의 함수는 다음 예제와 같이 위의 조건을 모두 만족하므로 일급 객체다.
>
> _249p_

<br>

```javascript
// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const auxs = { increase, decrease };

// 3. 함수의 매개변수에게 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
  let num = 0;

  return function () {
    num = aux(num);
    return num;
  };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(auxs.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
```

<br>

> 함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미다.
>
> (...)
>
> 일급 객체로서 함수가 가지는 가장 큰 특징은 일반 객체와 같이 함수의 매개변수에 전달할 수 있으며, 함수의 반환값으로 사용할 수도 있다는 것이다. 이는 함수형 프로그래밍을 가능케 하는 자바스크립트의 장점 중 하나다.
>
> _250p_

<br>

## 18.2 함수 객체의 프로퍼티

### 18.2.1 `arguments` 프로퍼티

> 함수 객체의 `arguments` 프로퍼티 값은 `arguments` 객체다. `arguments` 객체는 함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는 순회 가능한(iterable) 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용된다. 즉, 함수 외부에서는 참조할 수 없다.
>
> _252p_

<br>

### 18.2.2 `caller` 프로퍼티

> 함수 객체의 `caller` 프로퍼티는 함수 자신을 호출한 함수를 가리킨다.
>
> _256p_

<br>

### 18.2.3 `length` 프로퍼티

> 함수 객체의 `length` 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.
>
> _256p_

<br>

### 18.2.4 `name` 프로퍼티

> 함수 객체의 `name` 프로퍼티는 함수 이름을 나타낸다. `name` 프로퍼티는 ES6 이전까지는 비표준이었다가 ES6에서 정식 표준이 되었다.
>
> `name` 프로퍼티는 ES5와 ES6에서 동작을 달리하므로 주의하기 바란다. 익명 함수 표현식의 경우 ES5에서 `name` 프로퍼티는 빈 문자열을 값으로 갖는다. 하지만 ES6에서는 함수 객체를 가리키는 식별자를 값으로 갖는다.
>
> _257p_

<br>

### 18.2.5 `__proto__` 접근자 프로퍼티

> 모든 객체는 `[[Prototype]]`이라는 내부 슬롯을 갖는다. `[[Prototype]]` 내부 슬롯은 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.
>
> (...)
>
> `__proto__` 프로퍼티는 `[[Prototype]]` 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티다. 내부 슬롯에는 직접 접근할 수 없고 간접적인 접근 방법을 제공하는 경우에 한하여 접근할 수 있다.
>
> _258p_

<br>

### 18.2.6 `prototype` 프로퍼티

> `prototype` 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티다. 일반 객체와 생성자 함수로 호출할 수 없는 non-constructor에는 prototype 프로퍼티가 없다.
>
> _258p_
