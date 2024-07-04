const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

function setDefaultText() {
    fontOneDisplay.textContent = loremIpsum
    fontTwoDisplay.textContent = loremIpsum
}

function initialiseControlDisplays() {
    // Font One
    fontOneWeightDisplay.textContent = "400"
    fontOneSizeDisplay.textContent = "1rem"
    fontOneLineHeightDisplay.textContent = "125%"
    fontOneKerningDispay.textContent = "0ch"
    // Font Two
    fontTwoWeightDisplay.textContent = "400"
    fontTwoSizeDisplay.textContent = "1rem"
    fontTwoLineHeightDisplay.textContent = "125%"
    fontTwoKerningDispay.textContent = "0ch"
}

function addGFontScriptTag(GFontSrc) {
    GFontSrc = GFontSrc.value
    let gFontStyleTag = document.createElement('style')
    gFontStyleTag.textContent =`@import url('${GFontSrc}')`
    document.head.insertAdjacentElement("afterbegin", gFontStyleTag)
}
function getGFontName(GFontSrc) {
    GFontSrc = GFontSrc.value
    const startIndex = GFontSrc.search(/family/)
    let GFontName = GFontSrc.slice(startIndex + 7)
    GFontName = GFontName.match(/^\w*[\+]?\w*[\+]?\w*[\+]?\w*[\+]?\w*/)[0]
    GFontName = GFontName.replaceAll('+', ' ')
    return GFontName
}