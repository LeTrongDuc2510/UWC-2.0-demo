var flag=1;
const randomAddress=[
  "497, Hoà Hảo, phường 7, quận 10, TP.HCM",
  "268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh",
  "279 Nguyễn Tri Phương, Phường 5, Quận 10, Thành phố Hồ Chí Minh",
  "2 Dương Quang Trung, Phường 12, Quận 10, Thành phố Hồ Chí Minh",
  "217 Đ. Hồng Bàng, Phường 11, Quận 5, Thành phố Hồ Chí Minh"
]

/* Show Table */
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
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
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
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

/* Open Modal */
const modal = document.querySelector(".modal");
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector(".close-button");
const more = document.querySelector(".more");

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

more.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


/* Toggle List */
const arrowDown = document.querySelector("#arrow");
const chosen = document.querySelector(".chosen");
const unchosen = document.querySelector(".unchosen");
const button = document.querySelector(".btn");

const toggleList=function(){
  chosen.classList.toggle("showList"); 
  unchosen.classList.toggle("showList"); 
  arrowDown.classList.toggle("toggleArrow"); 
}
button.addEventListener("click",function(e){
  e.stopPropagation();
  toggleList();
});

document.documentElement.addEventListener("click", function () {
  if (chosen.classList.contains("showList")) {
    toggleList();
  }
  if (unchosen.classList.contains("showList")) {
    toggleList();
  }
});

/* Change page */
unchosen.addEventListener("click",function(){
  window.location="vehicle.html"; 
})

