var student = ['Michael', 'John', 'Tony'];
var score = ['320', '230', '480'];
var total_marks = '500';

var percentage1 = (score[0] / total_marks * 100);
var percentage2 = (score[1] / total_marks * 100);
var percentage3 = (score[2] / total_marks * 100);
// document.getElementById("demo").innerHTML = ('Score of ' + student[0] + ' is ' + score[0] + '.' + ' Percentage: ' + percentage + '%');

document.write('Score of ' + student[0] + ' is ' + score[0] + '.' + ' Percentage: ' + percentage1 + '%' + '<br>' + 'Score of ' + student[1] + ' is ' + score[1] + '.' + ' Percentage: ' + percentage2 + '%' + '<br>' + 'Score of ' + student[2] + ' is ' + score[2] + '.' + ' Percentage: ' + percentage3 + '%' );

