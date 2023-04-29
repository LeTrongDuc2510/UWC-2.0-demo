let yesPointer = 0;
let choiceFil = 0;

// Action index: 0 - delete; 1 - read; 2 - unread; 3 - star

// Cần consider thêm truong hop xóa row unseen!!

let undo = [];

// Undo key: -1: delete, -2: read, -3: unread, -4: star

let totalNoti = 10;

let read = [2, 3, 4, 5, 6, 7, 8, 9];
let unread = [0, 1];

let del = [];
let notDel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


function activeModal() {
  const Modal = document.getElementById("notiModal");
  Modal.style.display = "block";
}

function activefModal() {
  const fModal = document.getElementById("filterModal");
  fModal.style.display = "block";
}


// document.getElementsByClassName("modal2-page")[0].style.display = "none"


document.getElementsByClassName("roundMulti")[0].style.opacity = 0.3;
document.getElementsByClassName("fa-filter")[0].style.opacity = 1;

 
function undoRow() {
  const seendot = document.getElementsByClassName("unseenNoti");
  const row = document.getElementsByClassName("notiRowTable");
  let tmpUndo = undo.pop();
  if (tmpUndo[0] == -1) {
    for (let i=1; i < tmpUndo.length; i++) {
      row[tmpUndo[i]].style.display = "";
      notDel = pushtoArray(tmpUndo[i], notDel);
      del = removeFromArray(tmpUndo[i], del);
    }
  }

  if (tmpUndo[0] == -2) {
    for (let i=1; i < tmpUndo.length; i++) {
      seendot[tmpUndo[i]].style.display = "none";
      notread = pushtoArray(tmpUndo[i], notread);
      read = removeFromArray(tmpUndo[i], read);
    }
  }

  if (tmpUndo[0] == -3) {
    for (let i=1; i < tmpUndo.length; i++) {
      seendot[tmpUndo[i]].style.display = "";
      read = pushtoArray(tmpUndo[i], read);
      notread = removeFromArray(tmpUndo[i], notread);
    }
  }


  if (tmpUndo[0] == -10) {
    for (let i=1; i < tmpUndo.length; i++) {
      row[tmpUndo[i]].style.display = "none";
      del = pushtoArray(tmpUndo[i], del);
      notDel = removeFromArray(tmpUndo[i], notDel);
    }
  }

 
}



function undodeleteRow() {
  let subUndo = [-10];
  const row = document.getElementsByClassName("notiRowTable");
  const checkbox = document.getElementsByClassName("cboxes");
  for (let i=0; i<checkbox.length; i++) {
     if (checkbox[i].checked == true) {
      row[i].style.display = "none";
      del = removeFromArray(i, del);
      notDel = pushtoArray(i, notDel);
      subUndo = pushtoArray(i, subUndo);
      // read = removeFromArray(i ,read);
      // unread = removeFromArray(i, unread);
     }
     checkbox[i].checked = false;
  }
  for (let i=0; i<4; i++) {
    document.getElementsByClassName("notReloadi")[i].style.opacity = 0.3;
  }

  // const roundd = document.getElementsByClassName("notReload");
  // for (let i=0; i<roundd.length; i++){
  //   roundd[i].style.pointerEvent = "none";
  // }




  const round = document.getElementsByClassName("roundMulti");
  for (let i=0; i<round.length; i++) {
    round[i].style.backgroundColor = "white";
  }
  yesPointer = 5;
  undo.push(subUndo);
  if (undo.length != 0) {
      document.getElementsByClassName("roundMulti")[0].style.cursor = "pointer";
      document.getElementsByClassName("roundMulti")[0].style.opacity = 1;
    }
}


