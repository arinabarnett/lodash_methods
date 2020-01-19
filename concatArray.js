/* Creates a new array concatenating array with any additional arrays and/or values.. */

;(function() {

    // Initial data
    let array = [1];
    let other = concatArray(array, [2, "hello", [3], [[4]]]);

    function concatArray(arr, values) {
        let newArray = arr.slice();
        // Concatenating arrays using Spread operator
        return [...arr, ...values];
}

    
    console.log("Initial data:", array, "Result:", other);
})();