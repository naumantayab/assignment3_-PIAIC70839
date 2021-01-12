//8(a)
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
document.write('Counting: ' + number + '<br>')

//8(b)
var counting = [1,2,3,4,5,6,7,8,9,10]
document.write('Reverse counting: ' + counting.reverse(counting))

//8(c)
document.write('<br>' + 'Even:')
for (var i = 0; i <= 20; i = i+2) {
    document.write(i + ',')
}

//8(d)
document.write('<br>' + 'Odd:')
    for (var i = 1; i <= 19; i = i+2) {
    document.write(i + ',')
}

//8(e)
document.write('<br>' + 'Series:')
for (var i = 2; i <= 20; i = i+2) {
    document.write(i + 'k' + ', ')
}

