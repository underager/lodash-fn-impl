console.log('connected')

class _{
    static concat(array, ...values){
        for(let i = 0; i < values.length; i++){
            array = array.concat(values[i]);
        }

        return array;
    }

    static drop(array, n=1){
        return array.slice(n, array.length);
    }

    static dropRight(array, n=1){
        return array.slice(0, array.length - n);
    }

    static fill(array, fillValue, startIndex = 0, skipIndex= null){
        for (let i = startIndex; i < array.length; i++){
            if(skipIndex && i === skipIndex){
                continue;
            }
            array[i] = fillValue;
        }

        return array;
    }

    static flatten(array){
        return [].concat(...array);
    }

    static intersection(...arrays){
        if(arrays.length === 0) return [];

        const intersection = arrays.reduce((prev, current) =>{
            return prev.filter(elem => current.includes(elem));
        });

        return [...new Set(intersection)];
    }

    static remove(arr, predicate){
        const truthy = arr.filter(predicate);

        for(let i of truthy){
            let n = arr.indexOf(i);
            arr.splice(n, 1);
        }
        // arr = truthy;
        return truthy;
    }

    static union(...arrays){
        if(arrays.length === 0) return [];

        const union = arrays.reduce((prev, current) =>{
            return prev.concat(current);
        });

        return [...new Set(union)];
    }

    //#region Collection methods [S]
    static filter(arr, predicate){
        const resultArr = [];
        for (let a of arr){
            let result = predicate(a);

            if(result){
                resultArr.push(a);
            }
        }
        return resultArr;
    }

    static find(arr, predicate, fromIndex=0){
        let resultObj;

        for(let i = fromIndex; i < arr.length; i++){
            let result = predicate(arr[i]);
            if(result){
                resultObj = arr[i];
                break;
            }
        }

        return resultObj;
    }

    static partition(arr, predicate){
        const resultArr = [];
        const filterResult = arr.map(predicate);
        const resultThatDiffer = [];
        const resultThatMatch = [];

        filterResult.forEach((itm, idx) =>{
            if(itm){
                resultThatMatch.push(arr[idx]);
            }else{
                resultThatDiffer.push(arr[idx]);
            }
        });

        resultArr.push(resultThatMatch);
        resultArr.push(resultThatDiffer);

        return resultArr;
        
    }

    static shuffle(arr){
        //So let's generate a random number
        
        const shuffledArr = [];
        let randomNumber
        while(arr.length){
            randomNumber = Math.floor(Math.random() * arr.length);
            shuffledArr.push(...arr.splice(randomNumber, 1));
        }

        return shuffledArr;
    }
    //#endregion

    // #region mathMethod
    
    static mean(numArr){
        if(numArr.length === 0) return 0;
        const sum = numArr.reduce((acc, curr) => acc + curr, 0);
        if(isNaN(sum))  return 0;
        return sum/numArr.length;
    }

    static max(numArr){
        if(numArr.length === 0) return 0;

        let max = numArr[0];

        numArr.forEach(itm =>{
            if(!isNaN(itm) && itm > max){
                max = itm;
            }
        });

        return max;
    }
    // #endregion

    //#region object methods
    static keys(obj){
        const keysArr = [];

        for(let o in obj){
            keysArr.push(o);
        }

        return keysArr;
    }
    //#endregion
}

const pref1 = ['like', 'share', 'comment'];
const pref2 = ['post', 'dislike', 'comment'];

const removeExArr = [
    {id:1, name: 'Jane', gender: 'F'},
    {id:2, name: 'Micheal', gender: 'M'},
    {id:3, name: 'Peter', gender: 'F'},
    {id:4, name: 'Austin', gender: 'F'},
    {id:5, name: 'Ravi', gender: 'M'},
    {id:6, name: 'Minal', gender: 'M'},
    {id:7, name: 'Mayank', gender: 'F'},
];
const removeExFn = (n) => n.gender !== 'M';

let products = [
    {name: 'Milk', sold: true},
    {name: 'Cream', sold: false},
    {name: 'Bicycle', sold: true},
    {name: 'Socks', sold: false}
];

let quizQuestions = [1, 2, 3, 4, 5, 6, 7, 8];



