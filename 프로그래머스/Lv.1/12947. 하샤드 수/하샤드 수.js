function solution(x) {
  let answer;
  let result = 0;
  let sum = String(x).split("").map(Number);
  for (let i = 0; i < sum.length; i++) {
    result += sum[i];
  }
  x % result === 0 ? (answer = true) : (answer = false);
  return answer;
}