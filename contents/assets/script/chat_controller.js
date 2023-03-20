/*
    Author: ToBeech Team
    IsTemplate: false
    Date: 2023/10/2
    ID: 29338127
    IsSecure: True
    Website: ToBeech.com
 */
let menu_list_x983nx83 = 1; // User Message Box Variable
let fullscreen_xmn3nx836 = 1; // Fullscreen Message Box Variable
var mbicdmcs_cj38x2nmx = $(
  ".message_box_inbox_client_data_message_chat_server"
);
var Isopen_view_profile_submenus = false;

// Server Message Controller Scrollbar In Message Box
function setMessageBoxScrollController() {
  var get_message_box_scrollheight = document
    .getElementById("message_box_inbox_client_data_message_chat")
    .scrollHeight.toString();
  document
    .getElementById("message_box_inbox_client_data_message_chat")
    .scrollTo({
      top: get_message_box_scrollheight,
      left: 0,
      behavior: "smooth"
    });
}

class chat_controller {
  constructor() {
    console.log("Service started!");
  }
  // Fullscreen Function
  fullScreen() {
    // Fullscreen Controller For Message Box
    $("#fullScreen").click(function () {
      if (fullscreen_xmn3nx836 == 0) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          fullscreen_xmn3nx836 = 1;
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
          fullscreen_xmn3nx836 = 1;
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
          fullscreen_xmn3nx836 = 1;
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
          fullscreen_xmn3nx836 = 1;
        } else {
          document.documentElement.requestFullscreen();
          fullscreen_xmn3nx836 = 1;
        }
      } else {
        if (
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.msFullscreenEnabled
        ) {
          if (document.body.requestFullscreen) {
            document.body.requestFullscreen();
            fullscreen_xmn3nx836 = 0;
          } else if (document.body.webkitRequestFullscreen) {
            document.body.webkitRequestFullscreen();
            fullscreen_xmn3nx836 = 0;
          } else if (document.body.msRequestFullscreen) {
            document.body.msRequestFullscreen();
            fullscreen_xmn3nx836 = 0;
          } else {
            document.body.requestFullscreen();
            fullscreen_xmn3nx836 = 0;
          }
        }
      }
    });
  }
  // Emoji Inbox
  emojiBox() {
    $("#message_inbox_emoji_box_for_input").click(function () {
      $(".message_inbox_emoji_box_for_input_list").css("display", "flex");
      $("#close_emoji_box").css({
        display: "inherit"
      });
      if ($(".popup_window").css("display", "inherit")) {
        $(".popup_window").css("display", "none");
      }
      menu_list_x983nx83 = 1;
      $("#more_message_box_navbar_top_list").css({
        visibility: "hidden",
        "z-index": "-99",
        "animation-name": "unset",
        opacity: "0"
      });
    });
    $("#close_emoji_box").click(function () {
      $(".message_inbox_emoji_box_for_input_list").css("display", "none");
    });
  }
  // Server Message Controller Without Enter Key
  setMessageBoxDataValueControllerWithoutKey() {
    $("#message_box_inbox_client_data_message_form_paragraph_data").click(
      function (event) {
        if (
          mbicdmcs_cj38x2nmx[mbicdmcs_cj38x2nmx.length - 1]["classList"][
            "value"
          ] == "message_box_inbox_client_data_message_chat_server" &&
          $("#message_box_inbox_client_data_message_form_box_input").val() != ""
        ) {
          var paragraph_cn289x83 = document.createElement("span");
          paragraph_cn289x83.innerText = $(
            "#message_box_inbox_client_data_message_form_box_input"
          ).val();
          if (
            document
              .getElementById(
                "message_box_inbox_client_data_message_form_box_input"
              )
              .value.trimStart()
          ) {
            mbicdmcs_cj38x2nmx.append(paragraph_cn289x83);
            $("#message_box_inbox_client_data_message_form_box_input").val(
              null
            );
            setMessageBoxScrollController();
          }
        }
      }
    );
    $("#send_message_to_server_address_from_message_box").click(function (
      event
    ) {
      if (
        mbicdmcs_cj38x2nmx[mbicdmcs_cj38x2nmx.length - 1]["classList"][
          "value"
        ] == "message_box_inbox_client_data_message_chat_server" &&
        $("#message_box_inbox_client_data_message_form_box_input").val() != ""
      ) {
        var paragraph_cn289x83 = document.createElement("span");
        paragraph_cn289x83.innerText = $(
          "#message_box_inbox_client_data_message_form_box_input"
        ).val();
        if (
          document
            .getElementById(
              "message_box_inbox_client_data_message_form_box_input"
            )
            .value.trimStart()
        ) {
          mbicdmcs_cj38x2nmx.append(paragraph_cn289x83);
          $("#message_box_inbox_client_data_message_form_box_input").val(null);
          setMessageBoxScrollController();
        }
      }
    });
  }
  // Server Message Controller With Enter Key
  setMessageBoxDataValueControllerWithKey() {
    $("#message_box_inbox_client_data_message_form_box_input").bind(
      "keyup",
      function (event) {
        if (event.keyCode == 13) {
          event.preventDefault();
          if (
            mbicdmcs_cj38x2nmx[mbicdmcs_cj38x2nmx.length - 1]["classList"][
              "value"
            ] == "message_box_inbox_client_data_message_chat_server"
          ) {
              var paragraph_cn289x83 = document.createElement("span");
              paragraph_cn289x83.innerText = $(
                "#message_box_inbox_client_data_message_form_box_input"
              ).val();
              if (
                document
                  .getElementById(
                    "message_box_inbox_client_data_message_form_box_input"
                  )
                  .value.trimStart()
              ) {
                mbicdmcs_cj38x2nmx.append(paragraph_cn289x83);
                $("#message_box_inbox_client_data_message_form_box_input").val(
                  null
                );
                setMessageBoxScrollController();
              }
          }
        }
      }
    );
  }
  // Upload AccessBox Controller In MessageBox
  uploadFileFromMessageBox() {
    $("#upload_file_xn38xn3").click(function () {
      var upload_file_xn38xn3_input = document.createElement("input");
      upload_file_xn38xn3_input.type = "file";
      upload_file_xn38xn3_input.name = "upload_file_xn38xn3_file";
      document.title = "Select an file...";
      upload_file_xn38xn3_input.click();
    });
  }
  // QR Code Controller In MessageBox
  qrCodeWindowDataValue() {
    $("#user_qr_code_id").click(function () {
      // Open QR Code Popup Window
      $("#qr_popup_window").css("display", "inherit");
      if ($(".message_inbox_emoji_box_for_input_list").css("display", "flex")) {
        $(".message_inbox_emoji_box_for_input_list").css("display", "none");
      }
      $("#delete_message").css("display", "none");
      $("#view_profile_window").css("display", "none");
      Isopen_view_profile_submenus = false;
      menu_list_x983nx83 = 1;
      $("#more_message_box_navbar_top_list").css({
        visibility: "hidden",
        "z-index": "-99",
        "animation-name": "unset",
        opacity: "0"
      });
    });
    $("#close_popup_window").click(function () {
      // Close QR Code Popup Window
      $("#qr_popup_window").css("display", "none");
    });
  }
  showUserProfile() {
    $("#open_view_profile_submenus").click(function () {
      if (Isopen_view_profile_submenus == false) {
        $("#view_profile_menus").css({
          display: "flex",
          "flex-direction": "column",
          "flex-wrap": "nowrap",
          "align-items": "flex-start",
          "align-content": "flex-start",
          "z-index": "99"
        });
        $("#delete_message").css("display", "none");
        Isopen_view_profile_submenus = true;
      } else {
        $("#view_profile_menus").css("display", "none");
        Isopen_view_profile_submenus = false;
      }
    });
    // Show Delete Message Box
    $("#delete_message_box_xj2x2").click(function () {
      $("#delete_message").css("display", "inherit");
      $("#view_profile_window").css("display", "none");
      menu_list_x983nx83 = 1;
      $("#more_message_box_navbar_top_list").css({
        visibility: "hidden",
        "z-index": "-99",
        "animation-name": "unset",
        opacity: "0"
      });
      $("#qr_popup_window").css("display", "none");
      $(".message_inbox_emoji_box_for_input_list").css("display", "none");
    });
    $(".message_box_inbox_delete_all_data").click(function () {
      $("#delete_message").css("display", "inherit");
      $("#view_profile_window").css("display", "none");
      menu_list_x983nx83 = 1;
      $("#more_message_box_navbar_top_list").css({
        visibility: "hidden",
        "z-index": "-99",
        "animation-name": "unset",
        opacity: "0"
      });
      $("#qr_popup_window").css("display", "none");
      $(".message_inbox_emoji_box_for_input_list").css("display", "none");
    });
    // Show Clear Message Box
    $("#clear_message_box_history_xm28x3b28").click(function () {
      $("#delete_message").css("display", "inherit");
      $("#delete_message > button:nth-child(3)").css("display", "none");
      $("#delete_message > button:nth-child(4)").css("display", "initial");
      $("#view_profile_window").css("display", "none");
      menu_list_x983nx83 = 1;
      $("#more_message_box_navbar_top_list").css({
        visibility: "hidden",
        "z-index": "-99",
        "animation-name": "unset",
        opacity: "0"
      });
      $("#qr_popup_window").css("display", "none");
      $(".message_inbox_emoji_box_for_input_list").css("display", "none");
    });
    // Message Box Client Profile
    $(".message_box_navbar_top_client_profile").click(function () {
      $("#view_profile_window").css("display", "inherit");
      menu_list_x983nx83 = 1;
      $("#more_message_box_navbar_top_list").css({
        visibility: "hidden",
        "z-index": "-99",
        "animation-name": "unset",
        opacity: "0"
      });
      $("#qr_popup_window").css("display", "none");
      $(".message_inbox_emoji_box_for_input_list").css("display", "none");
    });
    // Show User Profile
    $("#view_profile_cn287x63").click(function () {
      $("#delete_message").css("display", "none");
      $("#view_profile_window").css("display", "inherit");
      menu_list_x983nx83 = 1;
      $("#more_message_box_navbar_top_list").css({
        visibility: "hidden",
        "z-index": "-99",
        "animation-name": "unset",
        opacity: "0"
      });
      $("#qr_popup_window").css("display", "none");
      $(".message_inbox_emoji_box_for_input_list").css("display", "none");
    });
    // Message Box Client Username And Status
    $(".message_box_navbar_top_client_information > span").click(function () {
      $("#delete_message").css("display", "none");
      $("#view_profile_window").css("display", "inherit");
      menu_list_x983nx83 = 1;
      $("#more_message_box_navbar_top_list").css({
        visibility: "hidden",
        "z-index": "-99",
        "animation-name": "unset",
        opacity: "0"
      });
      $(".message_inbox_emoji_box_for_input_list").css("display", "none");
      $("#qr_popup_window").css("display", "none");
    });
    // Close Profile Box
    $("#close_view_profile_window").click(function () {
      $("#view_profile_menus").css("display", "none");
      Isopen_view_profile_submenus = false;
      $("#view_profile_window").css("display", "none");
    });
    $(".message_box_inbox_client_data_search_input").click(function () {
      $(".popup_window").css("display", "none");
      $("#view_profile_window").css("display", "none");
      menu_list_x983nx83 = 1;
      $("#more_message_box_navbar_top_list").css({
        visibility: "hidden",
        "z-index": "-99",
        "animation-name": "unset",
        opacity: "0"
      });
      $(".message_inbox_emoji_box_for_input_list").css("display", "none");
    });
    $("#message_box_inbox_client_data_message_form_box_input").click(
      function () {
        $(".popup_window").css("display", "none");
        $("#view_profile_window").css("display", "none");
        menu_list_x983nx83 = 1;
        $("#more_message_box_navbar_top_list").css({
          visibility: "hidden",
          "z-index": "-99",
          "animation-name": "unset",
          opacity: "0"
        });
        $(".message_inbox_emoji_box_for_input_list").css("display", "none");
      }
    );
  }
  // Check Members In Message Box
  checkMembersData() {
    if ($("#message_box_inbox_client_data_item li").length < 4) {
      $(".chat_controler_cnm398").css("display", "none");
      $(".message_box_inbox_client_data_message_start_box").css(
        "display",
        "flex"
      );
      $(".message_box_inbox_client_data_contact_list").css({
        display: "flex",
        "flex-direction": "column",
        "flex-wrap": "nowrap",
        "align-content": "center",
        "justify-content": "center",
        "align-items": "center"
      });
    } else {
      if (
        document.getElementById("message_box_inbox_client_data_item")
          .scrollHeight > 1
      ) {
        $(
          ".message_box_inbox_client_data_message_form_box_button:first-child"
        ).css("border-left", "0px solid rgb(230,230,230)");
      } else {
        $(
          ".message_box_inbox_client_data_message_form_box_button:first-child"
        ).css("border-left", "1px solid rgb(230,230,230)");
      }
      $("#message_box_inbox_client_data_contact_list").css("display", "none");
    }
  }
  // Check Members In Message Box
  checkMembersDataContextValue() {
    const contextMenu = document.getElementById("contextMenu");
    function contextHandler(event) {
      event.preventDefault();
      if (contextMenu.style.display === "none") {
        contextMenu.style.left = event.pageX + "px";
        contextMenu.style.top = event.pageY + "px";
        contextMenu.style.display = "block";
      } else {
        contextMenu.style.left = event.pageX + "px";
        contextMenu.style.top = event.pageY + "px";
      }
    }

    function clickContextMenu() {
      contextMenu.style.display = "none";
    }

    function keyDownHandler(event) {
      if (event.keyCode === 27) {
        contextMenu.style.display = "none";
      }
    }
    document.body.addEventListener("click", function () {
      if ((contextMenu.style.display = "block")) {
        contextMenu.style.display = "none";
      }
    });
  }
  // Message Box Menu List Box
    messageBoxMenuList() {
        $(".message_box_inbox_client_data_private_box").click(function(){
            $(".message_box_inbox_client_data_item_options > svg:first-child").click();
        })
    $(".message_box_inbox_client_data_item_options > svg:first-child").click(
      function () {
        if (document.body.clientHeight < 770) {
          $("#message_box_inbox_client_data_item").css("display", "none");
          $(".chat_controler_cnm398").css({
            display: "inital",
            width: "100%",
            "max-width": "100%"
          });
          $("li[id='fullScreen'").css("display", "none");
          $(".mobile_menu").css("display", "none");
          $(".message_box_inbox_client_data_message_start_box").css(
            "display",
            "none"
          );
          $(".message_box_inbox_client_data_message_controller").css({
            display: "unset",
            width: "100%",
            "max-width": "100%"
          });
        }
        document.getElementById("message_box_inbox_client_data").style.height =
          window.innerHeight + "px";
        document.getElementById(
          "message_box_inbox_client_data_message_chat"
        ).style.height = window.innerHeight - 105 + "px";
        document.getElementById(
          "message_box_inbox_client_data_item"
        ).style.height = window.innerHeight + "px";
        document.getElementById(
          "message_box_inbox_client_data_message_controller"
        ).style.height = window.innerHeight + "px";
        $(".chat_controler_cnm398").css({
          display: "initial",
          width: "100%",
          "max-width": "100%"
        });
        $(".message_box_inbox_client_data_message_start_box").css(
          "display",
          "none"
        );
      }
    );
    $("#back_up_main_chat_list").click(function () {
      $("#message_box_inbox_client_data_item").css("display", "flex");
      $(".message_box_inbox_client_data_message_controller").css(
        "display",
        "none"
      );
      $("li[id='fullScreen'").css("display", "initial");
      $(".mobile_menu").css("display", "flex");
    });
    $("#menu_list_x983nx83").click(function () {
      if (menu_list_x983nx83 == 1) {
        menu_list_x983nx83 = 0;
        $("#more_message_box_navbar_top_list").css({
          visibility: "visible",
          "z-index": "99",
          "animation-name": "FadeIn",
          opacity: "1"
        });
        $(".popup_window").css("display", "none");
        $("#delete_message").css("display", "none");
        Isopen_view_profile_submenus = false;
        $(".message_inbox_emoji_box_for_input_list").css("display", "none");
      } else {
        menu_list_x983nx83 = 1;
        $("#more_message_box_navbar_top_list").css({
          visibility: "hidden",
          "z-index": "-99",
          "animation-name": "unset",
          opacity: "0"
        });
      }
    });
  }
}
var cca = new chat_controller();
cca.fullScreen();
cca.emojiBox();
cca.showUserProfile();
cca.checkMembersData();
cca.messageBoxMenuList();
cca.qrCodeWindowDataValue();
cca.uploadFileFromMessageBox();
cca.checkMembersDataContextValue();
cca.setMessageBoxDataValueControllerWithKey();
cca.setMessageBoxDataValueControllerWithoutKey();
