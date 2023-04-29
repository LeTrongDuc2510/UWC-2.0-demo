const mcpData = [
  {
    name: 'MCP1',
    area: '497 Hoà Hảo, P7, Q10.',
    percent: '95',
    color: '#EF2C2C',
    location: "497 Hoà Hảo, Phường 7, Quận 10, TPHCM.",
    image: "./image/image1.jpeg",
    capacity: "2 tấn."
  },
  {
    name: 'MCP2',
    area: '120 Hồng Bàng, P12, Q5.',
    percent: '83',
    color: '#ffe602',
    location: "120 Hồng Bàng, Phường 12, Quận 5, TPHCM.",
    image: "./image/image2.jpeg",
    capacity: "3 tấn."
  },
  {
    name: 'MCP3',
    area: '520A Thành Thái, P12, Q10.',
    percent: '71',
    color: '#ffe602',
    location: "520A Thành Thái, Phường 12, Quận 10, TPHCM.",
    image: "./image/image3.jpeg",
    capacity: "1 tấn."
  },
  {
    name: 'MCP4',
    area: '16A/A1 L.H.P, P12, Q10.',
    percent: '45',
    color: '#00FF19',
    location: "16 Lê Hồng Phong, Phường 12, Quận 10, TPHCM.",
    image: "./image/image4.jpeg",
    capacity: "2.5 tấn."
  },
  {
    name: 'MCP5',
    area: '279 N.T.P, P5, Q10.',
    percent: '32',
    color: '#00FF19',
    location: "279 Nguyễn Tri Phương, Phường 5, Quận 10, TPHCM.",
    image: "./image/image5.jpeg",
    capacity: "1.5 tấn."
  },
  {
    name: 'MCP6',
    area: '217 Hồng Bàng, P11, Q5.',
    percent: '67',
    color: '#00FF19',
    location: "217 Đ. Hồng Bàng, Phường 11, Quận 5, TPHCM.",
    image: "./image/image1.jpeg",
    capacity: "5 tấn."
  },
  {
    name: 'MCP7',
    area: '497 Hoà Hảo, P7, Q10.',
    percent: '50',
    color: '#ffe602',
    location: "497, Hoà Hảo, phường 7, quận 10, TPHCM.",
    image: "./image/image2.jpeg",
    capacity: "2.5 tấn."
  },
  {
    name: 'MCP8',
    area: '16A/A1 L.H.P, P12, Q10.',
    percent: '78',
    color: '#ffe602',
    location: "16A/A1 Lê Hồng Phong, Phường 12, Quận 10, TPHCM.",
    image: "./image/image3.jpeg",
    capacity: "3.5 tấn."
  },
  {
    name: 'MCP9',
    area: '520A Thành Thái, P12, Q10.',
    percent: '54',
    color: '#ffe602',
    location: "520A Thành Thái, Phường 12, Quận 10, TPHCM.",
    image: "./image/image4.jpeg",
    capacity: "4 tấn."
  },
  {
    name: 'MCP10',
    area: '279 N.T.P, P5, Q10.',
    percent: '90',
    color: '#ffe602',
    location: "279 Nguyễn Tri Phương, Phường 5, Quận 10, TPHCM.",
    image: "./image/image5.jpeg",
    capacity: "1 tấn."
  }
]
var fix=false; // use to change or keep the percent of old MCP
var flag=1;
var countDeleteRow=0;

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


/* Multi Pagination */

