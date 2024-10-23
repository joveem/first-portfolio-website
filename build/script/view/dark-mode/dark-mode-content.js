
// state
let isChangingColorMode = false;
let isInLightMode = true;


export function ApplyLightTheme()
{
    ApplyLightHomeBackground();
    ApplyLightText();
}

export function ApplyDarkTheme()
{
    ApplyDarkHomeBackground();
    ApplyDarkText();
}


// text

function ApplyLightText()
{
    // let mainNameText = $('.main-joveem-name');
    // mainNameText.css('color', '#111');

    // let h2Element = $('h2');
    // h2Element.css('color', '#111');

    let body = $("body").get(0);
    body.style.setProperty("--main-text-color-01", "#111")
    body.style.setProperty("--main-text-color-02", "#222");
    body.style.setProperty("--secondary-text-color-01", "#6c757d");
}

function ApplyDarkText()
{
    // let mainNameText = $('.main-joveem-name');
    // mainNameText.css('color', '#ccc');

    // let h2Element = $('h2');
    // h2Element.css('color', '#ccc');

    let body = $("body").get(0);
    body.style.setProperty("--main-text-color-01", "#ccc")
    body.style.setProperty("--main-text-color-02", "#bbb");
    // body.style.setProperty("--secondary-text-color-01", "#828a93");
    body.style.setProperty("--secondary-text-color-01", "#828a93");
}

function ApplyLightHomeBackground()
{
    let body = $("body").get(0);
    body.style.setProperty("--home-background-url", "url(https://jovdev-ws-fe-01-cdn.s3.sa-east-1.amazonaws.com/public/images/home/background-out-of-order-01.jpg)")
}

function ApplyDarkHomeBackground()
{
    let body = $("body").get(0);
    body.style.setProperty("--home-background-url", "url(https://jovdev-ws-fe-01-cdn.s3.sa-east-1.amazonaws.com/public/images/home/background-out-of-order-02.jpg)")
}
