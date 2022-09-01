# 25장 클래스

## 25.1 클래스는 프로토타입의 문법적 설탕인가?

> ES6에서 도입된 클래스는 기존 프로토타입 기반 객체지향 프로그래밍보다 자바나 C#과 같은 클래스 기반 객체지향 프로그래밍에 익숙한 프로그래머가 더욱 빠르게 학습할 수 있도록 클래스 기반 객체지향 프로그래밍 언어와 매우 흡사한 새로운 객체 생성 메커니즘을 제시한다.
>
> 그렇다고 ES6의 클래스가 기존의 프로토타입 기반 객체지향 모델을 폐지하고 새롭게 클래스 기반 객체지향 모델을 제공하는 것은 아니다. 사실 클래스는 함수이며 기존 프로토타입 기반 패턴을 클래스 기반 패턴처럼 사용할 수 있도록 하는 문법적 설탕(syntactic sugar)이라고 볼 수도 있다.
>
> _418p_

<br>

> 클래스는 생성자 함수와 매우 유사하게 동작하지만 다음과 같이 몇 가지 차이가 있다.
>
> 1. 클래스를 `new` 연산자 없이 호출하면 에러가 발생한다. 하지만 생성자 함수를 `new` 연산자 없이 호출하면 일반 함수로서 호출된다.
> 2. 클래스는 상속을 지원하는 `extends`와 `super` 키워드를 제공한다. 하지만 생성자 함수는 `extends`와 `super` 키워드를 지원하지 않는다.
> 3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다. 하지만 함수 선언문으로 정의된 생성자 함수는 함수 호이스팅이, 함수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생한다.
> 4. 클래스 내의 모든 코드에는 암묵적으로 strict mode가 지정되어 실행되며 strict mode를 해제할 수 없다. 하지만 생성자 함수는 암묵적으로 strict mode가 지정되지 않는다.
> 5. 클래스의 `constructor`, 프로토타입 메서드, 정적 메서드는 모두 프로퍼티 어트리뷰터 `[[Enumerable]]`의 값이 `false`다. 다시 말해, 열거되지 않는다.
>
> (...)
>
> 클래스를 프로토타입 기반 객체 생성 패턴의 단순한 문법적 설탕이라고 보기보다는 새로운 객체 생성 메커니즘으로 보는 것이 좀 더 합당하다.
>
> _418p_

<br>

## 25.2 클래스 정의

> 클래스는 `class` 키워드를 사용하여 정의한다. 클래스 이름은 생성자 함수와 마찬가지로 파스칼 케이스를 사용하는 것이 일반적이다. 파스칼 케이스를 사용하지 않아도 에러가 발생하지는 않는다.
>
> _419p_

```javascript
// 클래스 선언문
class Person {}
```

> 클래스는 일급 객체로서 다음과 같은 특징을 갖는다.
>
> - 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
> - 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
> - 함수의 매개변수에게 전달할 수 있다.
> - 함수의 반환값으로 사용할 수 있다.
>
> _419p_

<br>

> 클래스 몸체에는 0개 이상의 메서드만 정의할 수 있다. 클래스 몸체에서 정의할 수 있는 메서드는 `constructor`(생성자), 프로토타입 메서드, 정적 메서드의 세 가지가 있다.
>
> _419p_

<br>

```javascript
// 클래스 선언문
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name; // name 프로퍼티는 public하다.
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log("Hello!");
  }
}

// 인스턴스 생성
const me = new Person("Lee");

// 인스턴스의 프로퍼티 참조
console.log(me.name); // Lee
// 프로토타입 메서드 호출
me.sayHi(); // Hi! My name is Lee
// 정적 메서드 호출
Person.sayHello(); // Hello!
```

<br>

## 25.3 클래스 호이스팅

> 클래스 선언문도 변수 선언, 함수 정의와 마찬가지로 호이스팅이 발생한다. 단, 클래스는 `let`, `const` 키워드로 선언한 변수처럼 호이스팅된다. 따라서 클래스 선언문 이전에 일시적 사각지대(Temporal Dead Zone: TDZ)에 빠지기 때문에 호이스팅이 발생하지 않는 것처럼 동작한다.
>
> `var`, `let`, `const`, `function`, `function*`, `class` 키워드를 사용하여 선언된 모든 식별자는 호이스팅된다. 모든 선언문은 런타임 이전에 먼저 실행되기 때문이다.
>
> _422p_

<br>

## 25.4 인스턴스 생성

> 클래스는 생성자 함수이며 `new` 연산자와 함께 호출되어 인스턴스를 생성한다.
>
> ```javascript
> class Person {}
>
> // 인스턴스 생성
> const me = new Person();
> console.log(me); // Person {}
> ```
>
> 함수는 `new` 연산자의 사용 여부에 따라 일반 함수로 호출되거나 인스턴스 생성을 위한 생성자 함수로 호출되지만 클래스는 인스턴스를 생성하는 것이 유일한 존재 이유이므로 반드시 `new` 연산자와 함께 호출해야 한다.
>
> _422p_

