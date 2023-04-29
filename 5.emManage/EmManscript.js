const n = 10;
const total = 10; 
let countRowVar = 0;
let modal2CountR = 0;
let pageCnt = 1;
let s ="";


let JanTaskTotalCnt = 5;

let ColTaskTotalCnt = 5;


let bl1Choice = 1;

let bl2Choice = 1;

function updatepageBtn(x) {
  const lf = document.getElementById("Modal1-leftPage");
  const rt = document.getElementById("Modal1-rightPage");
  const pgCnt = document.getElementById("Modal1-page-count");
  const rowTables = document.getElementsByClassName("modal1-page");

  if (x == 1) pageCnt++; else pageCnt--;
  if (pageCnt <= 1) {
    lf.style.opacity = 0.1;
    pageCnt = 1
  } else {
    lf.style.opacity = 1;
  }

  if (pageCnt >= total/n) {
    rt.style.opacity = 0.1;
    pageCnt = total/n
  } else {
    rt.style.opacity = 1;
  }


  pgCnt.innerHTML = (n*pageCnt - (n-1)) + " - " + (n*pageCnt)/2 + " trên " + total/2;
  
  for (let i=0; i<rowTables.length; i++) {
    if (i < n*pageCnt - n || i > n*pageCnt - 1) rowTables[i].style.display = "none";
    else {
      rowTables[i].style.display = "";
    }
  }
}

function pageBGBtn(x) { //0 - grey left; 1 - grey right; 2 - white left, 3 - white right
  const lfPage = document.getElementById("Modal1-outterleftPage");
  const rtPage = document.getElementById("Modal1-outterrightPage");
  if (x == 0 && pageCnt != 1) lfPage.style.backgroundColor = "#f8f9fd";
  if (x == 1 && pageCnt != total/n) rtPage.style.backgroundColor = "#f8f9fd";
  if (x == 2) lfPage.style.backgroundColor = "#f8f9fd";  
  if (x == 3) rtPage.style.backgroundColor = "#f8f9fd";
  if (pageCnt == 1)  {
    lfPage.style.cursor = "default"; 
  }
  else {
    lfPage.style.cursor = "pointer";
  }
  if (pageCnt == total/n)  rtPage.style.cursor = "default"; else rtPage.style.cursor = "pointer"

}


function slCnt(x) {
  let stri;
  if (document.getElementById("st-type").value == "jan") {
    stri = "Janitor";
    bl1Choice = 1;
  } else {
    stri = "Collector"
    bl1Choice = 2;
  }
  document.getElementById("Modal1-sl-count").innerHTML = "Đã chọn: " + x;
  if (x > 0)
  document.getElementById("bl1Txt").innerHTML = "Đã chọn: " + x + " / " + total + " (" +  stri + ")";
  else 
  document.getElementById("bl1Txt").innerHTML = "Vui lòng chọn nhân viên!";
  
  // if (x == 0) document.getElementById("Modal1-miniTable").style.display = "none";
  // else document.getElementById("Modal1-miniTable").style.display = "block";
  
  // Nhớ update dòng chữ ở bên ngoài!!!

}

function checkFunc(checked = true) { // Check hoặc uncheck tất cả
  const checkboxes = document.querySelectorAll('input[name="modal1-tb-row"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });


  // let miniTable = document.getElementById("Modal1-miniTable");
  let checkboxes_ALL = document.querySelectorAll('input[name="modal1-tb-row"]');
  // while (miniTable.children.length != 1) {
  //   miniTable.removeChild(miniTable.lastElementChild);
  // }
  let cnt =0;
  for (let i=0; i<checkboxes_ALL.length; i++) {
    if (checkboxes_ALL[i].checked == true) {
      let td_row1 = document.getElementsByClassName("modal1-page")[i].getElementsByTagName("td")[1].innerHTML;
      let para = document.createElement("p");
      // para.innerHTML = (cnt + 1) + ". " + td_row1;
      // miniTable.appendChild(para);
      // para.style.fontSize = "13px";
      // para.style.margin = "0px";
      // para.style.padding = "3px 3px";
      cnt++;
    } 
  }


}



function searchFunc() {
    let cnt = 0;
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("Modal1myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("Modal1myTable");
    tr = table.getElementsByClassName("modal1-page");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("modal1-tdTag")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 && cnt < n) {
              tr[i].style.display = "";
              cnt++;
            }
            else tr[i].style.display = "none";


        }       
    }
    if (input.value == "") {
      const rowTables = document.getElementsByClassName("modal1-page");
      if (bl1Choice == 1) {
        for (let i=0; i<10; i++) {
          if (i%2 ==0 && i < 10) rowTables[i].style.display="none";
          else rowTables[i].style.display="";
        }
      }

      if (bl1Choice == 2) {
        for (let i=0; i<10; i++) {
          if (i%2 ==1 && i < 10) rowTables[i].style.display="none";
          else rowTables[i].style.display="";
        }
      }
    }
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("Modal1myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByClassName("modal1-tdTag")[n];
        y = rows[i + 1].getElementsByClassName("modal1-tdTag")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
}


