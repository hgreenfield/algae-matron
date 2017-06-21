function changeBackground () {
  var r = parseInt(document.getElementById('red').value, 10),
      g = parseInt(document.getElementById('green').value, 10),
      b = parseInt(document.getElementById('blue').value, 10);

  document.getElementById('colorbox').style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
}   
