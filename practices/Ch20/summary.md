# 20장 strict mode

## 20.1 strict mode란?

> ES5부터 strict mode(엄격 모드)가 추가되었다. strict mode는 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다.
>
> ESLint 같은 린트 도구를 사용해도 strict mode와 유사한 효과를 얻을 수 있다. 린트 도구는 정적 분석(static analysis) 기능을 통해 소스코드를 실행하기 전에 소스코드를 스캔하여 문법적 오류만이 아니라 잠재적 오류까지 찾아내고 오류의 원인을 리포팅해주는 유용한 도구다.
>
> _314p_

<br>

## 20.2 strict mode의 적용

> strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 `'use strict'`를 추가한다. 전역의 서두에 추가하면 스크립트 전체에 strict mode가 적용된다.
>
> _314p_

<br>

```javascript
"use strict";

function foo() {
  x = 10; // Reference Error: x is not defined
}
foo();
```

<br>

## 20.3 전역에 strict mode를 적용하는 것은 피하자

> 외부 서드파티 라이브러리를 사용하는 경우 라이브러리가 non-strict mode인 경우도 있기 때문에 전역에 strict mode를 적용하는 것은 바람직하지 않다. 이러한 경우 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다.
>
> _316p_

<br>

```javascript
// 즉시 실행 함수의 선두에 strict mode 적용
(function () {
  "use strict";

  // Do something...
});
```

<br>

## 20.4 함수 단위로 strict mode를 적용하는 것도 피하자

> strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직하다.
>
> _317p_

<br>

## 20.5 strict mode가 발생시키는 에러

### 20.5.1 암묵적 전역

> 선언하지 않은 변수를 참조하면 `ReferenceError`가 발생한다.
>
> _317p_

<br>

```javascript
(function () {
  "use strict";

  x = 1;
  console.log(x); // ReferenceError: x is not defined
});
```

<br>

### 20.5.2 변수, 함수, 매개변수의 삭제

> `delete` 연산자로 변수, 함수, 매개변수를 삭제하면 `SyntaxError`가 발생한다.
>
> _317p_

<br>

```javascript
(function () {
  "use strict";

  var x = 1;
  delete x;
  // SyntaxError: Delete of an unqualified identifier in strict mode.

  function foo(a) {
    delete a;
    // SyntaxError: Delete of an unqualified identifier in strict mode.
  }
  delete foo;
  // SyntaxError: Delete of an unqualified identifier in strict mode.
})();
```

<br>

### 20.5.3 매개변수 이름의 중복

> 중복된 매개변수 이름을 사용하면 `SyntaxError`가 발생한다.
>
> _318p_

<br>

```javascript
(function () {
  "use strict";

  //SyntaxError: Duplicate parameter name not allowed in this context
  function foo(x, x) {
    return x + x;
  }
  console.log(foo(1, 2));
})();
```

<br>

### 20.5.4 `with` 문의 사용

> `with` 문을 사용하면 `SyntaxError`가 발생한다. `with` 문은 전달된 객체를 스코프 체인에 추가한다. `with` 문은 동일한 객체의 프로퍼티를 반복해서 사용할 때 객체 이름을 생략할 수 있어서 코드가 간단해지는 효과가 있지만 성능과 가독성이 나빠지는 문제가 있다. 따라서 `with` 문은 사용하지 않는 것이 좋다.
>
> _318p_

<br>

```javascript
(function () {
  "use strict";

  // SyntaxError: Strict mode code may not include a with statement
  with ({ x: 1 }) {
    console.log(x);
  }
})();
```

<br>

## 20.6 strict mode 적용에 의한 변화

### 20.6.1 일반 함수의 `this`

> strict mode에서 함수를 일반 함수로서 호출하면 `this`에 `undefined`가 바인딩된다. 생성자 함수가 아닌 일반 함수 내부에서는 `this`를 사용할 필요가 없기 때문이다. 이때 에러는 발생하지 않는다.
>
> _319p_

<br>

```javascript
(function () {
  "use strict";

  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this); // Foo
  }
  new Foo();
})();
```

<br>

### 20.6.2 `arguments` 객체

> strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 `arguments` 객체에 반영되지 않는다.
>
> _319p_

<br>

```javascript
(function (a) {
  "use strict";
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2;

  // 변경된 인수가 arguments 객체에 반영되지 않는다.
  console.log(arguments); // { 0: 1, length: 1 }
})(1);
```
