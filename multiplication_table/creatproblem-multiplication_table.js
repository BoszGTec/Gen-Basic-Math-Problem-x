let c_problem = 12
function gen(){
let count_t = 0
let a = [] , b = []
for (let y=2 ; y<=(c_problem) ; y++){
  for (let x=1 ; x<=(c_problem) ; x++){
   a[count_t] = y 
   b[count_t] = x 
   count_t += 1
  }
}
c_problem = count_t
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
document.getElementById("content-mathproblem").innerHTML = elem
}
document.getElementById("content-mathproblem").innerHTML = "<div>js work</div>"
