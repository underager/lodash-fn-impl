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



