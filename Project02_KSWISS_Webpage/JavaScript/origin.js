window.onscroll = function () { fnStickyNav(); };
function fnStickyNav() {
    document.getElementById("nav").style.position = "sticky";
}
function fnFormShow() {
    var myForm = document.getElementById("loginForm");
    myForm.style.display = "block";
    // myForm.classList.add("form_appear");

}
function fnRemove() {
    var disappear = document.getElementById("loginForm");
    disappear.style.display = "none";
}
function fnSearch() {
    var show = document.getElementById("search_modal");
    show.style.display = "block";
}
function fnRemoveSearch() {
    var disappear = document.getElementById("search_modal");
    disappear.style.display = "none";
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
