const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

function setDefaultText() {
    fontOneDisplay.textContent = loremIpsum
    fontTwoDisplay.textContent = loremIpsum
}

function initialiseControlDisplays() {
    // Font One
    fontOneWeightDisplay.textContent = "400"
    fontOneSizeDisplay.textContent = "100%"
    fontOneLineHeightDisplay.textContent = "125%"
    fontOneKerningDispay.textContent = "100%"
    // Font Two
    fontTwoWeightDisplay.textContent = "400"
    fontTwoSizeDisplay.textContent = "100%"
    fontTwoLineHeightDisplay.textContent = "125%"
    fontTwoKerningDispay.textContent = "100%"
}