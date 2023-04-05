// const msg_element = document.querySelector('.msg_element')




document.querySelector(".send-icon").addEventListener(
    "click", async (e) => {
        e.preventDefault();
        var msg = document.querySelector(".detail__input").value;

        if (msg == undefined || msg == ""){

        }
        else {
            let new_msg = document.createElement('p');

            new_msg.setAttribute("class", "right");
            new_msg.innerHTML = msg;

            let msg_element = document.querySelector(".msg__element");
            msg_element.appendChild(new_msg);   
        }
    }
);