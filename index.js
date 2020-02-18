   function myPadString(str, lengthStr, symbol, flag) {
            let resStr = '';
            let resSymbol = '';
            let str1 = str;
            const symbol1 = symbol;
            if (str1.length >= lengthStr) {
                resStr = str1;

            } else if (str1.length < lengthStr) {
                for (let i = str1.length; i < lengthStr; i++) {
                    if (!flag) {
                        resStr = str1 += symbol1;
                    } else if (flag) {
                        resSymbol += symbol1;
                        resStr = resSymbol + str1;
                    }
                }
            }
            return resStr;
        }
        myPadString('string', '1', '!', 'f');
