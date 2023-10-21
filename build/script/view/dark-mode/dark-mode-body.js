
// state
let isChangingColorMode = false;
let isInLightMode = true;


export function ApplyLightTheme()
{
    ApplyLightBackground();
}

export function ApplyDarkTheme()
{
    ApplyDarkBackground();
}


// background

function ApplyLightBackground()
{
    let bodyElement = $('body');
    bodyElement.addClass('header-nav-dark-to-light-animation');
    bodyElement.one(
        'webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e)
        {
            bodyElement.removeClass('header-nav-dark-to-light-animation');
            bodyElement.removeClass('nav-dark-dark');

            bodyElement.addClass('header-nav-light');
        });
}

function ApplyDarkBackground()
{
    let bodyElement = $('body');
    bodyElement.addClass('header-nav-light-to-dark-animation');
    bodyElement.one(
        'webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e)
        {
            bodyElement.removeClass('header-nav-light-to-dark-animation');
            bodyElement.removeClass('header-nav-light');

            bodyElement.addClass('nav-dark-dark');
        });
}
