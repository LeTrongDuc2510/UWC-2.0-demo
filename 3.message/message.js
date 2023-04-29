let duc_flag = false;
let duc_msg = [
                    ["T2 23:51", "center"],
                    ["Mai có đi học không", "left"],
                    ["Có chứ", "right"],
                    ["Trưa ăn chung nhe", "left"],
                    ["Okee", "right"],
                    ["Oke", "left"],
                    ["Ngủ ngon", "left"],
                    ["10:53", "center"],
                    ["Trưa nay ăn gì á", "left"],
                    ["Foodcourt B4 ha", "right"],
                    [":))", "right"],
                    [":)", "left"],
                    ["Hadilao đi", "left"],
                    ["Tui bao", "left"],
];

let tuan_msg = [
                    ["T2 00:00", "center"],
                    ["Đánh cờ vua hong", "left"],
                    ["Gửi link đi", "right"],
                    ["https://www.facebook.com/khoituan65", "left"],
                    ["Link gì đấy :)))))", "right"],
                    ["Link người đẹp trai", "left"],
                    ["Thôi đi code btl SE", "right"],
                    ["T3 03:00", "center"],
                    ["Ngủ đi :)))))", "right"],
                    ["Sáng đi đánh cầu", "right"],
                    ["Đau bụng", "left"],
                    ["Sủi quài :))))))", "right"],
];

let khanh_msg = [
                    ["T3 01:00", "center"],
                    ["Sao chưa ngủ", "left"],
                    ["Code ít thôi", "left"],
                    [":))))", "left"],
                    ["Code gì :)))))", "right"],
                    ["Làm cho xong btl SE nè", "right"],
                    ["Gánh Trí còng lưng", "right"],
];

let tri_msg = [
                    ["T3 11:33", "center"],
                    ["Code phần tin nhắn chưa", "right"],
                    ["Lâu quá", "right"],
                    ["T4 5:43", "center"],
                    ["seen", "left"],
                    ["T4 10:27", "center"],
                    ["Làm lẹ đi", "right"],
                    ["Kick giờ", "right"],
                    ["😡", "right"],
                    ["10:53", "center"],
                    ["Làm giùm đi", "left"],
                    ["Lười quó", "left"],
                    ["Okee để Dũng làm cho", "right"],
                    ["Dễ thương z", "left"],
];

let amee_msg = [
                    ["1 tháng trước", "center"],
                    ["Sao hôm nay lại cứ ngẩn ngơ thế này", "left"],
                    ["Sao mà bây giờ đây vũ trụ em chỉ thấy anh thôi đấy", "left"],
                    ["Bắt đền đi trả lại tâm trí đây", "left"],
                    ["Meo meo meo meo trả lại tâm trí tôi đây", "left"],
                    ["???", "right"],
                    ["Cứ như mèo con tắm nắng trong khu vườn nhà", "left"],
                    ["Rất trong lành có ong lòng em có anh", "left"],
                    ["Mới chỉ được gặp anh mỗi lúc ban chiều là ưng", "left"],
                    ["Quá chừng lòng em cứ tưng tứng tưng tưng", "left"],
                    ["Mới đây", "center"],
                    ["Meo meo meo meo...", "left"],
]

let tindang_msg = [ 
                    ["Mới đây", "center"],
                    ["Trả lại tâm trí toi đaayy...", "left"],
]

let hieuthuhai_msg = [
                    ["17 tháng 11, 2022", "center"],
                    ["Hãy ở lại với anh thêm một ngày nữa thôi", "left"],
                    ["Vì anh không muốn phải ngủ một mình đêm nay đâu", "left"],
                    ["Bên ngoài và uống say hay là ta nằm đây cả đêm", "left"],
                    ["Chỉ là anh không muốn phải ngủ một mình đêm nay", "left"],
                    ["???", "right"],
                    ["Yeah yeah", "left"],
                    ["Baby nói cho anh nghe em hãy nói cho anh nghe những điều mà", "left"],
]

