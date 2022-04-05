
function getPINs(observed) {
    
    let result = [];
    const size = observed.length;
    const layoutExp = {
        '0' : ['0', '8'],
        '1' : ['1', '2', '4'],
        '2' : ['1', '2', '3', '5'],
        '3' : ['2', '3', '6'],
        '4' : ['1', '4', '5', '7'],
        '5' : ['2', '4', '5', '6', '8'],
        '6' : ['3', '5', '6', '9'],
        '7' : ['4', '7', '8'],
        '8' : ['5', '7', '8', '9', '0'],
        '9' : ['6', '8', '9']
    };

    let layout = [];
    for (let i = 0; i < size; ++i) {
        let arr = layoutExp[observed[i]];
        for (let j = 0; j < arr.length; ++j) {
            let value = arr[j];
            if (layout.indexOf(value) == -1) {
                layout.push(value);
            }
        }
    }

    console.log(layout);
    let Perm = PermutationsWithRepetition(layout, size);
    while (true) {
        let i = Perm.next();
        if (i === false) {
            break;
        }
        if (IsValid(i, layoutExp, observed)) {
            result.push(i.join(''));
        }
    }
    
    return result;
}

function IsValid(i, layoutExp, observed) {

    for (let i = 0; i < observed.length; ++i) {

        if (layoutExp[observed[i]].indexOf(i[i]) == -1) {
            return false;
        }
        
    }

    return true;

}

function PermutationsWithRepetition(src, len) {

    let K = len - 1, k = 0,
        N = src.length, n = 0,
        out = [],
        stack = [];

    function Next() {
        while (true) {
            while (n < src.length) {
                out[k] = src[n++];
                if (k == K) {
                    return out.slice(0);
                } else {
                    if (n < src.length) {
                        stack.push(k);
                        stack.push(n);
                    }
                    k++;
                    n = 0;
                }
            }
            if (stack.length == 0) {
                break;
            }    

            n = stack.pop();
            k = stack.pop();
        }
        return false;
    }

    return {
        next: Next
    };
}

console.log(getPINs('11'));



