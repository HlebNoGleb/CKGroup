"use strict";
var burger = document.querySelector(".burger"),
    menu = document.querySelector(".menu"),
    application = document.querySelectorAll(".application"),
    body = document.querySelector("body"),
    modal = document.querySelector(".modal"),
    modalClose = document.querySelector(".modal__close"),
    inputsPhone = document.querySelectorAll("[type='tel']");

application.forEach((function (e) {
    e.addEventListener("click", (function () {
        modal.classList.toggle("active"), body.classList.toggle("isLock")
    }))
}))
    if (modalClose){
        modalClose.addEventListener("click", (function () {
            modal.classList.toggle("active"), body.classList.toggle("isLock")
        })), modalClose.addEventListener("click", (function () {
            menu.classList.toggle("isOpen"), burger.classList.toggle("isOpen")
        }))
    }
    
    inputsPhone.forEach((function (e) {
    window.intlTelInput(e, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.1.1/build/js/utils.js",
        initialCountry: "ru",
        useFullscreenPopup: !1,
        separateDialCode: !0
    })
})), burger.addEventListener("click", (function () {
    menu.classList.toggle("isOpen"), burger.classList.toggle("isOpen")
}));
var tabBtns = document.querySelectorAll(".services .tabs button"),
    tabContent = document.querySelectorAll(".services .tabs-content");
tabBtns.forEach((function (e, t) {
    e.addEventListener("click", (function () {
        tabBtns.forEach((function (e) {
            e.classList.remove("active")
        })), e.classList.add("active"), tabContent.forEach((function (e, n) {
            e.classList.remove("active"), t === n && e.classList.add("active")
        }))
    }))
})), AOS.init({
    duration: 1200
});
//# sourceMappingURL=main.js.map