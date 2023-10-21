// import { HandleScreenResize } from "./view/style-handling";
import * as StyleHandler from "./view/style-handling.js";
import * as LocalizationHandling from "./controller/localization-handling.js";
import * as DarkModeHandler from "./view/dark-mode/dark-mode-handling.js";


SubscribeAllListeners();





function SubscribeAllListeners()
{
    addEventListener("DOMContentLoaded", (event) =>
    {
        StyleHandler.HandleScreenResize();
    });

    addEventListener("resize", (event) =>
    {
        StyleHandler.HandleScreenResize();
    });
}


function CopyEmailButton()
{
    window.alert("> CopyEmailButton");

    let emailAddress = "joveem@gmail.com"
    navigator.clipboard.writeText(emailAddress);

    PlayCopiedAnimation();
}

function PlayCopiedAnimation()
{
    $(".copied").animate({ top: -25, opacity: 0 }, 700, function ()
    {
        $(this).css({ top: 0, opacity: 1 });
    });
}






$('.sub-menu ul').hide();
$(".sub-menu a").click(function ()
{
    window.alert("TESTE");
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});


$(document).ready(function ()
{
    // $("button").click(function ()
    // {
    //     $("p").css("background-color", "yellow");
    // });

    // $(".sub-menu a").click(OnNavItemClick);

    DarkModeHandler.SetupAllButtons();
    DarkModeHandler.SetInitialState();
    LocalizationHandling.SetupAllButtons();
});

function OnNavItemClick()
{
    console.log("> OnNavItemClick");
    // $('ul').slideToggle("100");
    // $('ul').css("background-color", "red");
    // $('ul').css("background-color", "red");
    // $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).closest(".sub-menu").css("background-color", "red");
    // $(this).css("background-color", "red");
    // $(this).css("background-color", "red");
}