const changeAddress=function(address)
{
  var randIndex= Math.floor(Math.random() * Object.keys(mcpData).length);
  var rand=mcpData[randIndex].location;
  address.innerHTML=rand;
}
const changeColor=function(p,percent)
{
  if (p<=100 && p>=90)
  {
    percent.style.color="#EF2C2C";
  }
  else if (p<90 && p>=50)
  {
    percent.style.color="#ffe602";
  }
  else
  {
    percent.style.color="#00FF19";
  }
}
const changeState=function(percent)
{
  var p;
  if (!fix)
  {
    p=Math.floor(Math.random() * 100);
    percent.innerHTML=p+"%";
  }
  else{
    text=percent.innerText;
    p=text.slice(0,-1);
  }
  changeColor(p,percent);
}
const data=function()
{
  checkHover();
  from=5*count+1;
  to=5*(count+1);
  //Change MCP
  document.querySelectorAll(".name-mcp")[0].innerHTML="MCP"+(5*count+countDeleteRow+1);
  document.querySelectorAll(".name-mcp")[1].innerHTML="MCP"+(5*count+countDeleteRow+2);
  document.querySelectorAll(".name-mcp")[2].innerHTML="MCP"+(5*count+countDeleteRow+3);
  document.querySelectorAll(".name-mcp")[3].innerHTML="MCP"+(5*count+countDeleteRow+4);
  document.querySelectorAll(".name-mcp")[4].innerHTML="MCP"+(5*count+countDeleteRow+5);

  //Change number of employees
  document.querySelectorAll(".num")[0].innerHTML=Math.floor(Math.random() * 50);
  document.querySelectorAll(".num")[1].innerHTML=Math.floor(Math.random() * 50);
  document.querySelectorAll(".num")[2].innerHTML=Math.floor(Math.random() * 50);
  document.querySelectorAll(".num")[3].innerHTML=Math.floor(Math.random() * 50);
  document.querySelectorAll(".num")[4].innerHTML=Math.floor(Math.random() * 50);

  //Change capacity
  document.querySelectorAll(".capacity")[0].innerHTML=Math.floor(Math.random() * (5-1)+1)+ " tấn";
  document.querySelectorAll(".capacity")[1].innerHTML=Math.floor(Math.random() * (5-1)+1)+ " tấn";
  document.querySelectorAll(".capacity")[2].innerHTML=Math.floor(Math.random() * (5-1)+1)+ " tấn";
  document.querySelectorAll(".capacity")[3].innerHTML=Math.floor(Math.random() * (5-1)+1)+ " tấn";
  document.querySelectorAll(".capacity")[4].innerHTML=Math.floor(Math.random() * (5-1)+1)+ " tấn";
  //Change Address
  address1=document.querySelectorAll(".address")[0];
  percent1=document.querySelectorAll(".table-state")[0];
  changeAddress(address1);
  changeState(percent1);

  address2=document.querySelectorAll(".address")[1];
  percent2=document.querySelectorAll(".table-state")[1];
  changeAddress(address2);
  changeState(percent2);

  address3=document.querySelectorAll(".address")[2];
  percent3=document.querySelectorAll(".table-state")[2];
  changeAddress(address3);
  changeState(percent3);

  address4=document.querySelectorAll(".address")[3];
  percent4=document.querySelectorAll(".table-state")[3];
  changeAddress(address4);
  changeState(percent4);

  address5=document.querySelectorAll(".address")[4];
  percent5=document.querySelectorAll(".table-state")[4];
  changeAddress(address5);
  changeState(percent5);

  document.querySelector(".multi-pagination").innerHTML= from + " - " + to + " trên 20" ;
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
  fix=false;
  data();
});
prev.addEventListener("click",function(){
  count--;
  fix=false;
  console.log(countDeleteRow);
  data();
});

/* Write block */
const wrapperBlock = document.querySelector('.wrapper-block')
for (let i = 0; i < mcpData.length; i++) {
  var w=(213/100*`${mcpData[i].percent}`); // we can't use signal % to calculate, because computer think that is a character
  if (i<5)
  {
    wrapperBlock.innerHTML += `
    <div class="block">
      <p class="name">${mcpData[i].name}</p>
      <div class="cover">
          <p id="area">${mcpData[i].area}</p>
          <div class="percent">${mcpData[i].percent}%</div>
      </div>
      <div class="bar">
          <div class="color-bar" style="background:${mcpData[i].color}; width: ${w}px; height: 6px; border-radius: 10px"></div>
      </div>
    </div>`
  }
  else
  {
    wrapperBlock.innerHTML += `
    <div class="block hidden">
      <p class="name">${mcpData[i].name}</p>
      <div class="cover">
          <p id="area">${mcpData[i].area}</p>
          <div class="percent">${mcpData[i].percent}%</div>
      </div>
      <div class="bar">
        <div class="color-bar" style="background:${mcpData[i].color}; width: ${w}px; height: 6px; border-radius: 10px"></div>
      </div>
    </div>`
  }
}

/* Add MCP (Open new modal) */
const plus=document.querySelector(".fa-plus");
const newMCP=document.querySelector(".fa-map-location-dot");
const addModal=document.querySelector(".add-modal");
const addOverlay = document.querySelector(".add-overlay");
const addCloseButton = document.querySelector(".add-close-button");
// const add=document.querySelector(".add");
const accept=document.querySelector(".accept");

const openAddModal = function () {
  addModal.classList.remove('hidden');
  addOverlay.classList.remove('hidden');
};

const closeAddModal = function () {
  addModal.classList.add('hidden');
  addOverlay.classList.add('hidden');
};

plus.addEventListener("click", openAddModal);
newMCP.addEventListener("click", openAddModal);
// add.addEventListener("click", openAddModal);
addCloseButton.addEventListener('click', closeAddModal);
addOverlay.addEventListener('click', closeAddModal);
accept.addEventListener("click",closeAddModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !addModal.classList.contains('hidden')) {
    closeAddModal();
  }
});

