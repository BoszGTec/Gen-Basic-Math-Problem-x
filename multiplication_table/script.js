document.getElementsByTagName("body")[0].innerHTML = '  <h1>Gen Basic Math Problem Multiplication Table</h1> \
  <div id="content-mathproblem" onload="gen()" > \
     <center> <div class="loading" > \
     <span id="loadingcycle" ></span> \
     <span>L</span> <span>o</span> <span>a</span> \
     <span>d</span> <span>i</span> <span>n</span> \
     <span>g</span> <span>.</span> <span>.</span> \
     <span>.</span> \
    </div> </center> \
  </div> \
  <input type="button" class="btn btn-success" \
   value="ตรวจคำตอบ" onclick="check_ans()" />  \
  <input type="button" class="btn btn-warning" \
   value="แก้คำตอบ" onclick="fix_ans(); " />    \
  <input type="button" class="btn btn-info" hidden      \
   value="ดูคำตอบ" id="view_ans" onclick="view_ans()" /> \
   '


function check_ans(){
var ans = document.getElementsByClassName("ans")
var check_word = document.getElementsByClassName("check_word")
 for (let i=0 ; i<c_problem ; i++){ 
  ans[i].disabled = true
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
