"use strict";
{
    const forms = document.querySelectorAll("form");
    const messageForUser = document.createElement("div");
    messageForUser.classList.add("status");

    function postData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            messageForUser.textContent = "Загрузка...";
            fetch(`server.php`, {
                method: `POST`,
                body: formData,
                // headers:{
                //     'Content-type': 'application/json; charset=UTF-8'
                // },
            }).then(request=>request.text())
            .then(request => {
                    console.log(request);
                    if (request.status === 200) {
                        messageForUser.textContent = "Спасибо, мы свяжемся с вами";
                        console.log("Ответ сервер:" + `Статус${request.status}`);
                    } else {
                        messageForUser.textContent = "Попробуйте позже";
                    }
                })
                .catch(()=>{messageForUser.textContent = "Error"})
        })
    }

    forms.forEach((item) => {
        item.append(messageForUser);
        postData(item);
    })
}