let thimau_msg = [
                    ["17 tháng 11, 2022", "center"],
                    ["Này thầy tiểu ơi", "left"],
                    ["Em là Thị Mầu", "left"],
                    ["Em không biết đâu", "left"],
                    ["Em cứ bắt đền", "left"],
                    ["Gọi mẹ thưa cha", "left"],
                    ["Ăn vạ cả làng", "left"],
                    ["Cho em lấy chàng", "left"],
                    ["Tình tang tang tình tình tang", "left"],
                    ["Bới làng nước ơi!!!!!!", "right"],
]

let detail_msg = document.querySelector(".detail__msg");
function scroll() {
    detail_msg.scrollTop = detail_msg.scrollHeight;
}

function create_msg (str, position) {
    let new_msg = document.createElement('p');
    new_msg.setAttribute("class", position);
    new_msg.innerHTML = str;

    let msg_element = document.createElement('div');
    msg_element.setAttribute("class", "msg__element");
    msg_element.appendChild(new_msg);

    return msg_element;
}

function send() {
    var msg = document.querySelector(".detail__input").value;

        if (msg == undefined || msg == ""){

        }
        else {
            detail_msg.appendChild(create_msg(msg, "right"));   
            scroll();

            let detail_user_name = document.querySelector(".detail__user--name");
            let ptr = duc_msg;
            if (detail_user_name.innerHTML === "Lê Trọng Đức") {
                ptr = duc_msg;
            }
            else if (detail_user_name.innerHTML === "Khôi Tuấn"){
                ptr = tuan_msg;
            }
            else if (detail_user_name.innerHTML === "Đăng Khánh"){
                ptr = khanh_msg;
            }
            else if (detail_user_name.innerHTML === "Trí Cao Chánh"){
                ptr = tri_msg;
            }
            else if (detail_user_name.innerHTML === "Amee"){
                ptr = amee_msg;
            }
            else if (detail_user_name.innerHTML === "Tín Đặng"){
                ptr = tindang_msg;
            }
            else if (detail_user_name.innerHTML === "Hieuthuhai"){
                ptr = hieuthuhai_msg;
            }
            else if (detail_user_name.innerHTML === "Thị Mầu"){
                ptr = thimau_msg;
            }
            
            // detail_msg.appendChild(create_msg("Now", "center"));   
            ptr.push([msg, "right"]);
        }

        document.querySelector(".detail__input").value = "";
}

document.querySelector(".send-icon").addEventListener(
    "click", async (e) => {
        e.preventDefault();
        send();    
    }
);

document.querySelector('.detail__input').addEventListener(
    'keypress', async (e) => {
    if (e.key === 'Enter') {
        send();
    }
});

function get_msg(messages) {
    detail_msg.innerHTML = "";

    for (let i = 0; i < messages.length; i++) {
        detail_msg.appendChild(create_msg(messages[i][0], messages[i][1]));
    }
}

document.querySelectorAll(".elements").forEach(item => {
    item.addEventListener(
        "click", async (e) => {
            e.preventDefault();
            let avatar = item.getElementsByClassName("elements__avata")[0];
            let detail_user_avatar = document.querySelector(".detail__user--avata");
            detail_user_avatar.src = avatar.src;

            let name = item.getElementsByClassName("elements__name")[0];
            let detail_user_name = document.querySelector(".detail__user--name");
            detail_user_name.innerHTML = name.innerHTML;

            if (name.innerHTML === "Lê Trọng Đức (#JN8484)") {
                get_msg(duc_msg);
            }
            else if (name.innerHTML === "Khôi Tuấn (#JN2334)") {
                get_msg(tuan_msg);
            }
            else if (name.innerHTML === "Đăng Khánh (#CL4731)") {
                get_msg(khanh_msg);
            }
            else if (name.innerHTML === "Chánh Trí (#CL7367)") {
                get_msg(tri_msg);
            }
            else if (name.innerHTML === "Đàm Hưng (#JN4589)") {
                get_msg(amee_msg);
            }
            else if (name.innerHTML === "Hồ Thị Hiền (#CL6363)") {
                get_msg(tindang_msg);
            }
            else if (name.innerHTML === "Hoài Linh (#JN3475)") {
                get_msg(hieuthuhai_msg);
            }
            else if (name.innerHTML === "Trấn Thành (#JN7693)") {
                get_msg(thimau_msg);
            }


            scroll();
        }
    )
})
