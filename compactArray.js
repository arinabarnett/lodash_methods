/* Creates an array with all falsey values removed. 
The values false, null, 0, "", undefined, and NaN are falsey. */

;(function() {
    let initial = [
        0,
        null,
        false,
        1,
        false,
        2,
        null,
        '',
        3,
        NaN,
        10,
        0,
        null,
        NaN
    ];
    

    function compactArray(arr) {
        let newArray = [];
        for(let i = 0; i < arr.length; i++) {
            if (['', null, 0, false].indexOf(arr[i]) === -1 && !isNaN(arr[i])) {
                newArray.push(arr[i]);
            } 
        }
        return newArray;
    }

    // Check if the output is the same as expected
    

    let result = compactArray(initial);

    console.log("Initial data:", initial, "Result:", result);
})()
