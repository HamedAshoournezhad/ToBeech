function Show_Register_Form_Page() {
    document.getElementById("dd_form_register").style.display = "block";
    document.getElementById("dd_form_login").style.display = "none";
    document.getElementById("dd_form_forget_password").style.display = "none";
}
function Show_Login_Form_Page() {
    document.getElementById("dd_form_login").style.display = "block";
    document.getElementById("dd_form_register").style.display = "none";
    document.getElementById("dd_form_forget_password").style.display = "none";
}
function Show_Forget_Password_Form_Page() {
    document.getElementById("dd_form_login").style.display = "none";
    document.getElementById("dd_form_register").style.display = "none";
    document.getElementById("dd_form_forget_password").style.display = "block";
}