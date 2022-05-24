function check_ans(){
var ans = document.getElementsByClassName("ans")
var check_word = document.getElementsByClassName("check_word")
 for (let i=0 ; i<c_problem ; i++){ 
  ans[i].readonly = true
  if(ans[i].value==(a[i]*b[i])){
   ans[i].style = "background-color : var(--bs-green) ; color : var(--bs-white) ;"
   check_word[i].innerText = "ถูก"
   check_word[i].style = "color : var(--bs-green) ;"
  }
  else if(ans[i].value!=(a[i]*b[i])&&ans[i].value!=""){
   ans[i].style = "background-color : var(--bs-red) ; color : var(--bs-white) ;"
   check_word[i].innerText = "ผิด"
   check_word[i].style = "color : var(--bs-red) ; "
  }
  else {
   ans[i].style = "background-color : var(--bs-yellow) ;"
   check_word[i].innerText = "ไม่ได้ตอบ"
   check_word[i].style = "color : var(--bs-yellow) ; "
  }
 }
}

function fix_ans(){
 var ans = document.getElementsByClassName("ans")
 for (let i=0 ; i<c_problem ; i++){
  ans[i].value = ""
  ans[i].style = ""
  ans[i].readonly = False
 }
}
