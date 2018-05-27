// Initialize the array
var nums = [10, 8, 12, 36];
console.log(nums);

// Double each element
var doubles = nums.map(function(x) {
    return x*2
})
console.log(doubles);

// Filter out all element <= 20
var filtered = doubles.filter(function(x) {
    return x > 20
})
console.log(filtered);

// Add all remaining elements together
var sum = filtered.reduce(function(x, y) {
    return x + y
})
console.log(sum);