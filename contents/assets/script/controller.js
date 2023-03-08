// Functions
var get_window_height = window.innerHeight;
function MessageBoxHeightResizer() {
    document.getElementById("message_box_inbox_client_data").style.height = get_window_height + "px";
    document.getElementById("message_box_inbox_client_data_message_chat").style.height =
        (get_window_height - 115) + "px";
}

/* __START WINDOW ONLOAD LISTENER */
window.onload = function () {
    //IsBrowserAccessable();
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
    MessageBoxHeightResizer();
    document.getElementById("message_box_inbox_client_data_item").style.height = get_window_height + "px";
    document.getElementById("message_box_inbox_client_data_message_controller").style.height = get_window_height + "px";
};
/* __END WINDOW ONLOAD LISTENER */

/* __START MESSAGE BOX WINDOW RESIZER */
window.addEventListener("resize", function () {
    MessageBoxHeightResizer();
    document.getElementById("message_box_inbox_client_data").style.height = window.innerHeight + "px";
    document.getElementById("message_box_inbox_client_data_message_chat").style.height = (window.innerHeight - 115) + "px";
    document.getElementById("message_box_inbox_client_data_item").style.height = window.innerHeight + "px";
    document.getElementById("message_box_inbox_client_data_message_controller").style.height = window.innerHeight + "px";

});
/* __END MESSAGE BOX WINDOW RESIZER */

//window.addEventListener("contextmenu", function () {
//    return false;
//});
//window.oncontextmenu = function () {
//    return false;
//}

//SetWindowTitle = (title_value) =>{
//    if (document.title == '' || document.title == null) {
//        return 0;
//    } else {
//        document.title = title_value;
//    }
//}
//IsBrowserAccessable = () => {
//    if (window.navigator.appVersion.search('Chrome') == '-1') {
//        document.querySelectorAll("*").forEach((valuedelete) => { valuedelete.remove(); });
//        document.body.innerText = "Sorry! ToBeech Doesn\'t support of your browser..";
//        SetWindowTitle("Ooops! ToBeech Doesn\'t support of your browser..");
//    }
//}

