 function timerScript() {
    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

// let nowDate = new Date();

    timerStart();

    function timerStart() {
        let changeDate = setTimeout(function date() {
            //Тест времени
            // nowDate.setSeconds(nowDate.getSeconds() + 1000);
            let nowDate = new Date();

            seconds.textContent = (59 - nowDate.getSeconds()).toString();
            minutes.textContent = (59 - nowDate.getMinutes()).toString();
            hours.textContent = (23 - nowDate.getHours()).toString();
            days.textContent = (60 - nowDate.getDate()).toString();//Осталось дней. 60 - сегодняя дата
            if (days.textContent < 0) {
                clearTimeout(changeDate);
                seconds.textContent = `0`;
                minutes.textContent = `0`;
                hours.textContent = `0`;
                days.textContent = `0`;

            } else {
                changeDate = setTimeout(date, 900);
            }
        }, 1);
    }
}
export default timerScript;