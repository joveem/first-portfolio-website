export function HandleScreenResize()
{
    let joveemImageContainerParent = document.querySelector('.joveem-image-container-parent');
    let joveemImageContainer = document.querySelector('.joveem-image-container');

    let parentHeight = joveemImageContainerParent.offsetHeight;
    let parentWidth = joveemImageContainerParent.offsetWidth;

    let finalMaxSize = 0;

    if (parentHeight < parentWidth)
        finalMaxSize = parentHeight;
    else
        finalMaxSize = parentWidth;


    joveemImageContainer.style.width = `${finalMaxSize}px`;
    joveemImageContainer.style.height = `${finalMaxSize}px`;
}
