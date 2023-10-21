// import { HandleScreenResize } from "./view/style-handling";
import * as StyleHandler from "./view/style-handling.js";
// import * as LocalizationHandling from "./controller/localization-handling.js";
import * as DarkModeHandler from "./view/dark-mode/dark-mode-handling.js";
import * as HeaderNav from "./view/dark-mode/dark-mode-header-nav.js";
import * as Content from "./view/dark-mode/dark-mode-content.js";


// config
let darkModeCacheKey = "dark-mode-state";


// SubscribeAllListeners();


SetInitialState();

export function SetInitialState()
{
    let darkModeState = GetCachedDarkModeState();


    if (darkModeState)
    {
        // ApplyDarkThemeInstantaneously();
        HeaderNav.ApplyDarkTheme();
        Content.ApplyDarkTheme();
    }
    else
    {
        // ApplyLightThemeInstantaneously();
        HeaderNav.ApplyLightTheme();
        Content.ApplyLightTheme();
    }
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
