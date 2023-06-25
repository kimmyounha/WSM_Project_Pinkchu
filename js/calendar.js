window.onload = function () {
    buildCalendar();
}

let nowMonth = new Date();
let today = new Date();
today.setHours(0, 0, 0, 0);

function buildCalendar() {
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);

    let tbody_Calendar = document.querySelector(".Calendar > tbody");
    document.getElementById("calYear").innerText = nowMonth.getFullYear();
    document.getElementById("calMonth").innerText = leftPad(nowMonth.getMonth() + 1);

    while (tbody_Calendar.rows.length > 0) {
        tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
    }

    let nowRow = tbody_Calendar.insertRow();

    for (let j = 0; j < firstDate.getDay(); j++) {
        let nowColumn = nowRow.insertCell();
    }

    for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {
        let nowColumn = nowRow.insertCell();
        let newDIV = document.createElement("p");
        newDIV.innerHTML = leftPad(nowDay.getDate());
        nowColumn.appendChild(newDIV);

        if (nowDay.getFullYear() === 2023 && nowDay.getMonth() === 5 && nowDay.getDate() >= 1 && nowDay.getDate() <= 25) {  // 2023년 6월 1일부터 25일까지
            if (nowDay.getDate() === 1) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_dark2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_rain2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
            } else if (nowDay.getDate() === 2) {
                let imageElement = document.createElement("img");
                imageElement.src = "images/heart_yellow2.png";
                imageElement.alt = "하트";
                imageElement.classList.add("date-image");
                newDIV.appendChild(imageElement);

                // 이미지 위치 조정
                imageElement.style.position = "absolute";
                imageElement.style.left = "0";
            } else if (nowDay.getDate() === 3) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_rain2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_orange2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                let imageElement3 = document.createElement("img");
                imageElement3.src = "images/heart_yellow2.png";
                imageElement3.alt = "하트";
                imageElement3.classList.add("date-image");
                newDIV.appendChild(imageElement3);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
                imageElement3.style.position = "absolute";
                imageElement3.style.left = "34px";
            } else if (nowDay.getDate() === 4) {
                let imageElement = document.createElement("img");
                imageElement.src = "images/heart_rain2.png";
                imageElement.alt = "하트";
                imageElement.classList.add("date-image");
                newDIV.appendChild(imageElement);

                // 이미지 위치 조정
                imageElement.style.position = "absolute";
                imageElement.style.left = "0";
            } else if (nowDay.getDate() === 5) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_orange2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_dark2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                let imageElement3 = document.createElement("img");
                imageElement3.src = "images/heart_rain2.png";
                imageElement3.alt = "하트";
                imageElement3.classList.add("date-image");
                newDIV.appendChild(imageElement3);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
                imageElement3.style.position = "absolute";
                imageElement3.style.left = "34px";
            } else if (nowDay.getDate() === 6) {
                let imageElement = document.createElement("img");
                imageElement.src = "images/heart_yellow2.png";
                imageElement.alt = "하트";
                imageElement.classList.add("date-image");
                newDIV.appendChild(imageElement);

                // 이미지 위치 조정
                imageElement.style.position = "absolute";
                imageElement.style.left = "0";
            } else if (nowDay.getDate() === 7) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_orange2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_rain2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
            } else if (nowDay.getDate() === 8) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_yellow2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_green2.png";
                imageElement2.alt = "하트"
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
            } else if (nowDay.getDate() === 9) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_orange2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_green2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                let imageElement3 = document.createElement("img");
                imageElement3.src = "images/heart_rain2.png";
                imageElement3.alt = "하트";
                imageElement3.classList.add("date-image");
                newDIV.appendChild(imageElement3);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
                imageElement3.style.position = "absolute";
                imageElement3.style.left = "34px";
            } else if (nowDay.getDate() === 10) {
                let imageElement = document.createElement("img");
                imageElement.src = "images/heart_yellow2.png";
                imageElement.alt = "하트";
                imageElement.classList.add("date-image");
                newDIV.appendChild(imageElement);

                // 이미지 위치 조정
                imageElement.style.position = "absolute";
                imageElement.style.left = "0";
            } else if (nowDay.getDate() === 11) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_orange2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_rain2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                let imageElement3 = document.createElement("img");
                imageElement3.src = "images/heart_green2.png";
                imageElement3.alt = "하트";
                imageElement3.classList.add("date-image");
                newDIV.appendChild(imageElement3);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
                imageElement3.style.position = "absolute";
                imageElement3.style.left = "34px";
            } else if (nowDay.getDate() === 12) {
                let imageElement = document.createElement("img");
                imageElement.src = "images/heart_green2.png";
                imageElement.alt = "하트";
                imageElement.classList.add("date-image");
                newDIV.appendChild(imageElement);

                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_rain2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);
                // 이미지 위치 조정
                imageElement.style.position = "absolute";
                imageElement.style.left = "0";
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "17px";


            } else if (nowDay.getDate() === 13) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_orange2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_dark2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
            } else if (nowDay.getDate() === 14) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_blue2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_rain2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";

            } else if (nowDay.getDate() === 15) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_rain2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_pink2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                let imageElement3 = document.createElement("img");
                imageElement3.src = "images/heart_yellow2.png";
                imageElement3.alt = "하트";
                imageElement3.classList.add("date-image");
                newDIV.appendChild(imageElement3);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
                imageElement3.style.position = "absolute";
                imageElement3.style.left = "34px";
            } else if (nowDay.getDate() === 16) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_yellow2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_rain2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
            } else if (nowDay.getDate() === 17) {
                let imageElement = document.createElement("img");
                imageElement.src = "images/heart_green2.png";
                imageElement.alt = "하트";
                imageElement.classList.add("date-image");
                newDIV.appendChild(imageElement);

                // 이미지 위치 조정
                imageElement.style.position = "absolute";
                imageElement.style.left = "0";
            } else if (nowDay.getDate() === 18) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_pink2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_dark2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                let imageElement3 = document.createElement("img");
                imageElement2.src = "images/heart_yellow2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
            } else if (nowDay.getDate() === 19) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_yellow2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_rain2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
            } else if (nowDay.getDate() === 20) {
                let imageElement = document.createElement("img");
                imageElement.src = "images/heart_green2.png";
                imageElement.alt = "하트";
                imageElement.classList.add("date-image");
                newDIV.appendChild(imageElement);


                // 이미지 위치 조정
                imageElement.style.position = "absolute";
                imageElement.style.left = "0";
            } else if (nowDay.getDate() === 21) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_rain2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_blue2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                let imageElement3 = document.createElement("img");
                imageElement3.src = "images/heart_yellow2.png";
                imageElement3.alt = "하트";
                imageElement3.classList.add("date-image");
                newDIV.appendChild(imageElement3);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
                imageElement3.style.position = "absolute";
                imageElement3.style.left = "34px";
            } else if (nowDay.getDate() === 22) {
                let imageElement = document.createElement("img");
                imageElement.src = "images/heart_pink2.png";
                imageElement.alt = "하트";
                imageElement.classList.add("date-image");
                newDIV.appendChild(imageElement);

                // 이미지 위치 조정
                imageElement.style.position = "absolute";
                imageElement.style.left = "0";
            } else if (nowDay.getDate() === 23) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_rain2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_yellow2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                let imageElement3 = document.createElement("img");
                imageElement3.src = "images/heart_green2.png";
                imageElement3.alt = "하트";
                imageElement3.classList.add("date-image");
                newDIV.appendChild(imageElement3);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
                imageElement3.style.position = "absolute";
                imageElement3.style.left = "34px";
            } else if (nowDay.getDate() === 24) {
                let imageElement = document.createElement("img");
                imageElement.src = "images/heart_rain2.png";
                imageElement.alt = "하트";
                imageElement.classList.add("date-image");
                newDIV.appendChild(imageElement);

                // 이미지 위치 조정
                imageElement.style.position = "absolute";
                imageElement.style.left = "0";
            } else if (nowDay.getDate() === 25) {
                let imageElement1 = document.createElement("img");
                imageElement1.src = "images/heart_dark2.png";
                imageElement1.alt = "하트";
                imageElement1.classList.add("date-image");
                newDIV.appendChild(imageElement1);

                let imageElement2 = document.createElement("img");
                imageElement2.src = "images/heart_rain2.png";
                imageElement2.alt = "하트";
                imageElement2.classList.add("date-image");
                newDIV.appendChild(imageElement2);

                // 이미지 위치 조정
                imageElement1.style.position = "absolute";
                imageElement1.style.left = "0";
                imageElement2.style.position = "absolute";
                imageElement2.style.left = "17px";
            }
            else {
                let imageElement = document.createElement("img");
                imageElement.src = "images/heart_yellow2.png";
                imageElement.alt = "하트";
                imageElement.classList.add("date-image");
                newDIV.appendChild(imageElement);

                // 이미지 위치 조정
                imageElement.style.position = "absolute";
                imageElement.style.left = "0";
            }
        }

        if (nowDay.getDay() == 6) {
            nowRow = tbody_Calendar.insertRow();
        }

        if (nowDay < today) {
            newDIV.className = "pastDay";
        } else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) {
            newDIV.className = "today";
            newDIV.onclick = function () { choiceDate(this); }
        } else {
            newDIV.className = "futureDay";
            newDIV.onclick = function () { choiceDate(this); }
        }
    }
}

function choiceDate(newDIV) {
    if (document.getElementsByClassName("choiceDay")[0]) {
        document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay");
    }
    newDIV.classList.add("choiceDay");
}

function prevCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());
    buildCalendar();
}

function nextCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());
    buildCalendar();
}

function leftPad(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}