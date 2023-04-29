function closeModal() {
    let modal = ddocument.getElementById("addEmModal");
    modal.style.display = "none";    
}

let countTask = 0;

function gotoLeft() {
    const tmp = document.getElementById("task-wrapper");
    countTask--;
    
    if (countTask == -1) {
        tmp.scrollTo(265 * 5,0);
        countTask = 4;
    }
    tmp.scrollTo(countTask * 265,0);
}

function gotoRight() {
    const tmp = document.getElementById("task-wrapper");
    countTask++;
    
    if (countTask == 5) {
        tmp.scrollTo(0,0);
        countTask = 0;
    }
    tmp.scrollTo(countTask * 265,0);
}


function openModaled(x) {
    const addEmModal = document.getElementById("addEmModal");
    addEmModal.style.display = "block";

    let s1;
    if (x==0) {
        s1="Cao Chánh Trí";
        document.getElementById("circleFace").src = "./em-face-image/chanhtri.jpg";
    }
    if (x==1) {
        s1="Trần Khôi Tuấn";
        document.getElementById("circleFace").src = "./em-face-image/khoituan.jpg";
    }
    if (x==2) {
        s1="Mai Tôn Đăng Khánh";
        document.getElementById("circleFace").src = "./em-face-image/dangkhanh.jpg";

    }
    if (x==3) {
        s1="Lê Trọng Đức";
        document.getElementById("circleFace").src = "./em-face-image/letrongduc.jpg";
    }
    if (x==4) {
        s1="Hồ Thị Hiền";
        document.getElementById("circleFace").src = "./em-face-image/hienho.jpg";

    }
    if (x==5) {
        s1="Đàm Vĩnh Hưng";
        document.getElementById("circleFace").src = "./em-face-image/damhung.jpg";
    }
    if (x==6) {
        s1="Trịnh Phương Tuấn";
        document.getElementById("circleFace").src = "./em-face-image/jack.jpeg";

    }
    if (x==7) {
        s1="Võ Hoài Linh";
        document.getElementById("circleFace").src = "./em-face-image/hoailinh.jpeg";

    }
    if (x==8) {
        s1="Nguyễn Hòa Bình";
        document.getElementById("circleFace").src = "./em-face-image/sharkbinh.jpg";

    }
    if (x==9) {
        s1="Huỳnh Trấn Thành";
        document.getElementById("circleFace").src = "./em-face-image/tranthanh.jpg";
    }

    document.getElementById("nameInfo").innerHTML = s1;


    let s2;
    if (x==0) s2="#CL7367";
    if (x==1) s2="#JN2334";
    if (x==2) s2="#CL4731";
    if (x==3) s2="#JN8484";
    if (x==4) s2="#CL6363";
    if (x==5) s2="#JN4589";
    if (x==6) s2="#CL9797";
    if (x==7) s2="#JN3475";
    if (x==8) s2="#CL1294";
    if (x==9) s2="#JN7693";

    document.getElementById("idInfo").innerHTML = '<span class="bold-text">Mã số nhân viên:</span> &nbsp' + s2 + '.';


    let s3;
    if (x%2 ==0) s3 = "Nhân viên lái xe."; else s3 = "Nhân viên quét dọn.";
    document.getElementById("roleInfo").innerHTML = '<span class="bold-text">Chức vụ:</span> &nbsp' + s3;

    document.getElementById("inputEmail").value = convertVietnameseToEnglish(convertVietnameseToEnglish(s1)) + '@gmail.com';
    document.getElementById("inputPhone").value = '0' + generateRandomNumber(convertVietnameseToEnglish(s1));

    if (x%2==0) {
        document.getElementById("bl-txtAddr").style.display = "none";
        document.getElementById("inputAddr").style.display = "none";
        document.getElementsByClassName("icon2")[0].style.display = "none";
        
        const rot = document.getElementsByClassName("task-route");
        for (let i=0; i<rot.length; i++) {
            rot[i].innerHTML = "MCP1 → MCP2 → MCP3.";
        }
    } else {
         document.getElementById("bl-txtAddr").style.display = "block";
        document.getElementById("inputAddr").style.display = "block";
        document.getElementsByClassName("icon2")[0].style.display = "block";
        const rot = document.getElementsByClassName("task-route");
        for (let i=0; i<rot.length; i++) {
            rot[i].innerHTML = "MCP1.";
        }
    }

    let s4;
    if (x==1) s4="MCP3 (520A Thành Thái, Phường 12, Quận 10, TPHCM).";
    if (x==3) s4="MCP2 (120 Hồng Bàng, Phường 12, Quận 5, TPHCM).";
    if (x==5) s4="MCP4 (16A/A1 Lê Hồng Phong, Phường 12, Quận 10, TPHCM).";
    if (x==7) s4="MCP1 (497 Hòa Hảo, Phường 7, Quận 10, TPHCM).";
    if (x==9) s4="MCP5 (279 Nguyễn Tri Phương, Phường 5, Quận 10, TPHCM).";

    document.getElementById("inputAddr").value = s4;

    if (x%2==0) {
        document.getElementById("bl-txtSche").style.transform = "translateY(-25px)";
        document.getElementById("task-wrapper").style.transform = "translateY(-20px)";
        const trans1 = document.getElementsByClassName("trans1");
        for (let i=0 ; i<trans1.length; i++) {
            trans1[i].style.transform = "translateY(40px)";
        }

        const trans2 = document.getElementsByClassName("trans2");
        for (let i=0 ; i<trans2.length; i++) {
            trans2[i].style.transform = "translateY(20px)";
        }
        trans2[4].style.transform = "translateY(8px)";
    
    } else {
        document.getElementById("bl-txtSche").style.transform = "translateY(0px)";
        document.getElementById("task-wrapper").style.transform = "translateY(0px)";
        const trans1 = document.getElementsByClassName("trans1");
        for (let i=0 ; i<trans1.length; i++) {
            trans1[i].style.transform = "translateY(0px)";
        }

        const trans2 = document.getElementsByClassName("trans2");
        for (let i=0 ; i<trans2.length; i++) {
            trans2[i].style.transform = "translateY(0px)";
        }

        trans2[4].style.transform = "translateY(-8px)";
    }

}

