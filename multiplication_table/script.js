document.getElementsByTagName("body")[0].innerHTML = '  <h1>Gen Basic Math Problem Multiplication Table</h1> \
  <div id="content-mathproblem" onload="gen()" >script error</div> \
  <input type="button" class="btn btn-success" \
   value="ตรวจคำตอบ" onclick="check_ans()" />  \
  <input type="button" class="btn btn-warning" \
   value="แก้คำตอบ" onclick="fix_ans(); " />    \
  <input type="button" class="btn btn-info" hidden      \
   value="ดูคำตอบ" id="view_ans" onclick="view_ans()" /> \
  <hr/><center>©2022 BoszGTec</center> '


document.getElementsByTagName("body")[0].innerHTML += ' <script src="https://boszgtec.github.io/Gen-Basic-Math-Problem-x/script/check-ans.js"></script> '
