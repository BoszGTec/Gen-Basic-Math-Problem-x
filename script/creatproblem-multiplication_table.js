let c_problem = 12*12
let a = [] , b = []
for (let y=0 ; y<(c_problem/12) ; y++){
  for (let x=0 ; x<(c_problem/12) ; x++){
   a[y+x] = y 
   b[y+x] = x 
  }
}

var elem = '<div>'
for (let i=0 ; i<c_problem ; i++){
  elem += '<div class="d-flex">'

  elem += '<span class="a">'
  elem += a[i]
  elem += '</span>'

  elem += '<span class="x">'
  elem += " × " 
  elem += '</span>'

  elem += '<span class="b">'
  elem += b[i]
  elem += '</span>'

  elem += '<span class="x">'
  elem += " = " 
  elem += '</span>'

  elem += '<input type="number" value="" class="form-control ans" />'
  
  elem += '<span class="x check_word"></span>'
 
  elem += "</div>"
}
elem += '</div>'
document.getElementById("content-mathproblem").innerHTML=elem
