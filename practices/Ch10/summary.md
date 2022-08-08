# 10장 객체 리터럴

## 10.1 객체란?

> 원시 타입은 단 하나의 값만 나타내지만 객체 타입(object/reference type)은 다양한 타입의 값(원시 값 또는 다른 객체)을 하나의 단위로 구성한 복합적인 자료구조(data structure)다. 또한 원시 타입의 값, 즉 원시 값은 변경 불가능한 값(immutable vaule)이지만 객체 타입의 값, 즉 객체는 변경 가능한 값(mutable value)다.
>
> _124p_

<br>

> 객체는 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 키(key)와 값(value)로 구성된다.
>
> 자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있다. 자바스크립트의 함수는 일급 객체이므로 값으로 취급할 수 있다. 따라서 함수도 프로퍼티 값으로 사용할 수 있다. 프로퍼티 값이 함수일 경우, 일반 함수와 구분하기 위해 메서드(method)라 부른다.
>
> _124p_

<br>

> - 프로퍼티: 객체의 상태를 나타내는 값(data)
> - 메서드: 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)
>
> _125p_

<br>

## 10.2 객체 리터럴에 의한 객체 생성

> 객체 리터럴은 중괄호(`{ ... }`) 내에 0개 이상의 프로퍼티를 정의한다. 변수에 할당되는 시점에 자바스크립트 엔진은 객체 리터럴을 해석해 객체를 생성한다.
>
> _126p_

<br>

> 객체 리터럴의 중괄호는 코드 블록을 의미하지 않는다는 데 주의하자. 코드 블록의 닫는 중괄호 뒤에는 세미콜론을 붙이지 않는다.하지만 객체 리터럴은 값으로 평가되는 표현식이다. 따라서 객체 리터럴의 닫는 중괄호 뒤에는 세미콜론을 붙인다.
>
> _126p_

<br>

## 10.3 프로퍼티

> 프로퍼티를 나열할 때는 쉼표(`,`)로 구분한다. 일반적으로 마지막 프로퍼티 뒤에는 쉼표를 사용하지 않으나 사용해도 좋다.
>
> _127p_

<br>

> 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용해야 한다.
>
> _127p_

<br>

## 10.4 메서드

> 프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드(method)라 부른다.
>
> _130p_

<br>

## 10.5 프로퍼티 접근

> 프로퍼티에 접근하는 방법은 다음과 같이 두 가지다.
>
> - 마침표 프로퍼티 접근 연산자(`.`)를 사용하는 마침표 표기법(dot notation)
> - 대괄호 프로퍼티 연산자(`[ ... ]`)를 사용하는 대괄호 표기법(bracket notation)
>
> _130p_

<br>

## 10.6 프로퍼티 값 갱신

> 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
>
> _132p_

<br>

## 10.7 프로퍼티 동적 생성

> 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.
>
> _133p_

<br>

## 10.8 프로퍼티 삭제

> `delete` 연산자는 객체의 프로퍼티를 삭제한다.
>
> _133p_

<br>

## 10.9 ES6에서 추가된 객체 리터럴의 확장 기능

### 10.9.1 프로퍼티 축약 표현

```javascript
// ES5
var x = 1,
  y = 2;

var obj = {
  x: x,
  y: y,
};

console.log(obj); // {x: 1, y: 2}
```

<br>

> ES6에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략(property shorthand)할 수 있다. 이때 프로퍼티 키는 변수 이름으로 자동 생성된다.
>
> _134p_

<br>

```javascript
// ES6
let x = 1,
  y = 2;

// 프로퍼티 축약 표현
const obj = { x, y };

console.log(obj); // {x: 1, y: 2}
```

<br>

### 10.9.2 계산된 프로퍼티 이름

> 문자열 또는 문자열 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다. 단, 프로퍼티 키로 사용할 표현식을 대괄호(`[ ... ]`)로 묶어야 한다. 이를 계산된 프로퍼티 이름(computed property name)이라 한다.
>
> _135p_

<br>

```javascript
// ES5
var prefix = "prop";
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

<br>

```javascript
// ES6
const prefix = "prop";
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

<br>

### 10.9.3 메서드 축약 표현

```javascript
// ES5
var obj = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi! " + this.name);
  },
};

obj.sayHi(); // Hi! Lee
```

<br>

> ES6에서는 메서드를 정의할 때 `function` 키워드를 생략한 축약 표현을 사용할 수 있다.
>
> _136p_

<br>

```javascript
// ES6
const obj = {
  name: "Lee",
  // 메서드 축약 표현
  sayHi() {
    console.log("Hi! " + this.name);
  },
};

obj.sayHi(); // Hi! Lee
```