function deleteRow() {
  document.getElementById("row1-0").checked = false;
  let subUndo = [-1];
  const row = document.getElementsByClassName("notiRowTable");
  const checkbox = document.getElementsByClassName("cboxes");
  for (let i=0; i<checkbox.length; i++) {
     if (checkbox[i].checked == true) {
      row[i].style.display = "none";
      notDel = removeFromArray(i ,notDel);
      del = pushtoArray(i, del);
      subUndo = pushtoArray(i, subUndo);
      // read = removeFromArray(i ,read);
      // unread = removeFromArray(i, unread);
     }
     checkbox[i].checked = false;
  }
  for (let i=0; i<4; i++) {
    document.getElementsByClassName("notReloadi")[i].style.opacity = 0.3;
  }

  // const roundd = document.getElementsByClassName("notReload");
  // for (let i=0; i<roundd.length; i++){
  //   roundd[i].style.pointerEvent = "none";
  // }




  const round = document.getElementsByClassName("roundMulti");
  for (let i=0; i<round.length; i++) {
    round[i].style.backgroundColor = "white";
  }
  yesPointer = 0;
  undo.push(subUndo);
  if (undo.length != 0) {
      document.getElementsByClassName("roundMulti")[0].style.cursor = "pointer";
      document.getElementsByClassName("roundMulti")[0].style.opacity = 1;
    }
    document.getElementById("Modal1-sl-count").innerHTML = "Đã chọn: 0";
}


function markAsRead() {
  let subUndo = [-2];
  let seendot = document.getElementsByClassName("unseenNoti");
  const checkbox = document.getElementsByClassName("cboxes");
  for (let i=0; i<checkbox.length; i++) {
     if (checkbox[i].checked == true) {
      seendot[i].style.display = "";
      read = removeFromArray(i ,read);
      unread = pushtoArray(i, unread);
      subUndo = pushtoArray(i, subUndo);
     }
     checkbox[i].checked = false;
  }
  for (let i=0; i<4; i++) {
    document.getElementsByClassName("notReloadi")[i].style.opacity = 0.3;
  }


  const round = document.getElementsByClassName("roundMulti");
  for (let i=0; i<round.length; i++) {
    round[i].style.backgroundColor = "white";
  }
  yesPointer = 0;
  undo.push(subUndo);
  if (undo.length != 0) {
    document.getElementsByClassName("roundMulti")[0].style.cursor = "pointer";
    document.getElementsByClassName("roundMulti")[0].style.opacity = 1;
  }
  document.getElementById("Modal1-sl-count").innerHTML = "Đã chọn: 0";
}

function markAsNotRead() {
  let subUndo = [-3];
  let seendot = document.getElementsByClassName("unseenNoti");
  const checkbox = document.getElementsByClassName("cboxes");
  for (let i=0; i<checkbox.length; i++) {
     if (checkbox[i].checked == true) {
      seendot[i].style.display = "none";
      unread = removeFromArray(i , unread);
      read = pushtoArray(i, read);
      subUndo = pushtoArray(i, subUndo);
     }
     checkbox[i].checked = false;
  }
  for (let i=0; i<4; i++) {
    document.getElementsByClassName("notReloadi")[i].style.opacity = 0.3;
  }

  const round = document.getElementsByClassName("roundMulti");
  for (let i=0; i<round.length; i++) {
    round[i].style.backgroundColor = "white";
  }
  yesPointer = 0;
  undo.push(subUndo);
  if (undo.length != 0) {
    document.getElementsByClassName("roundMulti")[0].style.cursor = "pointer";
    document.getElementsByClassName("roundMulti")[0].style.opacity = 1;
  }
  document.getElementById("Modal1-sl-count").innerHTML = "Đã chọn: 0";
}

