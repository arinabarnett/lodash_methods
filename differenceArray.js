/* Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. 
The order and references of result values are determined by the first array. */

;(function() {

    // You can also check the result of work of this alghoritm by uncommenting the values below this comment.

    // let firstArr = ['foo', 'man', 'chew', 'run'];
    // let secondArr = ['foo', 'man', 'chew', 'bar', 'baz'];

    // Initial data

    let firstArr = [1, 2, 5];
    let secondArr = [5, 0, 4];

    function differenceArray(arr1, arr2) {
        let newArr = [];
            for(let i=0; i<arr2.length; i++){
                if(arr2.includes(arr1[i])){
                    // console.log("This element exist in the second array:", arr1[i]);
                } else if(arr1[i] === undefined){
                    // do nothing
                } else {
                    newArr.push(arr1[i]);
                    //console.log(newArr);
                }
                }
            return newArr;
        }     

    let result = differenceArray(firstArr, secondArr);
    
    // Check if the output is the same as expected
    console.log("Initial data:", firstArr, secondArr, "Result:", result);
})();