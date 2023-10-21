
// state
let isChangingColorMode = false;
let isInLightMode = true;


export function ApplyLightTheme()
{
    ApplyLightNavHeaderHomeIcon();
    ApplyLightBackground();
}

export function ApplyDarkTheme()
{
    ApplyDarkNavHeaderHomeIcon();
    ApplyDarkBackground();
}

// home icon
function ApplyLightNavHeaderHomeIcon()
{
    let headerHomeIcon = $('.header-home-icon-dark');
    headerHomeIcon.addClass('header-home-icon-dark-to-light-animation');
    headerHomeIcon.one(
        'webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e)
        {
            headerHomeIcon.removeClass('header-home-icon-dark-to-light-animation');
            headerHomeIcon.removeClass('header-home-icon-dark-shown');

            headerHomeIcon.addClass('header-home-icon-dark-hiden');
            isChangingColorMode = false;
        });
}

function ApplyDarkNavHeaderHomeIcon()
{
    let headerHomeIcon = $('.header-home-icon-dark');
    headerHomeIcon.addClass('header-home-icon-light-to-dark-animation');
    headerHomeIcon.one(
        'webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e)
        {
            headerHomeIcon.removeClass('header-home-icon-light-to-dark-animation');
            headerHomeIcon.removeClass('header-home-icon-dark-hiden');

            headerHomeIcon.addClass('header-home-icon-dark-shown');
            isChangingColorMode = false;
        });
}

// background
function ApplyLightBackground()
{
    let headerNav = $('.header-nav');
    headerNav.addClass('header-nav-dark-to-light-animation');
    headerNav.one(
        'webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e)
        {
            headerNav.removeClass('header-nav-dark-to-light-animation');
            headerNav.removeClass('nav-dark-dark');

            headerNav.addClass('header-nav-light');
            isChangingColorMode = false;
        });
}

function ApplyDarkBackground()
{
    let headerNav = $('.header-nav');
    headerNav.addClass('header-nav-light-to-dark-animation');
    headerNav.one(
        'webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e)
        {
            headerNav.removeClass('header-nav-light-to-dark-animation');
            headerNav.removeClass('header-nav-light');

            headerNav.addClass('nav-dark-dark');
            isChangingColorMode = false;
        });
}
