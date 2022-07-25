const arr = [1, 2, 3];

arr.forEach(alert);

// Node.js로 실행시 "ReferenceError: alert is not defined" 에러 발생
// 클라이언트 사이드 Web API는 Node.js 환경에서 실행할 수 없음