function btnHover(x, idx) {

  if (x==5) { // filter case
    if (idx == 1) {
      document.getElementsByClassName("roundMulti")[5].style.backgroundColor = "#F2F2F2";
      document.getElementsByClassName("roundMulti")[5].style.cursor = "pointer";
    }
    if (idx == 0) {
      document.getElementsByClassName("roundMulti")[5].style.backgroundColor = "white";
    }
  }


  if (x==0) { // Case default (reload)
    if (idx == 1) {
      document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "#F2F2F2";
      document.getElementsByClassName("roundMulti")[x].style.cursor = "pointer";
    }
    if (idx == 0) {
      document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "white";
    }
    if (undo.length == 0) {
      document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "white";
      document.getElementsByClassName("roundMulti")[0].style.cursor = "";
      document.getElementsByClassName("roundMulti")[0].style.opacity = 0.3;
    }
  }

  if(yesPointer == 5) {
    if (idx == 1) {
      document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "#F2F2F2";
      document.getElementsByClassName("roundMulti")[x].style.cursor = "pointer";
      document.getElementsByClassName("roundMulti")[1].style.backgroundColor = "white";
      document.getElementsByClassName("roundMulti")[1].style.cursor = "";
      document.getElementsByClassName("roundMulti")[3].style.backgroundColor = "white";
      document.getElementsByClassName("roundMulti")[3].style.cursor = "";
      document.getElementsByClassName("roundMulti")[4].style.backgroundColor = "white";
      document.getElementsByClassName("roundMulti")[4].style.cursor = "";
    
    }
    if (idx == 0) {
      document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "white";
    }
  }

  if(yesPointer == 1) {
    if (idx == 1) {
      document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "#F2F2F2";
      document.getElementsByClassName("roundMulti")[x].style.cursor = "pointer";
    }
    if (idx == 0) {
      document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "white";
    
    }
  }
  

  if (yesPointer == 2) {
    if (idx == 1 && (x == 1 || x==3)) {
    // document.getElementsByClassName("roundMulti")[2].style.backgroundColor = "white";
    // document.getElementsByClassName("roundMulti")[3].style.backgroundColor = "white";
    document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "#F2F2F2";
    document.getElementsByClassName("roundMulti")[x].style.cursor = "pointer";
    }

    if (idx == 0 && (x == 1 || x==3)) {
      // document.getElementsByClassName("roundMulti")[2].style.backgroundColor = "white";
      // document.getElementsByClassName("roundMulti")[3].style.backgroundColor = "white";
      document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "white";
      document.getElementsByClassName("roundMulti")[x].style.cursor = "";
      }

    if (x == 4) {
      document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "white";
      document.getElementsByClassName("roundMulti")[x].style.cursor = "";
      // document.getElementsByClassName("roundMulti")[3].style.backgroundColor = "white";
  
      }
  }

  if (yesPointer == 3) {
    if (idx == 1 && (x == 1 || x==4)) {
    document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "#F2F2F2";
    document.getElementsByClassName("roundMulti")[x].style.cursor = "pointer";
    }

    if (idx == 0 && (x == 1 || x==4)) {
      document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "white";
      document.getElementsByClassName("roundMulti")[x].style.cursor = "";
      }

    if (x == 3) {
      document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "white";
      document.getElementsByClassName("roundMulti")[x].style.cursor = "";
      }
  }




  // trash yes, other no
  if (yesPointer == 4) {
    if (idx == 1 && x == 1) {
    // document.getElementsByClassName("roundMulti")[2].style.backgroundColor = "white";
    // document.getElementsByClassName("roundMulti")[3].style.backgroundColor = "white";
    document.getElementsByClassName("roundMulti")[1].style.backgroundColor = "#F2F2F2";
    document.getElementsByClassName("roundMulti")[1].style.cursor = "pointer";
    }

    if (idx == 0 && x == 1) {
      // document.getElementsByClassName("roundMulti")[2].style.backgroundColor = "white";
      // document.getElementsByClassName("roundMulti")[3].style.backgroundColor = "white";
      document.getElementsByClassName("roundMulti")[1].style.backgroundColor = "white";
      document.getElementsByClassName("roundMulti")[1].style.cursor = "";
      }

    if (x == 2 || x == 3) {
      document.getElementsByClassName("roundMulti")[x].style.backgroundColor = "white";
      document.getElementsByClassName("roundMulti")[x].style.cursor = "";
      // document.getElementsByClassName("roundMulti")[3].style.backgroundColor = "white";
  
      }
  }
  
  if (yesPointer == 0) {
    
    const round = document.getElementsByClassName("notReload");
    for (let i=0; i<round.length; i++){
      round[i].style.cursor = "";
    }
  }
  
    
}