/* Change Content */
var countDelete=0;
var array=[];
for (i=0;i<10;i++)
{
  array[i]=false;
}
deleteBlock=function(){
  countDelete++;
  array[flag-1]=true; //true means that the block has been hidden
  document.querySelectorAll(".block")[flag-1].classList.add("hidden");
  if (countDelete<=5) document.querySelectorAll(".block")[4+countDelete].classList.remove("hidden");
  var c=flag; // c is the variable to check the nearest block that hasn't been deleted
  flag++; // change to next vehicle
  while (array[c]==true) c++;
  changeContent(c);
}
const wrapperContent=document.querySelector(".wrapper-content");
/* Delete for initial MCP (MCP1) */
del = document.querySelector(".delete");
del.addEventListener("click",deleteBlock);
/* Delete when click on one MCP */
changeContent=function(i)
{
  flag=i+1; // because i is index of array, and flag is the order of block
  var w=(430/100*`${mcpData[i].percent}`);
  wrapperContent.innerHTML=`
    <p class="content-name">${mcpData[i].name}</p>
    <b id="bold-location">Địa điểm:</b>
    <div class="content-location"> ${mcpData[i].location}</div>
    <b class="bold-capacity">Sức chứa</b>
    <div class="capacity">${mcpData[i].capacity}</div>
    <div class="content-state"><b>Trạng thái:</b></div>
    <div class="content-bar"></div>
    <div class="content-color-bar" style="background:${mcpData[i].color}; width: ${w}px; height: 6px; border-radius: 10px"></div>
    <div class="content-percent">${mcpData[i].percent}%</div>
    <img id="image" src=${mcpData[i].image}>
    <div class="delete">
        <i class="fa-solid fa-list-check"></i>
        <p>Xoá MCP</p>
    </div>
  `
  del = document.querySelector(".delete");
  del.addEventListener("click",deleteBlock);
}

document.querySelectorAll(".block")[0].addEventListener("click",()=>{changeContent(0)});
document.querySelectorAll(".block")[1].addEventListener("click",()=>{changeContent(1)});
document.querySelectorAll(".block")[2].addEventListener("click",()=>{changeContent(2)});
document.querySelectorAll(".block")[3].addEventListener("click",()=>{changeContent(3)});
document.querySelectorAll(".block")[4].addEventListener("click",()=>{changeContent(4)});
document.querySelectorAll(".block")[5].addEventListener("click",()=>{changeContent(5)});
document.querySelectorAll(".block")[6].addEventListener("click",()=>{changeContent(6)});
document.querySelectorAll(".block")[7].addEventListener("click",()=>{changeContent(7)});
document.querySelectorAll(".block")[8].addEventListener("click",()=>{changeContent(8)});
document.querySelectorAll(".block")[9].addEventListener("click",()=>{changeContent(9)});
//Cannot use addEventListener("click",changeContent(1)) because the function will be executed immediately when the line gets parsed
/* Delete MCP in Modal*/
var countCheckBox=0; 
function deleteRow() {
  document.querySelectorAll('#myTable .chk:checked').forEach(e => {
    countCheckBox++;
    rand=Math.floor(Math.random() * Object.keys(mcpData).length);
    randPercent=Math.floor(Math.random() * 100);
    randNum=Math.floor(Math.random() * 50);
    randCapacity=Math.floor(Math.random() * (5-1)+1);
    var color;
    if (randPercent<=100 && randPercent>=90)
    {
      color="#EF2C2C";
    }
    else if (randPercent<90 && randPercent>=50)
    {
      color="#ffe602";
    }
    else
    {
      color="#00FF19";
    }
    console.log("color",color);
    countDeleteRow++;
    e.parentNode.parentNode.remove();
    newRow=document.createElement("tr");
    newRow.innerHTML=`
      <td><input type="checkbox" class = "chk" /></td>
      <td class="name-mcp">MCP${5+countDeleteRow+5*count}</td>
      <td class="table-state color" style="color: ${color};">
        ${randPercent}%
      </td>
      <td class="num">${randNum}</td>
      <td class="capacity">${randCapacity} tấn</td>
      <td class="address">${mcpData[rand].location}</td>
    `
    myTable=document.querySelector("#myTable");
    myTable.appendChild(newRow);
    for (i=0;i<5;i++)
    {
      fix=true;
      percent=document.querySelectorAll(".table-state")[i];
      changeState(percent);
    }
  });
}
delModal=document.querySelector(".delete-modal");
delModal.addEventListener("click",deleteRow);


