
import * as HeaderNav from "./dark-mode-header-nav.js";
import * as Body from "./dark-mode-body.js";
import * as Content from "./dark-mode-content.js";

// state
let isChangingColorMode = false;
let isInLightMode = true;

// config
let darkModeCacheKey = "dark-mode-state";


export function SetupAllButtons()
{
    $(".div-light-switch").click(OnLightSwitchClick);
}

export function SetInitialState()
{
    let darkModeState = GetCachedDarkModeState();

    if (darkModeState)
        ApplyDarkThemeInstantaneously();
    else
        ApplyLightThemeInstantaneously();
}


export function OnLightSwitchClick()
{
    TryToSwitchColorMode();
}

function TryToSwitchColorMode()
{
    if (!isChangingColorMode)
    {
        if (!isInLightMode)
            ApplyLightTheme()
        else
            ApplyDarkTheme();
    }
}



function ApplyLightTheme()
{
    SaveDarkModeStateCache(false);
    isChangingColorMode = true;
    isInLightMode = true;

    Body.ApplyLightTheme();
    HeaderNav.ApplyLightTheme();
    Content.ApplyLightTheme();

    ApplyLightLightSwitch();
    ApplyLightToMainImage();

    setTimeout(() => isChangingColorMode = false, 500);
}

function ApplyDarkTheme()
{
    SaveDarkModeStateCache(true);
    isChangingColorMode = true;
    isInLightMode = false;

    Body.ApplyDarkTheme();
    HeaderNav.ApplyDarkTheme();
    Content.ApplyDarkTheme();

    ApplyDarkLightSwitch();
    ApplyDarkToMainImage();

    setTimeout(() => isChangingColorMode = false, 500);
}

function ApplyLightThemeInstantaneously()
{
    SaveDarkModeStateCache(false);
    isChangingColorMode = false;
    isInLightMode = true;

    Body.ApplyLightTheme();
    HeaderNav.ApplyLightTheme();
    Content.ApplyLightTheme();

    ApplyLightLightSwitch();
    // ApplyLightToMainImage();
    ApplyLightToMainImageInstantaneously();
}

function ApplyDarkThemeInstantaneously()
{
    SaveDarkModeStateCache(true);
    isChangingColorMode = false;
    isInLightMode = false;

    Body.ApplyDarkTheme();
    HeaderNav.ApplyDarkTheme();
    Content.ApplyDarkTheme();

    ApplyDarkLightSwitch();
    // ApplyDarkToMainImage();
    ApplyDarkToMainImageInstantaneously();
}

// main image

function ApplyLightToMainImage()
{
    DoSmoothImageChange("https://jovdev-ws-fe-01-cdn-01.s3.sa-east-1.amazonaws.com/public/images/about/jovdev-website-joveem-01-06.png", 0.3);
}

function ApplyDarkToMainImage()
{
    DoSmoothImageChange("https://jovdev-ws-fe-01-cdn-01.s3.sa-east-1.amazonaws.com/public/images/about/jovdev-website-joveem-02-06.png", 0.3);
}

function ApplyLightToMainImageInstantaneously()
{
    SetImageInstantaneously("https://jovdev-ws-fe-01-cdn-01.s3.sa-east-1.amazonaws.com/public/images/about/jovdev-website-joveem-01-06.png", 0);
}


function ApplyDarkToMainImageInstantaneously()
{
    SetImageInstantaneously("https://jovdev-ws-fe-01-cdn-01.s3.sa-east-1.amazonaws.com/public/images/about/jovdev-website-joveem-02-06.png", 0);
}

function SetImageInstantaneously(imagePath)
{
    let currentSpriteImage = $('.scroll-step-01-joveem-base-current-sprite');
    let goalSpriteImage = $('.scroll-step-01-joveem-base-goal-sprite');

    goalSpriteImage.css('animation', 'none');
    currentSpriteImage.attr("src", imagePath);
}

function DoSmoothImageChange(imagePath, changeDuration)
{
    let animationQuerry = "show-animation " + changeDuration + "s";
    let currentSpriteImage = $('.scroll-step-01-joveem-base-current-sprite');
    let goalSpriteImage = $('.scroll-step-01-joveem-base-goal-sprite');

    goalSpriteImage.attr("src", imagePath);
    goalSpriteImage.css('animation', animationQuerry);
    goalSpriteImage.one(
        'webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e)
        {
            // goalSpriteImage.removeClass('header-home-icon-light-to-dark-animation');
            // goalSpriteImage.removeClass('header-home-icon-dark-hiden');

            // goalSpriteImage.addClass('header-home-icon-dark-shown');
            isChangingColorMode = false;

            goalSpriteImage.css('animation', 'none');
            currentSpriteImage.attr("src", imagePath);
        });
}


// light switch

function ApplyLightLightSwitch()
{
    // let lightSwitchImage = $(".light-switch");
    // lightSwitchImage.attr("src", 'https://jovdev-ws-fe-01-cdn-01.s3.sa-east-1.amazonaws.com/public/images/about/light-switch-on.png');
    let lightSwitchImage = $('.div-light-switch');
    lightSwitchImage.css('background-image', 'url(https://jovdev-ws-fe-01-cdn-01.s3.sa-east-1.amazonaws.com/public/images/about/light-switch-on.png)');
}

function ApplyDarkLightSwitch()
{
    // let lightSwitchImage = $(".light-switch");
    // lightSwitchImage.attr("src", 'https://jovdev-ws-fe-01-cdn-01.s3.sa-east-1.amazonaws.com/public/images/about/light-switch-off.png');
    let lightSwitchImage = $('.div-light-switch');
    lightSwitchImage.css('background-image', 'url(https://jovdev-ws-fe-01-cdn-01.s3.sa-east-1.amazonaws.com/public/images/about/light-switch-off.png)');
}


function GetCachedDarkModeState()
{
    let value = false;

    if (typeof (Storage) !== "undefined")
    {
        let cachedDarkModeState = localStorage.getItem(darkModeCacheKey);

        if (cachedDarkModeState != null)
        {
            cachedDarkModeState = JSON.parse(cachedDarkModeState);
            value = cachedDarkModeState;
        }
    }

    return value;
}

function SaveDarkModeStateCache(darkModeState)
{
    if (typeof (Storage) !== "undefined")
    {
        darkModeState = JSON.parse(darkModeState);
        localStorage.setItem(darkModeCacheKey, darkModeState);
    }
}
