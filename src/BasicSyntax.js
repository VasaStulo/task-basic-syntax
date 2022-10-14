export function romanToInteger(str) {
    let result = 0;
    const num = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    const digits = Object.keys(num);
    for(let i=0; i<str.length; i++){
        if (digits.indexOf(str[i]) < digits.indexOf(str[i+1])) {
            result -= num[str[i]];
        } else {
            result += num[str[i]];
        }
    }
    return result;
}
