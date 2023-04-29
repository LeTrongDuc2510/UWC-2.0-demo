let checkk = 0;
let passShowed = 0;
const USER = "dinhledung"
const PASSWORD = "dinhledung"

function clickOn() {
    checkk = 1-checkk;
    if (checkk ==1) {
        document.getElementById("tick").style.display = "block";
        document.getElementById("cbx-12").checked = true;
    }
    else {
        document.getElementById("tick").style.display = "none";
        document.getElementById("cbx-12").checked = false;
        
    }
}

function showPass() {
    passShowed = 1-passShowed;
    if (passShowed == 1) {
        document.getElementById("passIcon").className = "fa-solid fa-eye icon2";
        document.getElementById("passInput").type = "text";
    } else {
        document.getElementById("passIcon").className = "fa-solid fa-eye-slash icon2";
        document.getElementById("passInput").type = "password";
        

    }
}

// const right_page = document.getElementById("right-page");
function loginCheck() {
    // let user_name = document.querySelector(".login-box1").value;
    let user_name = document.getElementById("usernameInput").value;
    let password = document.getElementById("passInput").value;

    let error_msg = document.getElementById("error-msg");
    // error_msg.id = "error-msg";

    if(user_name === "" && password == ""){
        error_msg.innerHTML = "* Không được để trống tên đăng nhập và mật khẩu";
        // right_page.appendChild(error_msg);
        return;
    }

    if(user_name === ""){
        error_msg.innerHTML = "* Không được để trống tên đăng nhập";
        // right_page.appendChild(error_msg);
        return;
    }

    if(password === ""){
        error_msg.innerHTML = "* Không được để trống mật khẩu";
        // right_page.appendChild(error_msg);
        return;
    }

    if (user_name != USER || password != PASSWORD){
        error_msg.innerHTML = "* Sai tên đăng nhập hoặc mật khẩu!";
        // right_page.appendChild(error_msg);
        return;
    }

    if (user_name == USER && password == PASSWORD) {
        const filePath = '../2.homepage/homepage.html'; // Replace this with the desired file path
        window.location.href = filePath;
    }
}