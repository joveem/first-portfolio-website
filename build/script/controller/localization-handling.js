export function SetupAllButtons()
{
    $(".book-click-area").click(OnBookClick);
}

function OnBookClick()
{
    OpenLocalizationPanel();
}

function OpenLocalizationPanel()
{
    alert("OpenLocalizationPanel");
}
