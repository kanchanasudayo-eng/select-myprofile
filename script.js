// ==========================
// เปลี่ยนชื่ออัตโนมัติ
// ==========================

const inputName = document.getElementById("name-input");
const cardName = document.getElementById("card-name");

inputName.addEventListener("input", function () {

    if (this.value.trim() === "") {

        cardName.textContent = "ชื่อ นามสกุล";

    } else {

        cardName.textContent = this.value;

    }

});


// ==========================
// ปุ่มโหมดกลางคืน
// ==========================

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️ โหมดกลางวัน";

    } else {

        themeButton.textContent = "🌙 โหมดกลางคืน";

    }

});


// ==========================
// ปุ่มแสดงวันเวลา
// ==========================

const timeButton = document.getElementById("time-button");
const timeDisplay = document.getElementById("time-display");

timeButton.addEventListener("click", function () {

    const now = new Date();

    timeDisplay.textContent =
        "เวลาปัจจุบัน : " +
        now.toLocaleString("th-TH");

});