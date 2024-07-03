// compare at least 2 fonts side by side, to learn
// default `lorem ipsum`, but have a custom text option, also

// ~~font (manual in css)
// weight
// size
// spacing (leading??)
// line hieght
// line legnth

// ---

const fontOneDisplay = document.querySelector('p#font-one')
const fontTwoDisplay = document.querySelector('p#font-two')

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

fontOneDisplay.textContent = loremIpsum
fontTwoDisplay.textContent = loremIpsum