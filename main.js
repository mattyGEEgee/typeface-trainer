const fontOneDisplay = document.querySelector('p#font-one')
const fontTwoDisplay = document.querySelector('p#font-two')
const customInput = document.querySelector('textarea#custom-input')
const customInputReset = document.querySelector('input#reset-default-text') // uncheck when typing

// set default text
setDefaultText()
initialiseControlDisplays()

const fontOneGFontSrc = document.querySelector('input#font-one-gfont-source')
const addFontOneGFontSrc = document.querySelector('input#font-one-gfont-add')
addFontOneGFontSrc.addEventListener('click', (e) => {
    addGFontScriptTag(fontOneGFontSrc)
    fontOneDisplay.style.fontFamily = getGFontName(fontOneGFontSrc)
})
const fontTwoGFontSrc = document.querySelector('input#font-two-gfont-source')
const addFontTwoGFontSrc = document.querySelector('input#font-two-gfont-add')
addFontTwoGFontSrc.addEventListener('click', (e) => {
    addGFontScriptTag(fontTwoGFontSrc)
    fontTwoDisplay.style.fontFamily = getGFontName(fontTwoGFontSrc)
})

customInput.addEventListener('input', (e) => {
    if (customInputReset.checked) {
        customInputReset.checked = false
    }
    fontOneDisplay.textContent = e.target.value
    fontTwoDisplay.textContent = e.target.value
})
customInputReset.addEventListener('click', (e) => {
    if (e.target.checked) {
        setDefaultText()
        customInput.value = ""
    }
})