function btnOpacity() {
  yesPointer = 0;

  if (choiceFil == 1) {
    document.getElementsByClassName("notReloadi")[0].style.opacity = 0.3;
    document.getElementsByClassName("notReloadi")[1].style.opacity = 1;
    document.getElementsByClassName("notReloadi")[2].style.opacity = 0.3;
    document.getElementsByClassName("notReloadi")[3].style.opacity = 0.3;
    document.getElementsByClassName("notReload")[1].style.backgroundColor = "white";
    document.getElementsByClassName("notReload")[2].style.backgroundColor = "white";
    document.getElementsByClassName("notReload")[3].style.backgroundColor = "white";
    return; }
   


  
    let cnt = 0;
  const checkbox = document.getElementsByClassName("cboxes");
  for (let i=0; i<checkbox.length; i++) {
    if (checkbox[i].checked == true) {
      yesPointer = 1;
      cnt++;
    }
    
  }
  
  document.getElementById("Modal1-sl-count").innerHTML = "Đã chọn: " + cnt;
  
  for (let i=0; i<checkbox.length; i++) {
     if (checkbox[i].checked == true) {
      for (let i=0; i<4; i++) {
        if (i!=1) document.getElementsByClassName("notReloadi")[i].style.opacity = 1;
        else {
          if (choiceFil != 1) document.getElementsByClassName("notReloadi")[i].style.opacity = 0.3;
          else document.getElementsByClassName("notReloadi")[i].style.opacity = 1;
        }
        
        
      }
      return;
     }
  }

  for (let i=0; i<4; i++) {
    document.getElementsByClassName("notReloadi")[i].style.opacity = 0.3;
  }

  // const round = document.getElementsByClassName("notReload");
  // for (let i=0; i<round.length; i++){
  //   round[i].style.pointerEvent = "none";
  // }
  // yesPointer = 0;
}

function evaluateBtn() {
  let choice = [];

  const checkbox = document.getElementsByClassName("cboxes");
  for (let i=0; i<checkbox.length; i++) {
    if (checkbox[i].checked == true) {
      choice = pushtoArray(i, choice);
    }
  }

  let bol1 = 1;
  let bol2 = 1;

  for (let i=0; i<choice.length; i++) {
    if (inArray(choice[i], read) == 0) bol1 = 0;
  }

  for (let i=0; i<choice.length; i++) {
    if (inArray(choice[i], unread) == 0) bol2 = 0;
  }


  if (bol1 == 0) {
    const round = document.getElementsByClassName("notReload");
    const roundi = document.getElementsByClassName("notReloadi");
    
    round[3].style.cursor = "";
    roundi[3].style.opacity = 0.3;
  }

  if (bol1 == 1) {
    const round = document.getElementsByClassName("notReload");
    const roundi = document.getElementsByClassName("notReloadi");
    
    round[3].style.cursor = "pointer";
    roundi[3].style.opacity = 1;
  }

  if (bol2 == 0) {
    const round = document.getElementsByClassName("notReload");
    const roundi = document.getElementsByClassName("notReloadi");
    
    round[2].style.cursor = "";
    roundi[2].style.opacity = 0.3;


  }

  if (bol2 == 1) {
    const round = document.getElementsByClassName("notReload");
    const roundi = document.getElementsByClassName("notReloadi");
    
    round[2].style.cursor = "pointer";
    roundi[2].style.opacity = 1;
  }

  if (bol1 ==1 && bol2 == 1) {
    const round = document.getElementsByClassName("notReload");
    const roundi = document.getElementsByClassName("notReloadi");
    
    round[2].style.cursor = "";
    roundi[2].style.opacity = 0.3;
    round[3].style.cursor = "";
    roundi[3].style.opacity = 0.3;
  }

  if (bol1 == 0 && bol2 == 1) {
    yesPointer = 2;
  }

  if (bol1 == 1 && bol2 == 0) {
    yesPointer = 3;
  }

  if (bol1 == 0 && bol2 == 0) {
    yesPointer = 4;
  }

  if (choiceFil == 1) {
    const round = document.getElementsByClassName("notReload");
    const roundi = document.getElementsByClassName("notReloadi");
    round[2].style.cursor = "";
    roundi[2].style.opacity = 0.3;
    round[3].style.cursor = "";
    roundi[3].style.opacity = 0.3;
    yesPointer = 5;
  }


  if (bol1 ==1 && bol2 == 1 && choiceFil == 1) {
    const round = document.getElementsByClassName("notReload");
    const roundi = document.getElementsByClassName("notReloadi");
    
    round[1].style.cursor = "";
    roundi[1].style.opacity = 0.3;
  }




}

function pushtoArray(x, arr) {
  if (arr.length == 0) {
    arr.push(x);
    return arr;
  }
  for (let i=0; i<arr.length; i++) {
    if (arr[i] == x) return arr;
  }
  arr.push(x);
  return arr;
}

function removeFromArray(x, arr) {
  let newArr = [];
  for (let i=0; i<arr.length; i++) {
    if (arr[i] != x) newArr.push(arr[i]);  
  }
  return newArr;
}

function inArray(x, arr) {
  if (arr.length == 0) return 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] == x) return 1;  
  }
  return 0;
}

// Fill choice section

