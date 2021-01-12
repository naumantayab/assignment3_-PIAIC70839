var color =  ['Red', 'Blue', 'Yellow', 'Green', 'Black']
document.write('Inital array: ' + '<br>' + color + '<br>' + '<br>')

//3A

document.write('Array after adding neew color at the begining:' + '<br>')
var beg = prompt('What color you want to add to the begining:')
color.splice(0,0,beg)
document.write(color + '<br>' + '<br>')

//3b

document.write('Array after adding neew color at the end:' + '<br>')
var end = prompt('What color you want to add to the end:')
color.splice(color.length, 0, end)
document.write(color + '<br>' + '<br>')


//3c

document.write('Array after adding two or more colors at the begining:' + '<br>')
color.splice(0,0, 'White', 'Brown')
document.write(color + '<br>' + '<br>')

//3d

document.write('Array after removing the first element:' + '<br>')
color.splice(0,1)
document.write(color + '<br>' + '<br>')

//3e

document.write('Array after removing the last element:' + '<br>')
color.splice(7,1)
document.write(color + '<br>' + '<br>')

//3f

document.write('Array after adding color at desired index/position:' + '<br>')

var ind = parseInt(prompt('Enter the index/position to add color:'))
var newE = prompt('Enter a color to add at desired position')
color.splice(ind, 0, newE)
document.write(color + '<br>' + '<br>')

//3g

document.write('The array after removing color(s) from desired index:' + '<br>')
var index = parseInt(prompt('At which index you want to delete color(s):'))
var delElements = parseInt(prompt('How many color you want to remove from:' + index + 'position:'))
color.splice(index,delElements)
document.write(color)