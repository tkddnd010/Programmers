function solution(arr, divisor) {
  var answer = [];
  let narr = arr.sort((a, b) => a - b);
  for (let i = 0; i < narr.length; i++) {
    if (narr[i] % divisor === 0) {
      answer.push(narr[i]);
    }
  }
  if (answer.length === 0) answer.push(-1);
  return answer;
}