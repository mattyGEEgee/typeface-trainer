const fontOneDisplay = document.querySelector('p#font-one')
const fontTwoDisplay = document.querySelector('p#font-two')
const customInput = document.querySelector('textarea#custom-input')
const customInputReset = document.querySelector('input#reset-default-text') // uncheck when typing

// set default text
setDefaultText()
initialiseControlDisplays()

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