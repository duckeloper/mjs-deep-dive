# 19장 프로토타입

> 자바스크립트는 명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based) 객체지향 프로그래밍(OOP; Object Oriented Programming)을 지원하는 멀티 패러다임 프로그래밍 언어다.
>
> 간혹 C++나 자바 같은 클래스 기반 객체지향 프로그래밍 언어의 특징인 상속, 캡슐화를 위한 키워드인 `public`, `private`, `protected` 등이 없어서 자바스크립트는 객체지향 언어가 아니라고 오해(자바스크립트는 가장 많은 오해를 받는 언어다)하는 경우도 있다. 하지만 자바스크립트는 클래스 기반 객체지향 프로그래밍 언어보다 효율적이며 더 강력한 객체지향 프로그래밍 능력을 지니고 있는 프로토타입 기반의 객체지향 프로그래밍 언어다.
>
> 자바스크립트는 객체 기반의 프로그래밍 언어이며 자바스크립트를 이루고 있는 거의 "모든 것"이 객체다. 원시 타입(primitive type)의 값을 제외한 나머지 값들(함수, 배열, 정규 표현식 등)은 모두 객체다.
> _259p_

<br>

## 19.1 객체지향 프로그래밍

> 객체지향 프로그래밍은 프로그래밍 명령어 또는 함수의 목록으로 보는 전통적인 명령형 프로그래밍(imperative programming)의 절차지향적 관점에서 벗어나 여러 개의 독립적 단위, 즉 객체(object)의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 말한다.
>
> 객체지향 프로그래밍은 실세계의 실체(사물이나 개념)를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작한다. 실체는 특징이나 성질을 나타내는 속성(attribute/property)을 가지고 있고, 이를 통해 실체를 인식하거나 구별할 수 있다.
>
> 예를 들어, 사람은 이름, 주소, 성별, 나이, 신장, 체중, 학력, 성격, 직접 등 다양한 속성을 갖는다. 이때 "이름이 아무개이고 성별은 여성이며 나이는 20세인 사람"과 같이 속성을 구체적으로 표현하면 특정한 사람을 다른 사람과 구별하여 인식할 수 있다.
>
> 이러한 방식을 프로그래밍에 접목시켜보자. 사람에게는 다양한 속성이 있으나 우리가 구현하려는 프로그램에서는 사람의 "이름"과 "주소"라는 속성에만 관심이 있다고 가정하자. 이처럼 다양한 속성 중에서 프로그램에 필요한 속성만 간추려 내어 표현하는 것을 추상화(abstraction)라 한다.
>
> "이름"과 "주소"라는 속성을 갖는 `person`이라는 객체를 자바스크립트로 표현하면 다음과 같다.
>
> _260p_

<br>

```javascript
// 이름과 주소 속성을 갖는 객체
const person = {
  name: "Lee",
  address: "Seoul",
};

console.log(person); // {name: "Lee", address: "Seoul"}
```

<br>

> 이때 프로그래머(subject, 주체)는 이름과 주소 속성으로 표현된 객체(object)인 `person`을 다른 객체와 구별하여 인식할 수 있다. 이처럼 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라 하며, 객체지향 프로그래밍은 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임이다.
>
> 이번에는 원(Circle)이라는 개념을 객체로 만들어보자. 원에는 반지름이라는 속성이 있다. 이 반지름을 가지고 원의 지름, 둘레, 넓이를 구할 수 있다. 이때 반지름은 원의 상태를 나타내는 데이터이며 원의 지름, 둘레, 넓이를 구하는 것은 동작이다.
>
> _260p_

<br>

```javascript
const circle = {
  radius: 5, // 반지름

  // 원의 지름: 2r
  getDiameter() {
    return 2 * this.radius;
  },

  // 원의 둘레: 2πr
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },

  // 원의 넓이: πrr
  getArea() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(circle);
// {radius: 5, getDiameter: ƒ, getPerimeter: ƒ, getArea: ƒ}

console.log(circle.getDiameter()); // 10
console.log(circle.getPerimeter()); // 31.41592653589793
console.log(circle.getArea()); // 78.53981633974483
```

<br>

