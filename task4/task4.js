var cities = ['Karachi', ' Lahore', ' Islamabad', ' Quetta', ' Peshawer'];
// document.getElementById('demo').innerHTML = 'Cities' + cities
document.write('<h3>Cities list:</h3>' + cities);

// for (i = 0; i <= cities.length-1; i++) {
//     document.write('<h3>Selected Cities list:</h3>' + cities[i] + ',')
// }


var copy_cities = cities.slice(2, 4);

// // var copy_cities = ['Islamabad', ' Quetta']
document.write('<h3>Selected Cities list:</h3>' + copy_cities);