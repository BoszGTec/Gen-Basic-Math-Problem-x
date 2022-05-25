let c_problem=10
let a=[] , b=[]
for (let i=0 ; i<c_problem ; i++){
  a[i]=Math.floor(Math.random() * 10000);
  b[i]=Math.floor(Math.random() * 1000);
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

  elem += '<input type="number" class="form-control ans" />'
  
  elem += '<span class="x check_word"></span>'
 
  elem += "</div>"
}
elem += '</div>'
document.getElementById("content-mathproblem").innerHTML=elem
