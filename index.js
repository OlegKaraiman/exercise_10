function myPadString(str, lengthStr, symbol, flag) {
    let resStr = '';
    let resSymbol = '';
    let str1 = str;
    const symbol1 = symbol;
    if (str1.length >= lengthStr) {
        for (let i = 0; i < lengthStr; i++) {
            resStr += str1;
        }
    } else if (str1.length < lengthStr) {
        for (let i = str1.length; i < lengthStr; i++) {
            if (flag === 'r' || !flag) {
                resStr = str1 += symbol1;
            } else if (flag === 'l') {
                resSymbol += symbol1;
                resStr = resSymbol + str1;
            }
        }
    }
    return resStr;
}
myPadString('string', '18', '!', 'l');