function filChoice(x) {
  choiceFil = x;
  const filModal = document.getElementById("filterModal");
  filModal.style.display = "none";
  const choiceOutTXT = document.getElementsByClassName("filterOutTXT")[0];
  if (x ==0) choiceOutTXT.innerHTML = "Tất cả";
  if (x ==1) choiceOutTXT.innerHTML = "Thông báo đã xóa";
  if (x ==2) choiceOutTXT.innerHTML = "Thông báo chưa xem";
  if (x ==3) choiceOutTXT.innerHTML = "Thông báo đã xem";
  if (x ==4) choiceOutTXT.innerHTML = "Thông báo đánh dấu sao";
  

  // if (choiceFil == 1) {
  //   document.getElementsByClassName("notReloadi")[0].style.opacity = 0.3;
  //   document.getElementsByClassName("notReloadi")[1].style.opacity = 1;
  //   document.getElementsByClassName("notReload")[1].style.opacity = 1;
  //   document.getElementsByClassName("notReloadi")[2].style.opacity = 0.3;
  //   document.getElementsByClassName("notReloadi")[3].style.opacity = 0.3;

  // }

  const row = document.getElementsByClassName("notiRowTable");
  for (let i=0; i < totalNoti; i++) {
    row[i].style.display = "none";
  }

  if (x==0) {
    for (let i=0; i < notDel.length; i++) {
      row[notDel[i]].style.display = "";
    }
    document.getElementById("row1-0").checked = false;
    
  }

  if (x==1) {
    yesPointer = 5;
    for (let i=0; i < del.length; i++) {
      row[del[i]].style.display = "";
    }
  }

  if (x==2) {
    for (let i=0; i < unread.length; i++) {
      if (inArray(unread[i], del) == 0) row[unread[i]].style.display = "";
    }
  }

  if (x==3) {
    for (let i=0; i < read.length; i++) {
      if (inArray(read[i], del) == 0) row[read[i]].style.display = "";
    }
  }

  if (x==4) {
    for (let i=0; i < star.length; i++) {
      if (inArray(star[i], del) == 0) row[star[i]].style.display = "";
    }
  }
  
}




// Check All section:

function checkAll() {
  const mainBtn = document.getElementById("row1-0");
  const allBtn = document.getElementsByClassName("cboxes");
  if (mainBtn.checked == true) {
    for (let i=0; i<allBtn.length; i++) {
      allBtn[i].checked = true;
    }
    yesPointer = 1;
    const roundi = document.getElementsByClassName("notReloadi");
    roundi[0].style.opacity = 1;
    roundi[1].style.opacity = 0.3;
    roundi[2].style.opacity = 0.3;
    roundi[3].style.opacity = 0.3;
    document.getElementById("Modal1-sl-count").innerHTML = "Đã chọn: " + allBtn.length;

  } else {
    for (let i=0; i<allBtn.length; i++) {
      allBtn[i].checked = false;
    }
    const roundi = document.getElementsByClassName("notReloadi");
    roundi[0].style.opacity = 0.3;
    roundi[1].style.opacity = 0.3;
    roundi[2].style.opacity = 0.3;
    roundi[3].style.opacity = 0.3;
    document.getElementById("Modal1-sl-count").innerHTML = "Đã chọn: 0";
  }

  
}

// close Modal


function closeModal() {
  let modal = document.getElementById("notiModal");
  modal.style.display = "none";
  document.getElementById("numberTXT").innerHTML = unread.length;
  document.getElementById("notiCnt").innerHTML = unread.length;
  if (unread.length == 0) {
    document.getElementById("notiIcon").className = "fa-solid fa-bell";
    document.getElementById("wrappernumberTXT").style.display = "none";
    document.getElementsByClassName("markRead")[0].style.display = "none";
    document.getElementsByClassName("markRead")[1].style.display = "none";

  } else {
    document.getElementById("notiIcon").className = "fa-solid fa-bell fa-shake";
    document.getElementById("wrappernumberTXT").style.display = "block";
  }
  
}


function btnxx1() {
  const filePath = '../5.emManage/EmMan.html';
  window.location.href = filePath;
}

function btnxx2() {
  const filePath = '../6.general management/mcp.html';
  window.location.href = filePath;
}

function btnxx3() {
  const filePath = '../6.general management/vehicle.html';
  window.location.href = filePath;
}