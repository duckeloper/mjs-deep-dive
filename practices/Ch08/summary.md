# 08장 제어문

> 제어문(control flow statement)은 조건에 따라 코드 블록을 실행(조건문)하거나 반복 실행(반복문)할 때 사용한다. 일반적으로 코드는 위에서 아래 방향으로 순차적으로 실행된다. 제어문을 사용하면 코드의 실행 흐름을 인위적으로 제어할 수 있다.
>
> 하지만 코드의 실행 순서가 변경된다는 것은 단순히 위에서 아래로 순차적으로 진행하는 직관적인 코드의 흐름을 혼란스럽게 만든다. 따라서 제어문은 코드의 흐름을 이해하기 어렵게 만들어 가독성을 해치는 단점이 있다. 가독성이 좋지 않은 코드는 오류를 발생시키는 원인이 된다.
>
> _93p_

<br>

## 8.1 블록문

> 블록문(block statement/compound statement)은 0개 이상의 문을 중괄호로 묶은 것으로, 코드 블록 또는 블록이라고 부르기도 한다. 자바스크립트는 블록문을 하나의 실행 단위로 취급한다. 블록문은 단독으로 사용할 수도 있으나 일반적으로 제어문이나 함수를 정의할 때 사용하는 것이 일반적이다.
>
> _93p_

<br>

> 문의 끝에는 세미콜론을 붙이는 것이 일반적이다. 하지만 블록문은 언제나 문의 종료를 의미하는 자체 종결성을 갖기 때문에 블록문의 끝에는 세미콜론을 붙이지 않는다는 것에 주의하기 바란다.
>
> _93p_

<br>

## 8.2 조건문

> 조건문(conditional statement)은 주어진 조건식(conditional expression)의 평가 결과에 따라 코드 블록(블록문)의 실행을 결정한다. 조건식은 불리언 값으로 평가될 수 있는 표현식이다.
>
> 자바스크립트는 `if ... else` 문과 `switch` 문으로 두 가지 조건문을 제공한다.
>
> _94p_

<br>

### 8.2.1 `if ... else` 문

> `if ... else` 문은 주어진 조건식(불리언 값으로 평가될 수 있는 표현식)의 평가 결과, 즉 논리적 참 또는 거짓에 따라 실행할 코드 블록을 결정한다. 조건식의 평가 결과가 `true`일 경우 `if` 문의 코드 블록이 실행되고 `false`일 경우 `else` 문의 코드 블록이 실행된다.
>
> _94p_

<br>

```javascript
// 만약 코드 블록 내의 문이 하나뿐이라면 중괄호를 생략할 수 있다.
var num = 2;
var kind;

if (num > 0) kind = "양수";
else if (num < 0) kind = "음수";
else kind = "영";

console.log(kind); // 양수
```

<br>

> 대부분의 `if ... else` 문은 삼항 조건 연산자로 바꿔 쓸 수 있다.
>
> _96p_

<br>

```javascript
// x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.
var x = 2;
var result;

if (x % 2) {
  // 2 % 2는 0이다. 이때 0은 false로 암묵적 강제 변환된다.
  result = "홀수";
} else {
  reulst = "짝수";
}

console.log(result); // 짝수
```

<br>

> 위 예제는 다음과 같이 삼항 조건 연산자로 바꿔 쓸 수 있다.
>
> _96p_

<br>

```javascript
var x = 2;

// 0은 false로 취급된다.
var result = x % 2 ? "홀수" : "짝수";
console.log(result); // 짝수
```

<br>

> 위 예제는 두 가지 경우의 수('홀수' 또는 '짝수')를 갖는 경우다. 만약 경우의 수가 세 가지('양수', '음수', '영')라면 다음과 같이 바꿔 쓸 수 있다.
> _96p_

<br>

```javascript
// 0은 false로 취급된다.
var kind = num ? (num > 0 ? '양수 : '음수') : '영';

console.log(kind); // 양수
```

<br>

### 8.2.2 `switch` 문

> `switch` 문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 `case` 문으로 실행 흐름을 옮긴다. `case` 문은 상황(case)을 의미하는 표현식을 지정하고 콜론으로 마친다. 그리고 그 뒤에 실행할 문들을 위치시킨다.
>
> `switch` 문의 표현식과 일치하는 `case` 문이 없다면 실행 순서는 `default` 문으로 이동한다. `default` 문은 선택사항으로, 사용할 수도 있고 사용하지 않을 수도 있다.
>
> _97p_

<br>

> `if ... else` 문의 조건식은 불리언 값으로 평가되어야 하지만 `switch` 문의 표현식은 불리언 값보다는 문자열이나 숫자 값인 경우가 많다. 다시 말해, `if ... else` 문은 논리적 참, 거짓으로 실행할 코드 블록을 결정한다. `switch` 문은 논리적 참, 거짓보다는 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용한다.
>
> _97p_

<br>

```javascript
// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = "January";
    break; // break가 없으면 이 코드 아래의 모든 case가 실행된다
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month";
}

console.log(monthName); // November
```

