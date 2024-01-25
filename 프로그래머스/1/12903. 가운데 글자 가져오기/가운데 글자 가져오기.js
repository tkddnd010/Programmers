function solution(s) {
    var answer = '';
    if(s.length % 2 !== 0){
        let i = Math.floor(s.length/2);
        answer = s[i];
    }else{
        let j = Math.floor(s.length) / 2 - 1;
        answer += s[j];
        answer += s[j+1];
    }
    return answer;
}