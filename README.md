# 모던 자바스크립트 Deep Dive

<br>

## 1. 리포지토리 소개

<br>

<figure align="center">
<img src="./mjs-cover.jpeg" alt="모던 자바스크립트 Deep Dive 표지 사진" width="300"/>
<figcaption>모던 자바스크립트 Deep Dive</figcatipn>
</figure>

<br>

본 리포지토리는 이웅모 님의 [모던 자바스크립트 Deep Dive](https://wikibook.co.kr/mjs/)를 교재로 학습한 기록입니다. examples 폴더는 책이 제공하는 예제를 그대로 담고 있으며, practice 폴더는 본문 발췌와 요약, 그리고 제가 직접 실습한 예제를 담고 있습니다.

<br>

본 문서는 제가 이 책으로 공부하게 된 배경과, 책의 소개를 담았습니다.

<br>

---

<br>

## 2. 학습 배경: VanillaJS를 더 공부할까, React를 배워볼까?

<br>

2022년 5월에 코딩 공부를 다시 시작하면서 먼저 [생활코딩](https://opentutorials.org/course/1)의 HTML, CSS, 자바스크립트 강의로 시작했습니다. 6월에는 freeCodeCamp의 개정된 [Responsive Web Design](https://www.freecodecamp.org/learn/2022/responsive-web-design/) 과정을 수료했습니다. 7월에는 freeCodeCamp의 [JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) 과정을 수료했습니다. 그렇게 저는 HTML, CSS, JS를 모두 얕게나마 경험할 수 있었습니다.

<br>

<figure align="center">
<img src="./fcc-js-certificate.png" alt="freeCodeCamp '자바스크립트 알고리즘 & 자료구조' 과정 수료증" width="300"/>
<figcaption>FCC 자바스크립트 과정 수료증</figcaption>
</figure>

<br>

많은 개발자들이 입문자에게 "만들고 싶은 게 있으면 일단 뭐든 만들어봐라"라고 조언합니다. 저는 정적사이트 생성기인 Gatsby를 이용해 Github Pages 블로그를 만들겠다는 목표를 갖고 있었습니다. VanillaJS 숙련도가 부족하다고 생각하면서도, 당장 VanillaJS에 투자하기는 망설여졌습니다. 개발자 선배들의 조언을 따르자면, 저는 "공부"는 그만하고 어서 블로그를 "만들어야" 했기 때문입니다. 저는 Gatsby를 다루기 위해 React 공부를 시작했습니다.

<br>

그렇게 [김민준(Velopert)](https://github.com/velopert) 님의 [리액트를 다루는 기술](http://www.yes24.com/Product/Goods/78233628)로 공부를 하기 시작했습니다. 그런데 페이지가 넘어갈수록 벽이 느껴졌습니다. VanillaJS를 다뤄본 경험이 부족해 React의 역할과 작동 방식이 이해되지 않았습니다. 그저 예제를 따라 코드를 입력하고 있을 뿐, 머릿속에 들어오는 것이 없었습니다. 공부에 집중이 되지 않았고, 하고 있는 공부에 회의감만 늘었습니다.

<br>

무엇보다 지식에 빈틈이 느껴지는 것이 불편했습니다. 코드를 한 줄 한 줄 적어나갈 때, 그 코드가 어떤 의미인지 제대로 알고 쓰고 싶다는 생각이 들었습니다. VanillaJS의 부족한 점을 React가 어떻게 편리하게 만들어주는지 체감하고 싶었습니다. 아직은 React를 공부할 때가 아니었습니다. 그리고 유튜브 [라매개발자](https://youtu.be/YbVuqWD12Ko) 님의 추천으로 이 책, "모던 자바스크립트 Deep Dive"를 선택하게 됐습니다.

<br>

> 최근에 자바스크립트 Deep Dive라는 책을 보고 있어요. 이거 한 권으로 끝내시면 됩니다. 제가 봤을 때는요.
>
> _- 유튜브 라매개발자_

<br>

---

<br>

## 3. 책 소개: 빈틈을 허락하지 않는다

<br>