/* Click block */
block1=document.querySelectorAll(".block")[0];
block2=document.querySelectorAll(".block")[1];
block3=document.querySelectorAll(".block")[2];
block4=document.querySelectorAll(".block")[3];
block5=document.querySelectorAll(".block")[4];
changeblock1=function(){
  document.querySelector(".content-name").innerHTML="MCP1";
  document.querySelector(".content-area").innerHTML="Khu vực 1";
  document.querySelector(".content-location").innerHTML="497, Hoà Hảo, phường 7, quận 10, TP.HCM";
  colorBar=document.querySelector(".content-color-bar");
  colorBar.style.background="green";
  colorBar.style.width="295px";
  document.querySelector(".content-percent").innerHTML="97%";
  document.querySelector("#map").src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.674591160663!2d106.6620321!3d10.7600001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eefc9c265e9%3A0x5801541ce0809648!2zS8O9IHTDumMgeMOhIMSQ4bqhaSBo4buNYyBCw6FjaCBLaG9h!5e0!3m2!1svi!2s!4v1680775906505!5m2!1svi!2s";
}
changeblock2=function(){
  document.querySelector(".content-name").innerHTML="MCP2";
  document.querySelector(".content-area").innerHTML="Khu vực 2";
  document.querySelector(".content-location").innerHTML="268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh";
  colorBar=document.querySelector(".content-color-bar");
  colorBar.style.background="yellow";
  colorBar.style.width="255px";
  document.querySelector(".content-percent").innerHTML="84%";
  document.querySelector("#map").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5115109694375!2d106.65571311456333!3d10.77208026222009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1680776230560!5m2!1svi!2s";
}
changeblock3=function(){
  document.querySelector(".content-name").innerHTML="MCP3";
  document.querySelector(".content-area").innerHTML="Khu vực 3";
  document.querySelector(".content-location").innerHTML="279 Nguyễn Tri Phương, Phường 5, Quận 10, Thành phố Hồ Chí Minh";
  colorBar=document.querySelector(".content-color-bar")
  colorBar.style.background="red";
  colorBar.style.width="146px";
  document.querySelector(".content-percent").innerHTML="48%";
  document.querySelector("#map").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.654887744777!2d106.66616931456335!3d10.761058462420339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee4595019ad%3A0xf2a1b15c6af2c1a6!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaW5oIHThur8gVFAuIEjhu5MgQ2jDrSBNaW5oIChDxqEgc-G7nyBCKQ!5e0!3m2!1svi!2s!4v1680776283262!5m2!1svi!2s";
}
changeblock4=function(){
  document.querySelector(".content-name").innerHTML="MCP4";
  document.querySelector(".content-area").innerHTML="Khu vực 4";
  document.querySelector(".content-location").innerHTML="2 Dương Quang Trung, Phường 12, Quận 10, Thành phố Hồ Chí Minh";
  colorBar=document.querySelector(".content-color-bar")
  colorBar.style.background="green";
  colorBar.style.width="304px";
  document.querySelector(".content-percent").innerHTML="100%";
  document.querySelector("#map").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4924452791533!2d106.6633196746726!3d10.77354505924763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edc6b75aa67%3A0xa77d949e40bc80e0!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBZIGtob2EgUGjhuqFtIE5n4buNYyBUaOG6oWNo!5e0!3m2!1svi!2s!4v1682094628042!5m2!1svi!2s";
}
changeblock5=function(){
  document.querySelector(".content-name").innerHTML="MCP5";
  document.querySelector(".content-area").innerHTML="Khu vực 5";
  document.querySelector(".content-location").innerHTML="217 Đ. Hồng Bàng, Phường 11, Quận 5, Thành phố Hồ Chí Minh";
  colorBar=document.querySelector(".content-color-bar")
  colorBar.style.background="green";
  colorBar.style.width="304px";
  document.querySelector(".content-percent").innerHTML="100%";
  document.querySelector("#map").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7417891463833!2d106.66073777467236!3d10.754372659600925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef09222b00b%3A0xb02f0a86479b4d8f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBZIGTGsOG7o2MgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIChVTVAp!5e0!3m2!1svi!2s!4v1682094745162!5m2!1svi!2s";
}
changeblockRandom=function(number){
  document.querySelectorAll(".block")[i];
  document.querySelector(".content-name").innerHTML="MCP"+number;
  document.querySelector(".content-area").innerHTML="Khu vực "+number;
  document.querySelector(".content-location").innerHTML="";
  colorBar=document.querySelector(".content-color-bar")
  colorBar.style.background="green";
  colorBar.style.width="304px";
  document.querySelector(".content-percent").innerHTML="100%";
  document.querySelector("#map").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7417891463833!2d106.66073777467236!3d10.754372659600925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef09222b00b%3A0xb02f0a86479b4d8f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBZIGTGsOG7o2MgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oIChVTVAp!5e0!3m2!1svi!2s!4v1682094745162!5m2!1svi!2s";
}
block1.addEventListener("click",changeblock1);
block2.addEventListener("click",changeblock2);
block3.addEventListener("click",changeblock3);
block4.addEventListener("click",changeblock4);
block5.addEventListener("click",changeblock5);
block6.addEventListener("click",()=>{changeblockRandom(6)});
block7.addEventListener("click",()=>{changeblockRandom(7)});
block8.addEventListener("click",()=>{changeblockRandom(8)});
block9.addEventListener("click",()=>{changeblockRandom(9)});
block10.addEventListener("click",()=>{changeblockRandom(10)});
/* Filter Table */
function filterTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.querySelector("#myInput");
  filter = input.value.toUpperCase();
  table = document.querySelector("#myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

/* Multi Pagination */

const changeAddress=function(address)
{
  var randIndex= Math.floor(Math.random() * Object.keys(randomAddress).length);
  var rand=randomAddress[randIndex];
  address.innerHTML=rand;
}
const changeColor=function(percent,colorBar)
{
  if (percent<=100 && percent>=90)
  {
    colorBar.style.background="green";
  }
  else if (percent<90 && percent>=60)
  {
    colorBar.style.background="yellow";
  }
  else
  {
    colorBar.style.background="red";
  }
}
const changeState=function(bar,colorBar,percent)
{
  var p=Math.floor(Math.random() * 100);
  percent.innerHTML=p;
  var value=p*bar.offsetWidth/100;
  colorBar.style.width=`${value}`+"px";
  changeColor(p,colorBar);
}
const data=function()
{
  checkHover();
  from=5*count+1;
  to=5*(count+1);
  //Change MCP
  document.querySelector("#mcp1").innerHTML="MCP"+(5*`${count}`+1);
  document.querySelector("#mcp2").innerHTML="MCP"+(5*`${count}`+2);
  document.querySelector("#mcp3").innerHTML="MCP"+(5*`${count}`+3);
  document.querySelector("#mcp4").innerHTML="MCP"+(5*`${count}`+4);
  document.querySelector("#mcp5").innerHTML="MCP"+(5*`${count}`+5);

  //Change number of employees
  document.querySelector("#num1").innerHTML=Math.floor(Math.random() * 50);
  document.querySelector("#num2").innerHTML=Math.floor(Math.random() * 50);
  document.querySelector("#num3").innerHTML=Math.floor(Math.random() * 50);
  document.querySelector("#num4").innerHTML=Math.floor(Math.random() * 50);
  document.querySelector("#num5").innerHTML=Math.floor(Math.random() * 50);

  //Change Address
  address1=document.querySelector("#address1");
  colorBar1=document.querySelector("#color-bar1");
  bar1=document.querySelector("#bar1");
  percent1=document.querySelector("#percent1");
  changeAddress(address1);
  changeState(bar1,colorBar1,percent1);

  address2=document.querySelector("#address2");
  colorBar2=document.querySelector("#color-bar2");
  bar2=document.querySelector("#bar2");
  percent2=document.querySelector("#percent2");
  changeAddress(address2);
  changeState(bar2,colorBar2,percent2);

  address3=document.querySelector("#address3");
  colorBar3=document.querySelector("#color-bar3");
  bar3=document.querySelector("#bar3");
  percent3=document.querySelector("#percent3");
  changeAddress(address3);
  changeState(bar3,colorBar3,percent3);

  address4=document.querySelector("#address4");
  colorBar4=document.querySelector("#color-bar4");
  bar4=document.querySelector("#bar4");
  percent4=document.querySelector("#percent4");
  changeAddress(address4);
  changeState(bar4,colorBar4,percent4);

  address5=document.querySelector("#address5");
  colorBar5=document.querySelector("#color-bar5");
  bar5=document.querySelector("#bar5");
  percent5=document.querySelector("#percent5");
  changeAddress(address5);
  changeState(bar5,colorBar5,percent5);


  document.querySelector(".multi-pagination").innerHTML=`${from}` + " - " + `${to}` + " trên 20" ;
}
var count=0;
var from,to;
const next=document.querySelector("#next");
const prev=document.querySelector("#prev");
const checkHover=function()
{
  if (count==0)
  {
    prev.classList.add("noHover");
  }
  else if (count==3)
  {
    next.classList.add("noHover");
  }
  else
  {
    next.classList.remove("noHover");
    prev.classList.remove("noHover");
  }
}
if (count==0) //at first, u can't go prev
{
  prev.classList.add("noHover");
}
next.addEventListener("click",function(){
  count++;
  data();
});
prev.addEventListener("click",function(){
  count--;
  data();
});

/* Delete MCP */
var countDelete=0;
var array=[];
for (i=0;i<10;i++)
{
  array[i]=false;
}
const deleteVehicle = document.querySelector(".delete");
deleteVehicle.addEventListener("click",function(){
  countDelete++;
  array[flag-1]=true;
  document.querySelectorAll(".block")[flag-1].classList.add("hidden");
  if (countDelete<=5) document.querySelectorAll(".block")[3+countDelete].classList.remove("hidden");
  flag++; // change to next vehicle
  var c=flag-1; // c is the variable to check the nearest block that hasn't been deleted
  while (array[c]==true) c++;
  c++; // switch c from an index to a right order of block
  switch(c)
  {
    case 1:
    changeblock1();
    case 2:
    changeblock2();
    case 3:
    changeblock3();
    case 4:
    changeblock4();
    case 5: 
    changeblock5();
    case 6: case 7: case 8: case 9: case 10:
    changeblockRandom(c);
  }
});
