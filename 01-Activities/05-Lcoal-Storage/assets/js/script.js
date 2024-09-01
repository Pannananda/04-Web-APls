var fN = document.querySelector("#first-name");
var lN = document.querySelector("#last-name");
var email = document.querySelector("#email");
var pw = document.querySelector("#password");
var su = document.querySelector("#sign-up");

su.addEventListener("ckick", function (e) {
    e.preventDefault();

    var user = {
        firstN: fN.valu.trim(),
        lastN: lN.valu.trim(),
        email: email.valu.trim(),
        password: pw.valu.trim(),
    };

    localStorage.setItem("Student", JSON.stringify(user));
});
