function closeModal() {
    let modal = document.getElementById("TriaddEmModel");
    modal.style.display = "none";    
}

function openModalee() {
  let modal = document.getElementById("TriaddEmModel");
  modal.style.display = "block";    
}






document.getElementById('readUrl').addEventListener('change', function(){
    if (this.files[0] ) {
      var picture = new FileReader();
      picture.readAsDataURL(this.files[0]);
      picture.addEventListener('load', function(event) {
        document.getElementById('uploadedImage').setAttribute('src', event.target.result);
        document.getElementById('uploadedImage').style.display = 'block';
        document.getElementById('uploadedImage').style.zIndex = zIdx;
        zIdx++;
      });
    }
    document.getElementById("circleFaces").style.display = "none";
  });


function modiChoice() {
    if (document.getElementById("modiFill").value == "Janitor")
    {
      document.getElementById("modiChoiceTXT").value = " #JN";
      document.getElementsByClassName("information")[6].style.display = "block";
      document.getElementsByClassName("information-container")[0].style.top = "9%";

    } else {
      document.getElementById("modiChoiceTXT").value = " #CL";
      document.getElementsByClassName("information")[6].style.display = "none";
      document.getElementsByClassName("information-container")[0].style.top = "17%";


    }
    

}

    