<br>

> 만약 `if ... else` 문으로 해결할 수 있다면 `switch` 문보다 `if ... else` 문을 사용하는 편이 좋다. 하지만 조건이 너무 많아서 `if ... else` 문보다 `switch` 문을 사용했을 때 가독성이 더 좋다면 `switch` 문을 사용하는 편이 좋다.
>
> _100p_

<br>

## 8.3 반복문

> 반복문(loop statement)은 조건식의 평가 결과가 참인 경우 코드 블록을 실행한다. 그 후 조건식을 다시 평가하여 여전히 참인 경우 코드 블록을 다시 실행한다. 이는 조건식이 거짓일 때까지 반복된다.
>
> 자바스크립트는 세 가지 반복문인 `for` 문, `while` 문, `do ... while` 문을 제공한다.
>
> _100p_

<br>

### 8.3.1 `for` 문

> `for` 문은 조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행한다.
>
> (...)
>
> `for` 문 내에 `for` 문을 중첩해 사용할 수 있다. 이를 중첩 `for` 문이라 한다.
>
> _101p - 102p_

<br>

### 8.3.2 `while` 문

> `while` 문은 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행한다. `for` 문은 반복 횟수가 명확할 때 주로 사용하고 `while` 문은 반복 횟수가 불명확할 때 주로 사용한다.
>
> `while` 문은 조건문의 평가 결과가 거짓이 되면 코드 블록을 실행하지 않고 종료한다. 만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환하여 논리적 참, 거짓을 구별한다.
>
> 조건식의 평가 결과가 언제나 참이면 무한루프가 된다.
>
> 무한루프에서 탈출하기 위해서는 코드 블록 내에 `if` 문으로 탈출 조건을 만들고 `break` 문으로 코드 블록을 탈출한다.
>
> _103p_

<br>

### 8.3.3 `do .. while` 문

> `do ... while` 문은 코드 블록을 먼저 실행하고 조건식을 평가한다. 따라서 코드 블록은 무조건 한 번 이상 실행된다.
>
> _103p_

<br>

```javascript
var count = 0;
// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count); // 0 1 2
  count++;
} while (count < 3);
```

<br>

## 8.4 `break` 문

> `switch` 문과 `while` 문에서 살펴보았듯이 `break` 문은 코드 블록을 탈출한다. 좀 더 정확히 표현하자면 코드 블록을 탈출하는 것이 아니라 레이블 문, 반복문(`for`, `for ... in`, `for ... of`, `while`, `do ... while`) 또는 `switch` 문의 코드 블록을 탈출한다. 레이블 문, 반복문, `switch` 문의 코드 블록 외에 `break` 문을 사용하면 `SynataxError`(문법 에러)가 발생한다.
>
> _104p_

<br>

```javascript
if (true) {
    break; // Uncaught SyntaxError: Illegal break statement
}
```

<br>

> 레이블 문(label statement)이란 식별자가 붙은 문을 말한다.
>
> 레이블 문은 프로그램의 실행 순서를 제어하는 데 사용한다. (...) 레이블 문을 탈출하려면 `break` 문에 레이블 식별자를 지정한다.
>
> _104p_

<br>

```javascript
// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log("foo");

// foo라는 레이블 식별자가 붙은 레이블 블록문
foo: {
  console.log(1);
  break foo; // foo 레이블 블록문을 탈출한다.
  console.log(2);
}

console.log("Done!");
```

<br>

> 중첩된 `for` 문의 내부 `for` 문에서 `break` 문을 실행하면 내부 `for` 문을 탈출하여 외부 `for` 문으로 진입한다. 이때 내부 `for` 문이 아닌 외부 `for` 문을 탈출하려면 레이블 문을 사용한다.
>
> _105p_

<br>

```javascript
// outer라는 식별자가 붙은 레이블 `for` 문
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i + j === 3) break outer;
    console.log("inner [${i}, {j}]");
  }
}

console.log("Done!");
```

<br>

> 레이블 문은 중첩된 `for` 문 외부로 탈출할 때 유용하지만 그 밖의 경우에는 일반적으로 권장하지 않는다. 레이블 문을 사용하면 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지기 때문이다.
>
> _105p_

<br>

## 8.5 `continue` 문

> `continue` 문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킨다. `break` 문처럼 반복문을 탈출하지는 않는다.
>
> _106p_

<br>

```javascript
var string = "Hello World.";
var search = "l";
var count = 0;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if (string[i] !== search) continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3

// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, "g");
console.log(string.match(regexp).length); // 3
```

<br>

```javascript
for (var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 증가시킨다.
  if (string[i] === search) count++;
}
```

<br>

```javascript
// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
  // 'l'이면 카운트를 증가시킨다.
  if (string[i] === search) {
    count++;
    // code
    // code
    // code
  }
}

// continue 문을 사용하면 if 문 밖에 코드를 작성할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 카운트를 증가시키지 않는다.
  if (string[i] !== search) continue;

  count++;
  // code
  // code
  // code
}
```