// Modal2 start here!!


function checkEmptyTextBox() {
  const contentEditableElement = document.getElementById('text-input');

if (contentEditableElement.textContent.trim().length > 0) {
  // The contenteditable element contains at least one non-whitespace character
  document.getElementById("bl3Txt").innerHTML = contentEditableElement.textContent;
} else {
  // The contenteditable element is empty or only contains whitespace
  document.getElementById("bl3Txt").innerHTML = "Để lại lời nhắn! (không bắt buộc)";
}

}

function resetAll() {
  document.getElementsByClassName("bl-btn-txt")[0].innerHTML = "Thêm nhân viên";
  document.getElementsByClassName("bl-btn-txt")[0].style.left = "20px";
  document.getElementsByClassName("fa-user")[0].style.right = "18px";
  
  
  document.getElementsByClassName("bl-btn-txt")[1].innerHTML = "Thêm lịch trình";
  document.getElementsByClassName("bl-btn-txt")[1].style.left = "22px";
  document.getElementsByClassName("fa-calendar-days")[0].style.right = "20px";

  document.getElementsByClassName("bl-btn-txt")[2].innerHTML = "Thêm lời nhắn";
  document.getElementsByClassName("bl-btn-txt")[2].style.left = "25px";
  document.getElementsByClassName("fa-note-sticky")[0].style.right = "23px";
  
  // document.getElementsByClassName("bl-btn-txt")[x].innerHTML = "Chỉnh sửa";
  // document.getElementsByClassName("bl-btn-txt")[x].style.left = "40px";
  // if (x==0)
  // document.getElementsByClassName("fa-user")[0].style.right = "35px";
  
  // if (x==1)
  // document.getElementsByClassName("fa-calendar-days")[0].style.right = "32px";

  // if (x==2)
  // document.getElementsByClassName("fa-note-sticky")[0].style.right = "32px";


  // Modal1
  const checkboxes = document.querySelectorAll('input[name="modal1-tb-row"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  pageCnt = 0;
  // pageBGBtn(0);
  updatepageBtn(1); 
  document.getElementById("Modal1myInput").value = "";

  
  document.getElementById("Modal1-sl-count").innerHTML = "Đã chọn: 0";
  document.getElementById("bl1Txt").innerHTML = "Vui lòng chọn nhân viên!";
  document.getElementById("dt-sl").value = "";
  document.getElementById("sh-sl").selectedIndex = 0;
  
  // Modal2

  const checkboxes1 = document.querySelectorAll('input[name="tb1-row"]');
  checkboxes1.forEach((checkbox1) => {
    checkbox1.checked = false;
  });

  noPoint=0;
  finPoint = [1, 0, 0, 0, 0, 0];
  document.getElementById("path").innerHTML = "Chọn <b>MCPs</b> để hình thành tuyến đường!";
  document.getElementById('gen-shortest-path').style.pointerEvents = "none";
  document.getElementById('gen-shortest-path').style.opacity = 0.4;

  document.getElementById("bl2TXT").innerHTML = "Vui lòng chọn ngày làm việc, ca làm việc và các MCPs";
}


// ---------------------------- Re-edit task




// ----------------------------Control modals

function openModal(x) {
  if (x==0) {
    const rowTablese = document.getElementsByClassName("modal1-page");

    if (bl1Choice == 1) {
      for (let i=0; i<10; i++) {
        if (i%2 ==0 && i < 10) rowTablese[i].style.display="none";
        else rowTablese[i].style.display="";
      }
    }
  
    if (bl1Choice == 2) {
      for (let i=0; i<10; i++) {
        if (i%2 ==1 && i < 10) rowTablese[i].style.display="none";
        else rowTablese[i].style.display="";
      }
    }
  }


  if (x==1) {
    if (bl1Choice == 1) x=3;
  };
  document.getElementsByClassName("modal")[x].style.display="block";
  
}

function closeModal(x) {
  document.getElementsByClassName("modal")[x].style.display = "none";
  if (x==3) x=1;
  document.getElementsByClassName("bl-btn-txt")[x].innerHTML = "Chỉnh sửa";
  document.getElementsByClassName("bl-btn-txt")[x].style.left = "40px";
  if (x==0)
  document.getElementsByClassName("fa-user")[0].style.right = "35px";
  
  if (x==1)
  document.getElementsByClassName("fa-calendar-days")[0].style.right = "32px";

  if (x==2)
  document.getElementsByClassName("fa-note-sticky")[0].style.right = "32px";


  document.getElementById("map").style.display="none";

 
    if (document.getElementById("dt-sl").value == "")document.getElementsByClassName("bl-txt2")[1].innerHTML = "Vui lòng chọn ngày làm việc!";
   
    let cnt =0;
    const checkboxes1 = document.querySelectorAll('input[name="tb1-row"]');
    checkboxes1.forEach((checkbox1) => {
      if (checkbox1.checked) cnt++;
    });
    if (cnt == 0) {
      if (document.getElementById("dt-sl").value == "") document.getElementsByClassName("bl-txt2")[1].innerHTML = "Vui lòng chọn ngày làm việc và các MCPs!";
      else document.getElementsByClassName("bl-txt2")[1].innerHTML = "Vui lòng chọn các MCPs!";
    }


} 

// Function Alert() 

function alertx() {

  document.getElementById("Modal1-sl-count").innerHTML = "Đã chọn: 0";
  
  let checkboxes_ALL = document.querySelectorAll('input[name="modal1-tb-row"]');
  for (let i=0; i<checkboxes_ALL.length; i++) {
    checkboxes_ALL[i].checked = false;
  }
  
  if (document.getElementById("st-type").value == "jan") {
    bl2Choice=1;
  } else bl2Choice=2;

  const rowTables = document.getElementsByClassName("modal1-page");
  

  if (bl2Choice == 1) {
    for (let i=0; i<10; i++) {
      if (i%2 ==0 && i < 10) rowTables[i].style.display="none";
      else rowTables[i].style.display="";
    }

    var table = document.getElementById("Modal1myTable");
    var columnIndex = 3; // Index of the column to hide
    var rows = table.rows;

    for (var i = 0; i < rows.length; i++) {
      rows[i].cells[columnIndex].style.display = "table-cell"; // Set the display property of the cell to "table-cell"
    }

  }

  if (bl2Choice == 2) {
    for (let i=0; i<10; i++) {
      if (i%2 ==1 && i < 10) rowTables[i].style.display="none";
      else rowTables[i].style.display="";
    }
    var table = document.getElementById("Modal1myTable");
    var columnIndex = 3; // Index of the column to hide
    var rows = table.rows;

    for (var i = 0; i < rows.length; i++) {
      rows[i].cells[columnIndex].style.display = "none"; // Set the display property of the cell to "none"
    }
  }
}

function printX() {
  const cboxeee = document.getElementsByClassName("cbox10");
  let xPos;
  let strFin="";

  for (let i=0; i<cboxeee.length; i++) {
    if (cboxeee[i].checked == true) {
      strFin += ("<b><i>MCP" + (i+1) + "</i></b> (");
      if (i==0) {
        strFin +="497 Hòa Hảo, Phường 7, Quận 10, TPHCM";
      }
      if (i==1) {
        strFin +="120 Hồng Bàng, Phường 12, Quận 5, TPHCM";
      }
      if (i==2) {
        strFin +="520A Thành Thái, Phường 12, Quận 10, TPHCM";
      }
      if (i==3) {
        strFin +="16A/A1 Lê Hồng Phong, Phường 12, Quận 10, TPHCM";
      }
      if (i==4) {
        strFin +="279 Nguyễn Tri Phương, Phường 5, Quận 10, TPHCM";
      }

    }
  }


  strFin += ").";
  let dated = document.getElementById("dt-slx").value;
  let findate = dated.split("-").reverse().join("/");

  document.getElementsByClassName("bl-txt2")[1].innerHTML = 
"Ngày: " + findate + "  »  " + document.getElementById("sh-slx").value + "  »  " + strFin;


if (document.getElementById("dt-slx").value == "")document.getElementsByClassName("bl-txt2")[1].innerHTML = "Vui lòng chọn ngày làm việc!";

let cnt =0;
for (let i=0; i<cboxeee.length; i++) {
  if (cboxeee[i].checked == true) {cnt++}
}

if (cnt == 0) {
  if (document.getElementById("dt-slx").value == "") document.getElementsByClassName("bl-txt2")[1].innerHTML = "Vui lòng chọn ngày làm việc và các MCPs!";
  else document.getElementsByClassName("bl-txt2")[1].innerHTML = "Vui lòng chọn MCP!";
}

}


function setUPP() {
  const rowTables = document.getElementsByClassName("manRowTab");
    for (let i=0; i<10; i++) {
      if (i>=5) rowTables[i].style.display="none";
      else rowTables[i].style.display="";
    }

}

function alertxx() {

  document.getElementById("Modal1-sl-countxxx").innerHTML = "Đã chọn: 0";

  const manCbox = document.getElementsByClassName("manChBox");
  

  
  for (let i=0; i<manCbox.length; i++) {
    manCbox[i].checked = false;
  }

  
  if (document.getElementById("st-typex").value == "jan") {
    bl2Choice=1;
  } else bl2Choice=2;

  const rowTables = document.getElementsByClassName("manRowTab");
  

  if (bl2Choice == 1) {
    for (let i=0; i<10; i++) {
      if (i>=5) rowTables[i].style.display="none";
      else rowTables[i].style.display="";
    }



  }

  if (bl2Choice == 2) {
    for (let i=0; i<10; i++) {
      if (i<5) rowTables[i].style.display="none";
      else rowTables[i].style.display="";
    }
    document.getElementById("Modal1-page-countxxx").innerHTML = "1 - 5 trên 5";
  }
}

function delManRow() {
  let cnt =0;
  const manCbox = document.getElementsByClassName("manChBox");

  if (bl2Choice == 1) {
    for (let i=0; i<5; i++) {
      if (manCbox[i].checked == true) cnt++;
    }
    document.getElementById("Modal1-sl-countxxx").innerHTML = "Đã chọn: " + cnt;
  }

  if (bl2Choice == 2) {
    for (let i=5; i<10; i++) {
      if (manCbox[i].checked == true) cnt++;
    }
    document.getElementById("Modal1-sl-countxxx").innerHTML = "Đã chọn: " + cnt;
  }

  if (cnt > 0) {
    document.getElementById("delBTNMan").style.opacity = 1;
  } else {
    document.getElementById("delBTNMan").style.opacity = 0.4;
  }
}

function delFUNC() {
  document.getElementById("Modal1-sl-count").innerHTML = "Đã chọn: 0";
  const manCbox = document.getElementsByClassName("page-1");
 
  let cnt = 0;
 
  if (bl2Choice == 1) {
    for (let i=0; i<10; i++) {
      if (manCbox[i].checked == true && i%2==1) {
        cnt++;
        document.getElementsByClassName("modal1-page")[i].style.display = "none";
      };
    }

    document.getElementById("Modal1-page-count").innerHTML = "1 - " + (JanTaskTotalCnt-cnt) + " trên " + (JanTaskTotalCnt-cnt);
  }

  if (bl2Choice == 2) {
    for (let i=0; i<10; i++) {
      if (manCbox[i].checked == true && i%2==0) {
        cnt++;
        document.getElementsByClassName("modal1-page")[i].style.display = "none";
      };
    }

    document.getElementById("Modal1-page-count").innerHTML = "1 - " + (ColTaskTotalCnt-cnt) + " trên " + (ColTaskTotalCnt-cnt);
  }

  for (let i=0; i<manCbox.length; i++) {
    manCbox[i].checked = false;
  };

  document.getElementById("delBTNMan").style.opacity = 0.4;
  document.getElementById("delBTNMan").style.pointerEvents = "none";


  


}

function countRow(){
  const cBOX = document.getElementsByClassName("page-1");
  let cnt=0;

  if (bl2Choice == 1) {
    for (let i=0; i<10; i++) {
      if (cBOX[i].checked == true && i%2==1) cnt++;
    }
  }

  if (bl2Choice == 2) {
    for (let i=0; i<10; i++) {
      if (cBOX[i].checked == true && i%2==0) cnt++;
    }
  }

  document.getElementById("Modal1-sl-count").innerHTML = "Đã chọn: " + cnt;

  if (cnt > 0) {
    document.getElementById("delBTNMan").style.pointerEvents="auto";
    document.getElementById("delBTNMan").style.opacity = 1;

  } else {
    document.getElementById("delBTNMan").style.pointerEvents="none";
    document.getElementById("delBTNMan").style.opacity = 0.4;
  }
} 