<br>

## 25.5 메서드

### 25.5.1 `constructor`

> `constructor`는 인스턴스를 생성하고 초기화하기 위한 특수한 메서드다. `constructor`는 이름을 변경할 수 없다.
>
> ```javascript
> class Person {
>   // 생성자
>   constructor(name) {
>     // 인스턴스 생성 및 초기화
>     this.name = name;
>   }
> }
> ```
>
> _423p_

<br>

> `constructor`는 메서드로 해석되는 것이 아니라 클래스가 평가되어 생성한 함수 객체 코드의 일부가 된다. 다시 말해, 클래스 정의가 평가되면 `constructor`의 기술된 동작을 하는 함수 객체가 생성된다.
>
> _426p_

<br>

### 25.5.2 프로토타입 메서드

> 클래스 몸체에서 정의한 메서드는 생성자 함수에 의한 객체 생성 방식과는 다르게 클래스의 `prototype` 프로퍼티에 메서드를 추가하지 않아도 기본적으로 프로토타입 메서드가 된다.
>
> ```javascript
> class Person {
>   // 생성자
>   constructor(name) {
>     // 인스턴스 생성 및 초기화
>     this.name = name;
>   }
>
>   // 프로토타입 메서드
>   sayHi() {
>     console.log(`Hi! My name is ${this.name}`);
>   }
> }
>
> const me = new Person("Lee");
> me.sayHi(); // Hi! My name is Lee
> ```
>
> _429p_

<br>

### 25.5.3 정적 메서드

> 정적(static) 메서드는 인스턴스를 생성하지 않아도 호출할 수 있는 메서드를 말한다.
> _430p_

<br>

> 클래스에서는 메서드에 `static` 키워드를 붙이면 정적 메서드(클래스 메서드)가 된다.
> _431p_

<br>

```javascript
class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }
}
```

> 정적 메서드는 인스턴스로 호출할 수 없다.
>
> _432p_

<br>

### 25.5.4 정적 메서드와 프로토타입 메서드의 차이

> 정적 메서드와 프로토타입 메서드의 차이는 다음과 같다.
>
> 1. 정적 메서드와 프로토타입 메서드는 자신이 속해 있는 프로토타입 체인이 다르다.
> 2. 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다.
> 3. 정적 메서드는 인스턴스 프로퍼티를 참조할 수 없지만 프로토타입 메서드는 인스턴스 프로퍼티를 참조할 수 있다.
>
> _432p_

<br>

### 25.5.5 클래스에서 정의한 메서드의 특징

> 1. `function` 키워드를 생략한 메서드 축약 표현을 사용한다.
> 2. 객체 리터럴과는 다르게 클래스에 메서드를 정의할 때는 콤마가 필요 없다.
> 3. 암묵적으로 strict mode로 실행된다.
> 4. `for ... in` 문이나 `Object.keys` 메서드 등으로 열거할 수 없다. 즉, 프로퍼티의 열거 가능 여부를 나타내며, 불리언 값을 갖는 프로퍼티 어트리뷰트 `[[Enumerable]]`의 값이 `false`다.
> 5. 내부 메서드 `[[Construct]]`를 갖지 않는 non-constructor다. 따라서 `new` 연산자와 함께 호출할 수 없다.
>
> _434p_

<br>

## 25.6 클래스의 인스턴스 생성 과정

#### 1. 인스턴스 생성과 `this` 바인딩

#### 2. 인스턴스 초기화

#### 3. 인스턴스 반환

```javascript
class Person {
  // 생성자
  constructor(name) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
    console.log(this); // Person {}
    console.log(Object.getPrototypeOf(this) === Person.prototype);

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.name = name;

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  }
}
```

<br>

## 25.7 프로퍼티

### 25.7.1 인스턴스 프로퍼티

```javascript
class Person {
  constructor(name) {
    // 인스턴스 프로퍼티
    this.name = name;
  }
}

const me = new Person("Lee");
console.log(me); // Person {name: "Lee"}
```

### 25.7.2 접근자 프로퍼티

> 접근자 프로퍼티(accessor property)는 자체적으로는 값(`[[Value]]` 내부 슬롯)을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수(accessor function)로 구성된 프로퍼티다.
>
> _437p_

<br>

```javascript
const person = {
  // 데이터 프로퍼티
  firstName: "Ungmo",
  lastName: "Lee",

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set fullName(name) {
    // 배열 디스트럭처링 할당: "36.1. 배열 디스트럭처링 할당" 참고
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조.
console.log(`${person.firstName} ${person.lastName}`); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person.fullName = "Heegun Lee";
console.log(person); // {firstName: "Heegun", lastName: "Lee"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person.fullName); // Heegun Lee

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
console.log(Object.getOwnPropertyDescriptor(person, "fullName"));
// {get: ƒ, set: ƒ, enumerable: true, configurable: true}
```

<br>

### 25.7.3 클래스 필드 정의 제안

> 클래스 필드(필드 또는 멤버)는 클래스 기반 객체지향 언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어다.
>
> _439p_

<br>
