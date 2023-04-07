const arrowRight = document.querySelector(".fa-chevron-right");
const button=document.querySelector(".btn");
const list=document.querySelector(".list");
const arrowDown=document.querySelector("#arrow");
const chosen=document.querySelector(".chosen");
const unchosen=document.querySelector(".unchosen");

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
  window.location="mcp.html"; 
})

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
const randomDriver=[
  "Lê Trọng Đức",
  "Cao Chánh Trí",
  "Đinh Lê Dũng",
  "Mai Tôn Đăng Khánh",
  "Trần Hoàng Khôi Tuấn"
]
const randomState=[
  "Đang hoạt động",
  "Không hoạt động"
]
const changeColor=function(state,text,driver,route)
{
  if (text.localeCompare("Đang hoạt động")==0)
  {
    state.style.color="green";
    var randIndex_d= Math.floor(Math.random() * Object.keys(randomDriver).length);
    var d=randomDriver[randIndex_d];
    driver.innerHTML=d;
    chooseRandomRoute(route);
  }
  else{
    state.style.color="red";
    driver.innerHTML="-----";
    route.innerHTML="-----";
  }
  // return state;
}
const chooseRandomState=function(state,driver,route)
{
  /* Method to choose randomly from an array */
  var randIndex = Math.floor(Math.random() * Object.keys(randomState).length);
  var text=randomState[randIndex];
  /* Method to choose randomly from an array */
  state.innerHTML=text;
  changeColor(state,text,driver,route);
}
const chooseRandomFuel=function(fuel)
{
  //Math.random() * (max - min) + min;
  var capacity=Math.floor(Math.random() * (30-20)+20);
  var rest=Math.floor(Math.random() * capacity);
  fuel.innerHTML=rest + " / " + capacity + " L";
}
const chooseRandomRoute=function(route)
{
  var r1,r2,r3;
  while (r1==r2||r1==r3||r2==r3) // make sure that all MCPs in a route are different
  {
    r1=Math.floor(Math.random() * (20-1)+1);
    r2=Math.floor(Math.random() * (20-1)+1);
    r3=Math.floor(Math.random() * (20-1)+1);
  }
  route.innerHTML="MCP"+ r1 + "⇨MCP" + r2 + "⇨MCP" + r3;
}
const data=function()
{
  checkHover();
  from=5*count+1;
  to=5*(count+1);
  //Change MCP
  document.querySelector("#id1").innerHTML="#PT12"+(5*`${count}`+34);
  document.querySelector("#id2").innerHTML="#PT12"+(5*`${count}`+35);
  document.querySelector("#id3").innerHTML="#PT12"+(5*`${count}`+36);
  document.querySelector("#id4").innerHTML="#PT12"+(5*`${count}`+37);
  document.querySelector("#id5").innerHTML="#PT12"+(5*`${count}`+38);
  
  //Random State, Driver, Route
  state1=document.querySelector("#state1");
  driver1=document.querySelector("#driver1");
  route1=document.querySelector("#route1");
  fuel1=document.querySelector("#fuel1");
  chooseRandomState(state1,driver1,route1);
  chooseRandomFuel(fuel1);

  state2=document.querySelector("#state2");
  driver1=document.querySelector("#driver2");
  route1=document.querySelector("#route2");
  fuel1=document.querySelector("#fuel2");
  chooseRandomState(state2,driver2,route2);
  chooseRandomFuel(fuel2);

  state3=document.querySelector("#state3")
  driver1=document.querySelector("#driver3");
  route1=document.querySelector("#route3");
  fuel1=document.querySelector("#fuel3");
  chooseRandomState(state3,driver3,route3);
  chooseRandomFuel(fuel3);

  state4=document.querySelector("#state4")
  driver1=document.querySelector("#driver4");
  route1=document.querySelector("#route4");
  fuel1=document.querySelector("#fuel4");
  chooseRandomState(state4,driver4,route4);
  chooseRandomFuel(fuel4);

  state5=document.querySelector("#state5")
  driver1=document.querySelector("#driver5");
  route1=document.querySelector("#route5");
  fuel1=document.querySelector("#fuel5");
  chooseRandomState(state5,driver5,route5);
  chooseRandomFuel(fuel5);

  //Random Capacity
  document.querySelector("#capacity1").innerHTML=Math.floor(Math.random() * (100-50)+50)+"00kg";
  document.querySelector("#capacity2").innerHTML=Math.floor(Math.random() * (100-50)+50)+"00kg";
  document.querySelector("#capacity3").innerHTML=Math.floor(Math.random() * (100-50)+50)+"00kg";
  document.querySelector("#capacity4").innerHTML=Math.floor(Math.random() * (100-50)+50)+"00kg";
  document.querySelector("#capacity5").innerHTML=Math.floor(Math.random() * (100-50)+50)+"00kg";

  document.querySelector(".multi-pagination").innerHTML=`${from}` + " - " + `${to}` + " trên 50" ;
}
// var randColorValue = colors[Object.keys(colors)[rand]];
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
  else if (count==9)
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

/* Click Block */
block1=document.querySelector(".block1");
block2=document.querySelector(".block2");
block1.addEventListener("click",function(){
  document.querySelector(".content-name").innerHTML="Xe 1";
  document.querySelector(".content-id").innerHTML="#PT1234";
  document.querySelector(".content-capacity").innerHTML="Sức chứa: 8900kg";
  colorBar=document.querySelector(".content-fuel").innerHTML="Nhiên liệu: 18 / 22 L";
  document.querySelector(".content-location1").innerHTML="MCP1";
  document.querySelector(".content-location2").innerHTML="MCP2";
  document.querySelector(".content-location3").innerHTML="MCP3";
})
block2.addEventListener("click",function(){
  document.querySelector(".content-name").innerHTML="Xe 2";
  document.querySelector(".content-id").innerHTML="#PT1235";
  document.querySelector(".content-capacity").innerHTML="Sức chứa: 7000kg";
  colorBar=document.querySelector(".content-fuel").innerHTML="Nhiên liệu: 17 / 22 L";
  document.querySelector(".content-location1").innerHTML="MCP5";
  document.querySelector(".content-location2").innerHTML="MCP1";
  document.querySelector(".content-location3").innerHTML="MCP10";
})

// Map Box
L.mapbox.accessToken = '<your access token here>';
var map = L.mapbox.map('mapbox')
    .setView([40, -74.50], 9)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));

L.mapbox.accessToken = '<your access token here>';
// Create a map in the div #map
L.mapbox.map('mapbox', 'mapbox.streets');