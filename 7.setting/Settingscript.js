let zIdx = 5;
document.getElementById('readUrl').addEventListener('change', function(){
    if (this.files[0] ) {
      var picture = new FileReader();
      picture.readAsDataURL(this.files[0]);
      picture.addEventListener('load', function(event) {
        document.getElementsByClassName("avatarBig")[0].setAttribute('src', event.target.result);
        document.getElementById('uploadedImage').setAttribute('src', event.target.result);
        document.getElementById('uploadedImage').style.display = 'block';
        document.getElementById('uploadedImage').style.zIndex = zIdx;
        zIdx++;
      });
    }
    document.getElementById("circleFace").style.display = "none";
  });


let randCnt = 0;

function randImg() {
  const avatar = document.getElementById("circleFace");
  avatar.style.display = "block";
  avatar.style.zIndex = zIdx;
  zIdx++;
  let s = "./rand-img/rand" + randCnt + ".png";
  avatar.src = s;
  randCnt = (randCnt + 1) % 11;
}

// Show password 

function showPass() {
  var x = document.getElementById("passNoti");
  var y = document.getElementById("inputPass");
  if (y.type === "password") {
    x.className = "fa-solid fa-eye icon-bl0 icon3";
    y.type = "text";
  }
  else {
    x.className = "fa-solid fa-eye-slash icon-bl0 icon3";
    y.type = "password";
  } 
}

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

function editAvaBig() {
  document.getElementsByClassName("text1Big")[0].innerHTML = document.getElementById("inputName").value;
}