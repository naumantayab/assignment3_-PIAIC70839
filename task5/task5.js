var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
array = array.filter((value,index,array)=> array.indexOf(value) == index)
document.write(array)