var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var user = (prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?"))
  
var index = A.indexOf(user);

if (index !== -1) {
    document.write(user + ' is <b>available</b> at index' + index + ' ' + ' in our bakery')
}
else{
    document.write('We are sorry. ' + user + ' is <b>not available</b> in our bakery')
}