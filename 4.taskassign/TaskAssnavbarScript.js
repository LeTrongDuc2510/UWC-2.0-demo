// let currentNavOnHover = 1;
// let prevNavOnClick = 1;
// let x1 = 14; // Height of Trang chủ
// let x2 = 164; // Height of Quản lí nhân viên - 164 with no subnav
//                 // else 249

// const ele = document.getElementsByClassName("bg-color");
// const txt = document.getElementsByClassName("nav-txt");
// const icon = document.getElementsByClassName("nav-icon");
// const subTxt = document.getElementsByClassName("subNav-txt");
// const navSelect = document.getElementById("navSelect");

// txt[0].style.fontWeight = 600;
// ele[0].style.backgroundColor = "rgb(242,242,242)";

// function upDateCurrNavHover(x) {
  
//     if (x == prevNavOnClick) {
//         if (x<=3) {
//             ele[x-1].style.backgroundColor = "rgb(230,230,230)";
//         } else {
//             ele[x+2].style.backgroundColor = "rgb(230,230,230)";
            
//         };
//     } else {
//         if (prevNavOnClick<=3) {
//             ele[prevNavOnClick-1].style.backgroundColor = "rgb(242,242,242)";
//         } else {
//             ele[prevNavOnClick+2].style.backgroundColor = "rgb(242,242,242)";
//         };
//     }
//     currentNavOnHover = x;

// }

// function upDateCurrNavClick(x) {
//     if (x == 1) navSelect.style.top = "16px";
//     else if (x == 2) navSelect.style.top = "66px";
//     else if (x == 3) navSelect.style.top = "116px";
//     else if (x == 4) navSelect.style.top = "166px";
//     else if (x == 5) navSelect.style.top = "216px";
//     else if (x == 6) navSelect.style.top = "266px";

//     if (prevNavOnClick != 0) {
//         if (prevNavOnClick<=3) {
//             ele[prevNavOnClick-1].style.backgroundColor = "";
//             txt[prevNavOnClick-1].style.fontWeight = 400;
//         } else {
//             ele[prevNavOnClick+1].style.backgroundColor = "";
//             txt[prevNavOnClick-1].style.fontWeight = 400;
//         };
//     } else {
//         txt[x-1].style.fontWeight = 600;
//     }

//     if (x == currentNavOnHover) {
//         if (x<=3) txt[x-1].style.fontWeight = 600;
//         else txt[x-1].style.fontWeight = 600;
//     }
//     prevNavOnClick = x;
// }


// subTxt[0].style.top = "160px";
// subTxt[1].style.top = "200px";


// for (let i=0; i<6; i++) {
//     if (i<3) {
//         txt[i].style.top = x1 + i * 50 + "px";
//         if (i==0) icon[i].style.top = x1 + i * 50 + 2 + "px";
//         if (i==1) icon[i].style.top = x1 + i * 50 + 4 + "px";
//         if (i==2) icon[i].style.top = x1 + i * 50 + 3 + "px";

//     } else if (i>=3) {
//         txt[i].style.top = x2 + (i - 3) * 50 + "px";
//         if (i==3) icon[i].style.top = x2 + (i - 3) * 50 + 3 + "px";
//         if (i==4) icon[i].style.top = x2 + (i - 3) * 50 + 3 + "px";
//         if (i==5) icon[i].style.top = x2 + (i - 3) * 50 + 4 + "px";
//     };
// }


function subTask1() {
    const subTask = document.getElementsByClassName("subTask");
    const bgColor = document.getElementsByClassName('bg-color');
    bgColor[3].style.backgroundColor = "#F2F2F2";
    bgColor[4].style.backgroundColor = "white";
    document.getElementsByClassName("ts-txt")[1].style.fontWeight = "600";
    document.getElementsByClassName("ts-txt")[2].style.fontWeight = "400";
    resetAll();
    document.getElementById("content").style.display = "";
    document.getElementById("taskMan").style.display = "none";
}

function subTask2() {
    const subTask = document.getElementsByClassName("subTask");
    const bgColor = document.getElementsByClassName('bg-color');
    bgColor[3].style.backgroundColor = "white";
    bgColor[4].style.backgroundColor = "#F2F2F2";
    document.getElementsByClassName("ts-txt")[2].style.fontWeight = "600";
    document.getElementsByClassName("ts-txt")[1].style.fontWeight = "400";
    resetAll();
    document.getElementById("content").style.display = "none";
    document.getElementById("taskMan").style.display = "";

}