> 이처럼 객체지향 프로그래밍은 객체의 상태(state)를 나타내는 데이터와 상태 데이터를 조작할 수 있는 동작(behavior)을 하나의 논리적인 단위로 묶어 생각한다. 따라서 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조라고 할 수 있다. 이때 객체의 상태 데이터를 프로퍼티(property), 동작을 메서드(method)라 부른다.
>
> 각 객체는 고유의 기능을 갖는 독립적인 부품으로 볼 수 있지만 고유한 기능을 수행하면서 다른 객체와 관계성(relationship)을 가질 수 있다. 다른 객체와 메시지를 주고받거나 데이터를 처리할 수도 있다. 또는 다른 객체의 상태 데이터나 동작을 상속받아 사용하기도 한다.
>
> _261p_

<br>

## 19.2 상속과 프로토타입

> 상속(inheritance)은 객체지향 프로그래밍의 핵심 개념으로, 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.
>
> 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다. 중복을 제거하는 방법은 기존의 코드를 적극적으로 재사용하는 것이다. 코드 재사용은 개발 비용을 현저히 줄일 수 있는 잠재력이 있으므로 매우 중요하다.
>
> _261p_

<br>

```javascript
// 생성자 함수
function Circle(radius) {
  this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
// 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea); // true

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172
```

<br>

> 상속은 코드의 재사용이란 관점에서 매우 유용하다. 생성자 함수가 생성할 모든 인스턴스가 공통적으로 사용할 프로퍼티나 메서드를 프로토타입에 미리 구현해 두면 생성자 함수가 생성할 모든 인스턴스는 별도의 구현 없이 상위(부모) 객체인 프로토타입의 자산을 공유하여 사용할 수 있다.
>
> _264p_

<br>

## 19.3 프로토타입 객체

> 프로토타입 객체(또는 줄여서 프로토타입)란 객체지향 프로그래밍의 근간을 이루는 객체 간 상속(inheritance)을 구현하기 위해 사용된다. 프로토타입은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체로서 다른 객체에 공유 프로퍼티(메서드 포함)를 제공한다. 프로토타입을 상속받은 하위(자식) 객체는 상위 객체의 프로퍼티를 자신의 프로퍼티처럼 자유롭게 사용할 수 있다.
>
> 모든 객체 `[[Prototype]]`이라는 내부 슬롯을 가지며, 이 내부 슬롯의 값은 프로토타입의 참조(`null`인 경우도 있다)다. `[[Prototype]]`에 저장되는 프로토타입은 객체 생성 방식에 의해 결정된다. 즉, 객체가 생성될 때 객체 생성 방식에 따라 프로토타입이 결정되고 `[[Prototype]]`에 저장된다.
>
> _264p_

<br>

### 19.3.1 `__proto__` 접근자 프로퍼티

> 모든 객체는 `__proto__` 접근자 프로퍼티를 통해 자신의 프로토타입, 특 `[[Prototype]]` 내부 슬롯에 간접적으로 접근할 수 있다.
>
> _265p_

<br>

#### `__proto__`는 접근자 프로퍼티다.

> 내부 슬롯은 프로퍼티가 아니다. 따라서 자바스크립트는 원칙적으로 내부 슬롯과 내부 메서드에 직접적으로 접근하거나 호출할 수 있는 방법을 제공하지 않는다. 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다. `[[Prototype]]` 내부 슬롯에도 직접 접근할 수 없으며 `__proto__` 접근자 프로퍼티를 통해 간접적으로 `[[Prototype]]` 내부 슬롯의 값, 즉 프로토타입에 접근할 수 있다.
>
> _266p_

<br>

#### `__proto__` 접근자 프로퍼티는 상속을 통해 사용된다.

> `__proto__` 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 `Object.prototype`의 프로퍼티다. 모든 객체는 상속을 통해 `Object.prototype.__proto__` 접근자 프로퍼티를 사용할 수 있다.
>
> _267p_

<br>

```javascript
const person = { name: "Lee" };

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty("__proto__")); // false

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); // true
```

<br>

#### `Object.prototype`