function closeModaled() {
    const addEmModal = document.getElementById("addEmModal");
    addEmModal.style.display = "none";
}

function hashString(str) {
    // This is a simple hash function that takes a string as input and returns an integer
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }
  
  function formatNumber(num) {
    // This function takes an integer and returns a string with leading zeros
    return ('000000000' + num).slice(-9);
  }
  
  function generateRandomNumber(key) {
    // This function takes a string as input and returns a random 9-digit number string
    const hash = hashString(key);
    const randomNumber = hash % 1000000000;
    return formatNumber(randomNumber);
  }

function convertVietnameseToEnglish(str) {
    // Vietnamese diacritic marks (accents) mapping to English letters
    const diacriticMarks = {
      'à': 'a',
      'á': 'a',
      'ả': 'a',
      'ã': 'a',
      'ạ': 'a',
      'ă': 'a',
      'ằ': 'a',
      'ắ': 'a',
      'ẳ': 'a',
      'ẵ': 'a',
      'ặ': 'a',
      'â': 'a',
      'ầ': 'a',
      'ấ': 'a',
      'ẩ': 'a',
      'ẫ': 'a',
      'ậ': 'a',
      'đ': 'd',
      'è': 'e',
      'é': 'e',
      'ẻ': 'e',
      'ẽ': 'e',
      'ẹ': 'e',
      'ê': 'e',
      'ề': 'e',
      'ế': 'e',
      'ể': 'e',
      'ễ': 'e',
      'ệ': 'e',
      'ì': 'i',
      'í': 'i',
      'ỉ': 'i',
      'ĩ': 'i',
      'ị': 'i',
      'ò': 'o',
      'ó': 'o',
      'ỏ': 'o',
      'õ': 'o',
      'ọ': 'o',
      'ô': 'o',
      'ồ': 'o',
      'ố': 'o',
      'ổ': 'o',
      'ỗ': 'o',
      'ộ': 'o',
      'ơ': 'o',
      'ờ': 'o',
      'ớ': 'o',
      'ở': 'o',
      'ỡ': 'o',
      'ợ': 'o',
      'ù': 'u',
      'ú': 'u',
      'ủ': 'u',
      'ũ': 'u',
      'ụ': 'u',
      'ư': 'u',
      'ừ': 'u',
      'ứ': 'u',
      'ử': 'u',
      'ữ': 'u',
      'ự': 'u',
      'ỳ': 'y',
      'ý': 'y',
      'ỷ': 'y',
      'ỹ': 'y',
      'ỵ': 'y'
    };
  
    // Remove spaces between words
    str = str.replace(/\s+/g, '');
  
    // Convert Vietnamese diacritic marks to English letters
    str = str.replace(/[^\u0000-\u007E]/g, (char) => {
      return diacriticMarks[char] || char;
    });
  
    // Convert the string to lowercase
    str = str.toLowerCase();
  
    return str;
  }