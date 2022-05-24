function check_ans(){
var ans = document.getElementsByClassName("ans")
 for (let i=0 ; i<c_problem ; i++){ 
  if(ans[i].value==(a[i]*b[i])){
   ans[i].style="background-color : green ;"
  }
  else if(ans[i].value!=(a[i]*b[i])){
   ans[i].style="background-color : red ;"
  }
  else {
   ans[i].style="background-color : yellow ;"
  }
 }
}
