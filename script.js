$( document ).ready(function() {
  console.log( "ready!" );


let textArea9 = $('#msg9');
let textArea10 = $('#msg10');
let textArea11 = $('#msg11');
let textArea12 = $('#msg12');
let textArea1= $('#msg1');
let textArea2 = $('#msg2');
let textArea3 = $('#msg3');
let textArea4 = $('#msg4');
let textArea5 = $('#msg5');


$('button').on('click', function() {
  localStorage.setItem('9AM', (textArea9.val()))

  localStorage.setItem('10AM', (textArea10.val()))

  localStorage.setItem('11AM', (textArea11.val()))

  localStorage.setItem('12PM', (textArea12.val()))

  localStorage.setItem('1PM', (textArea1.val()))

  localStorage.setItem('2PM', (textArea2.val()))

  localStorage.setItem('3PM', (textArea3.val()))

  localStorage.setItem('4PM', (textArea4.val()))

  localStorage.setItem('5PM', (textArea5.val()))
}
)

$('#msg9').append(localStorage.getItem('9AM'))
$('#msg10').append(localStorage.getItem('10AM'))
$('#msg11').append(localStorage.getItem('11AM'))
$('#msg12').append(localStorage.getItem('12PM'))
$('#msg1').append(localStorage.getItem('1PM'))
$('#msg2').append(localStorage.getItem('2PM'))
$('#msg3').append(localStorage.getItem('3PM'))
$('#msg4').append(localStorage.getItem('4PM'))
$('#msg5').append(localStorage.getItem('5PM'))

});