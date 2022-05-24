function check_ans(){
var ans = document.getElementsByClassName("ans")
 for (let i=0 ; i<c_problem ; i++){ 
  if(ans[i].value==(a[i]*b[i])){
   ans[i].style = "background-color : var(--bs-green) ; color : var(--bs-white) ;"
   ans[i].readonly = true
  }
  else if(ans[i].value!=(a[i]*b[i])&&ans[i].value!=""){
   ans[i].style = "background-color : var(--bs-red) ; color : var(--bs-white) ;"
   ans[i].readonly = true
  }
  else {
   ans[i].style = "background-color : var(--bs-yellow) ;"
   ans[i].readonly = true
  }
 }
}

function fix_ans(){
 var ans = document.getElementsByClassName("ans")
 for (let i=0 ; i<c_problem ; i++){
  ans[i].style = ""
  ans[i].readonly = false
 }
}
