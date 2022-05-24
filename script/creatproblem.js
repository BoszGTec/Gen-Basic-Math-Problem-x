let c_problem=10
let a=[] , b=[]
for (let i=0 ; i<c_problem ; i++){
  a[i]=Math.floor(Math.random() * 100000);
  b[i]=Math.floor(Math.random() * 100000);
}
var elem = '<div>'
for (let i=0 ; i<c_problem ; i++){
  elem += '<div class="d-flex">'
  elem += "<span>"
  elem += a[0]+"×"+b[0]+"="
  elem += '<input type="number" class="form-control ans" />'
  elem += "</div>"
}
elem += '</div>'
document.getElementById("content-mathproblem").innerHTML=elem