> 모든 객체는 프로토타입의 계층 구조인 프로토타입 체인에 묶여 있다. 자바스크립트 엔진은 객체의 프로퍼티(메서드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 `__proto__` 접근자 프로퍼티가 가리키는 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 프로토타입 체인의 종점, 즉 프로토타입 체인의 최상위 객체는 `Object.prototype`이며, 이 객체의 프로퍼티와 메서드는 모든 객체에 상속된다.
> _267p_

<br>

#### `__proto__` 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유

> `[[Prototype]]` 내부 슬롯의 값, 즉 프로토타입에 접근하기 위해 접근자 프로퍼티를 사용하는 이유는 상호 참조에 의해 프로토타입 체인이 생성되는 것을 방지하기 위해서다.
>
> _268p_

<br>

#### `__proto__` 접근자 프로퍼티를 코드 내에서 직접 사용하는 것은 권장하지 않는다.

> 코드 내에서 `__proto__` 접근자 프로퍼티를 직접 사용하는 것은 권장하지 않는다. 모든 객체가 `__proto__` 접근자 프로퍼티를 사용할 수 있는 것은 아니기 때문이다.
>
> _268p_

<br>

### 19.3.2 함수 객체의 `prototype` 프로퍼티

> 함수 객체만이 소유하는 `prototype` 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.
>
> _269p_

<br>

```javascript
// 함수 객체는 prototype 프로퍼티를 소유한다.
(function () {}.hasOwnProperty("prototype")); // -> true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
({}.hasOwnProperty("prototype")); // -> false
```

<br>

> `prototype` 프로퍼티는 생성자 함수가 생성할 객체(인스턴스)의 프로토타입을 가리킨다. 따라서 생성자 함수로서 호출할 수 없는 함수, 즉 non-constructor인 화살표 함수와 ES6 메서드 축약 표현으로 정의한 메서드는 `prototype` 프로퍼티를 소유하지 않으며 프로토타입도 생성하지 않는다.
>
> _270p_

<br>

> 모든 객체가 가지고 있는(엄밀히 말하면 `Object.prototype`으로부터 상속받은) `__proto__` 접근자 프로퍼티와 함수 객체만이 가지고 있는 `prototype` 프로퍼티는 결국 동일한 프로토타입을 가리키낟. 하지만 이들 프로퍼티를 사용하는 주체가 다르다.
>
> |            구분             |    소유     |        값         |  사용 주체  |                                  사용 목적                                   |
> | :-------------------------: | :---------: | :---------------: | :---------: | :--------------------------------------------------------------------------: |
> | `__proto__` 접근자 프로퍼티 |  모든 객체  | 프로토타입의 참조 |  모든 객체  |           객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용            |
> |    `prototype` 프로퍼티     | constructor | 프로토타입의 참조 | 생성자 함수 | 생성자 함수가 자신이 생성할 객체(인스턴스)의 프로토타입을 할당하기 위해 사용 |
>
> _270p_

<br>

```javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

// 결국 Person.prototype과 me.__proto__는 결국 동일한 프로토타입을 가리킨다.
console.log(Person.prototype === me.__proto__); // true
```

<br>

### 19.3.3 프로토타입의 `constructor` 프로퍼티와 생성자 함수

> 모든 프로토타입은 `constructor` 프로퍼티를 갖는다. 이 `constructor` 프로퍼티는 `prototype` 프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킨다. 이 연결은 생성자 함수가 생성될 때, 즉 함수 객체가 생성될 때 이뤄진다.
>
> _271p_

<br>

## 19.4 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입

> 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍(pair)으로 존재한다.
>
> _275p_

<br>

## 19.5 프로토타입의 생성 시점

> 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성된다.
>
> _276p_

<br>

### 19.5.1 사용자 정의 생성자 함수와 프로토타입 생성 시점

> 생성자 함수로서 호출할 수 있는 함수, 즉 `constructor`는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
>
> _277p_

<br>

### 19.5.2 빌트인 생성자 함수와 프로토타입 생성 시점

> `Object`, `String`, `Number`, `Function`, `Array`, `RegExp`, `Date`, `Promise` 등과 같은 빌트인 생성자 함수도 일반 함수와 마찬가지로 빌트인 생성자 함수가 생성되는 시점에 프로토타입이 생성된다. 모든 빌트인 생성자 함수는 전역 객체가 생성되는 시점에 생성된다. 생성된 프로토타입은 빌트인 생성자 함수의 `prototype` 프로퍼티에 바인딩된다.
>
> _278p_

<br>

#### 전역 객체(global object)

> 전역 객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 생성되는 특수한 개체다. 전역 객체는 클라이언트 사이드 환경(브라우저)에서는 `window`, 서버 사이드 환경(Node.js)에서는 `global` 객체를 의미한다.
>
> _279p_

<br>

## 19.6 객체 생성 방식과 프로토타입의 결정

> 객체는 다음과 같이 다양한 생성 방법이 있다.
>
> - 객체 리터럴
> - `Object` 생성자 함수
> - 생성자 함수
> - `Object.create` 메서드
> - 클래스(ES6)
>
> 이처럼 다양한 방식으로 생성된 모든 객체는 각 방식마다 세부적인 객체 생성 방식의 차이는 있으나 추상 연산 `OrdinaryObjectCreate`에 의해 생성된다는 공통점이 있다.
>
> 추상 연산 `OrdinaryObjectCreate`는 필수적으로 자신이 생성할 객체의 프로토타입을 인수로 전달받는다. 그리고 자신이 생성할 객체에 추가할 프로퍼티 목록을 옵션으로 전달할 수 있다. 추상 연산 `OrdinaryObjectCreate`는 빈 객체를 생성한 후 , 객체에 추가할 프로퍼티 목록이 인수로 전달된 경우 프로퍼티를 객체에 추가한다. 그리고 인수로 전달받은 프로토타입을 자신이 생성한 객체의 `[[Prototype]]` 내부 슬롯에 할당한 다음, 생성한 객체를 반환한한다.
>
> 즉, 프로토타입은 추상 연산 `OrdinaryObjectCreate`에 전달되는 인수에 의해 결정된다. 이 인수는 객체가 생성되는 시점에 객체 생성 방식에 의해 결정된다.
>
> _280p_

<br>

### 19.6.1 객체 리터럴에 의해 생성된 객체의 프로토타입

### 19.6.2 `Object` 생성자 함수에 의해 생성된 객체의 프로토타입

### 19.6.3 생성자 함수에 의해 생성된 객체의 프로토타입

<br>

## 19.7 프로토타입 체인

> 자바스크립트는 객체의 프로퍼티(메서드 포함)에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 `[[Prototype]]` 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 이를 프로토타입 체인이라 한다. 프로토타입 체인은 자바스크립트가 객체지향 프로그래밍의 상속을 구현하는 메커니즘이다.
>
> _286p_

<br>

## 19.8 오버라이딩과 프로퍼티 섀도잉

> 상속 관계에 의해 프로퍼티가 가려지는 현상을 프로퍼티 섀도잉(property shadowing)이라 한다.
>
> _289p_

<br>

> 프로토타입 프로퍼티를 변경 또는 삭제하려면 하위 객체를 통해 프로토타입 체인으로 접근하는 것이 아니라 프로토타입에 직접 접근해야 한다.
>
> _290p_

<br>

## 19.9 프로토타입의 교체

> 프로토타입은 임의의 다른 객체로 변경할 수 있다. 이것은 부모 객체인 프로토타입을 동적으로 변경할 수 있다는 것을 의미한다. 이러한 특징을 활용하여 객체 간의 상속 관계를 동적으로 변경할 수 있다. 프로토타입은 생성자 함수 또는 인스턴스에 의해 교체할 수 있다.
>
> _290p_

<br>

### 19.9.1 생성자 함수에 의한 프로토타입의 교체

### 19.9.2 인스턴스에 의한 프로토타입의 교체

<br>

## 19.10 `instanceof` 연산자

> `instanceof` 연산자는 이항 연산자로서 좌변에 객체를 가리키는 식별자, 우변에 생성자 함수를 가리키는 식별자를 피연산자로 받는다. 만약 우변의 피연산자가 함수가 아닌 경우 `TypeError`가 발생한다.
>
> 우변의 생성자 함수의 `prototype`에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 `true`로 평가되고, 그렇지 않은 경우에는 `false`로 평가된다.
>
> _296p_

<br>

```javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Person); // true

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가된다.
console.log(me instanceof Object); // true
```

<br>

> `instanceof` 연산자는 프로토타입의 `constructor` 프로퍼티가 가리키는 생성자 함수를 찾는 것이 아니라 생성자 함수의 `prototype`에 바인딩된 객체가 프로토타입 체인 상에 존재하는지 확인한다.
>
> _297p_

<br>

## 19.11 직접 상속

### 19.11.1 `Object.create`에 의한 직접 상속

> `Object.create` 메서드는 명시적으로 프로토타입을 지정하여 새로운 객체를 생성한다. `Object.create` 메서드도 다른 객체 생성 방식과 마찬가지로 추상 연산 `OrdinaryObjectCreate`를 호출한다.
>
> _299p_

<br>

```javascript
// 프로토타입이 null인 객체를 생성한다. 생성된 객체는 프로토타입 체인의 종점에 위치한다.
// obj → null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); // true
// Object.prototype을 상속받지 못한다.
console.log(obj.toString()); // TypeError: obj.toString is not a function

// obj → Object.prototype → null
// obj = {};와 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// obj → Object.prototype → null
// obj = { x: 1 };와 동일하다.
obj = Object.create(Object.prototype, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
});
// 위 코드는 다음과 동일하다.
// obj = Object.create(Object.prototype);
// obj.x = 1;
console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

const myProto = { x: 10 };
// 임의의 객체를 직접 상속받는다.
// obj → myProto → Object.prototype → null
obj = Object.create(myProto);
console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj) === myProto); // true

// 생성자 함수
function Person(name) {
  this.name = name;
}

// obj → Person.prototype → Object.prototype → null
// obj = new Person('Lee')와 동일하다.
obj = Object.create(Person.prototype);
obj.name = "Lee";
console.log(obj.name); // Lee
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true
```

<br>

### 19.11.2 객체 리터럴 내부에서 `__proto__`에 의한 직접 상속

<br>

## 19.12 정적 프로퍼티/메서드

> 정적(static) 프로퍼티/메서드는 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드를 말한다.
>
> _303p_

<br>

```javascript
// 생성자 함수
function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

// 정적 프로퍼티
Person.staticProp = "static prop";

// 정적 메서드
Person.staticMethod = function () {
  console.log("staticMethod");
};

const me = new Person("Lee");

// 생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 참조/호출한다.
Person.staticMethod(); // staticMethod

// 정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다.
// 인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해야 한다.
me.staticMethod(); // TypeError: me.staticMethod is not a function
```

<br>

> 생성자 함수가 생성한 인스턴스는 자신의 프로토타입 체인에 속한 객체의 프로퍼티/메서드에 접근할 수 있다. 하지만 정적 프로퍼티/메서드는 인스턴스의 프로토타입 체인에 속한 객체의 프로퍼티/메서드가 아니므로 인스턴스로 접근할 수 없다.
>
> _304p_

<br>

## 19.13 프로퍼티 존재 확인

### 19.13.1 `in` 연산자

> `in` 연산자는 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인한다.
>
> _306p_

<br>

```javascript
const person = {
  name: "Lee",
  address: "Seoul",
};

// person 객체에 name 프로퍼티가 존재한다.
console.log("name" in person); // true
// person 객체에 address 프로퍼티가 존재한다.
console.log("address" in person); // true
// person 객체에 age 프로퍼티가 존재하지 않는다.
console.log("age" in person); // false
```

<br>

### 19.13.2 `Object.prototype.hasOwnProtpery` 메서드

```javascript
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("age")); // false
```

<br>

## 19.14 프로퍼티 열거

### 19.14.1 `for ... in` 문

> 객체의 모든 프로퍼티를 순회하며 열거(enumeration)하려면 `for ... in` 문을 사용한다.
>
> _307p_

<br>

```javascript
const person = {
  name: "Lee",
  address: "Seoul",
};

// for...in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
for (const key in person) {
  console.log(key + ": " + person[key]);
}
// name: Lee
// address: Seoul
```

<br>

> `for ... in` 문은 객체의 프로토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 `[[Enumerable]]`의 값이 `true`인 프로퍼티를 순회하며 열거(enumeration)한다.
>
> _309p_

<br>

### 19.14.2 `Object.keys`/`values`/`entries` 메서드

> `Object.keys` 메서드는 객체 자신의 열거 가능한(enumerable) 프로퍼티 키를 배열로 반환한다.
>
> _311p_

<br>

```javascript
const person = {
  name: "Lee",
  address: "Seoul",
  __proto__: { age: 20 },
};

console.log(Object.keys(person)); // ["name", "address"]
```

<br>

> ES8에서 도입된 `Object.values` 메서드는 객체 자신의 열거 가능한 프로퍼티 값을 배열로 반환한다.
>
> _312p_

<br>

```javascript
console.log(Object.values(person)); // ["Lee", "Seoul"]
```

<br>

> ES8에서 도입된 `Object.entries` 메서드는 객체 자신의 열거 가능한 프로퍼티 키와 값의 쌍의 배열을 배열에 담아 반환한다.
>
> _312p_

<br>

```javascript
console.log(Object.entries(person)); // [["name", "Lee"], ["address", "Seoul"]]

Object.entries(person).forEach(([key, value]) => console.log(key, value));
/*
name Lee
address Seoul
*/
```
