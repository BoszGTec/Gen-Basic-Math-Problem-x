const Toast = Swal.mixin({
  toast: true , position: 'top-end',
  showConfirmButton: false , timer: 5000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

function have_every_ans(){
  let ans = document.getElementsByClassName("ans")
  let bool = true
  for (let i=0 ; i<c_problem ; i++){
    if(ans[i].value==""){
      bool = false
      Toast.fire({icon: 'warning',title: 'ตอบไม่ครบ'})
      break ;
    }
    else{bool = true}
  }
  return bool
}


function check_ans(){
let hea = have_every_ans()
let score = 0 
var ans = document.getElementsByClassName("ans")
var check_word = document.getElementsByClassName("check_word")
if (hea){
 for (let i=0 ; i<c_problem ; i++){ 
   ans[i].disabled = true
   if(ans[i].value==(a[i]*b[i])){
    ans[i].style = "background-color : var(--bs-green) ; color : var(--bs-white) ;"
    check_word[i].innerText = "ถูก"
    check_word[i].style = "color : var(--bs-green) ;"
    score++
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
  if(score>=5){Toast.fire({icon: 'success',title: score+'/10', color : '#198754'})}
  else{Toast.fire({icon: 'error',title: score+'/10', color : '#dc3545'})}
 }
else { for (let i=0 ; i<c_problem ; i++){
    if(ans[i].value==""){
     ans[i].style = "background-color : var(--bs-yellow) ;"
     check_word[i].innerText = "ไม่ได้ตอบ"
     check_word[i].style = "color : var(--bs-yellow) ; "
    }
  }
 }
}

function fix_ans(){
 var ans = document.getElementsByClassName("ans")
 if(ans[9].value==6){ document.getElementById("view_ans").hidden = false }
 
 for (let i=0 ; i<c_problem ; i++){
  ans[i].value = ""
  ans[i].style = ""
  ans[i].disabled = false
 }
}

function view_ans(){
  check_ans()
  var cw = document.getElementsByClassName("check_word")
  var sp = document.createElement("span")
  for (let i=0 ; i<c_problem ; i++){
   sp = document.createElement("span")
   sp.innerText += " "+a[i]*b[i]
   sp.style = "color : var(--bs-blue);"
   cw[i].appendChild(sp)
  }
}
