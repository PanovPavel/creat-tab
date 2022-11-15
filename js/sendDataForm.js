{
    const forms = document.querySelectorAll("form");
    const messageForUser = document.createElement("div");
    messageForUser.classList.add("status");

    function postData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const request = new XMLHttpRequest();
            request.open(`POST`, 'server.php', true);
            const formData = new FormData(form);
            request.send(formData);
            (request.readyState == 1) ? (messageForUser.textContent = "Загрузка...") : console.log("Не верный код");
            request.addEventListener("load", () => {
                console.log("Ответ сервер:" + request.response + `Статус${request.status}`);
                if (request.status === 200) {
                    messageForUser.textContent = "Спасибо, мы свяжемся с вами";
                } else {
                    messageForUser.textContent = "Попробуйте позже";
                }
            })
        })
    }

    forms.forEach((item) => {
        item.append(messageForUser);
        postData(item);
    })
}