
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
        '8' : ['5', '7', '7', '9', '0'],
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
        let iter = Perm.next();
        if (iter === false) {
            break;
        }
        result.push(iter.join(''));    
    }
    
    return result;
}

function PermutationsWithRepetition(src, len){

    var K = len - 1, k = 0,
        N = src.length, n = 0,
        out = [],
        stack = [];

    function next(){
        while (true) {
            while (n < src.length) {
                out[k] = src[n++];
                if (k == K) return out.slice(0);
                else {
                    if (n < src.length) {
                        stack.push(k);
                        stack.push(n);
                    }
                    k++;
                    n = 0;
                }
            }
            if (stack.length == 0) break;

            n = stack.pop();
            k = stack.pop();
        }
        return false;
    }

    //function rewind(){ k = 0; n = 0; out = []; stack = []; }

    //function each(cb) {
    //    rewind();
    //    var v;
    //    while (v = next()) if (cb(v) === false) return;
    //}

    return {
        next: next
    //    each: each,
    //    rewind: rewind
    };
}

console.log(getPINs('11'));



