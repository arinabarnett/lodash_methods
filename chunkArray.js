/* Creates an array of elements split into groups the length of size. 
If array can't be split evenly, the final chunk will be the remaining elements. */

;(function() {

    // Initial data
    let initial = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

    function chunkArray(arr, num) {
    let newArr = [];
    let index = 0;
    while(index < arr.length){
        newArr.push(arr.slice(index, index+num));
        index += num;
        console.log(newArr);
    }
    return newArr;
}

    let result = chunkArray(initial, 3);
    console.log("Initial data:", initial, "Result:", result);
})();