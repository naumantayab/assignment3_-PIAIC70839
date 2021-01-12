var A = [20, 53, 78, 4, 91, 12]
// var B = A.smallestToLargest(A)
// document.write(A.sort(a, b))

document.getElementById("demo").innerHTML = A;

function myFunction() {
    A.sort(function (a, b) { return a - b });
    document.getElementById("demo").innerHTML = A;
}

// document.getElementById('demo').innerHTML = num