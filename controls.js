// Font One
const fontOneWeight = document.querySelector('input#font-one-weight')
const fontOneWeightDisplay = document.querySelector('p#font-one-weight-display')
fontOneWeight.addEventListener('input', (e) => {
    fontOneDisplay.style.fontWeight = `${e.target.value}`
    fontOneWeightDisplay.textContent = e.target.value
})
const fontOneSize = document.querySelector('input#font-one-size')
const fontOneSizeDisplay = document.querySelector('p#font-one-size-display')
fontOneSize.addEventListener('input', (e) => {
    fontOneDisplay.style.fontSize = `${e.target.value}rem`
    fontOneSizeDisplay.textContent = `${e.target.value}rem`
})
const fontOneLineHeight = document.querySelector('input#font-one-line-height')
const fontOneLineHeightDisplay = document.querySelector('p#font-one-line-height-display')
fontOneLineHeight.addEventListener('input', (e) => {
    fontOneDisplay.style.lineHeight = `${e.target.value}%`
    fontOneLineHeightDisplay.textContent = `${e.target.value}%`
})
const fontOneKerning = document.querySelector('input#font-one-kerning')
const fontOneKerningDispay = document.querySelector('p#font-one-kerning-display')
fontOneKerning.addEventListener('input', (e) => {
    fontOneDisplay.style.letterSpacing = `${e.target.value}ch`
    fontOneKerningDispay.textContent = `${e.target.value}ch`
})

// Font Two
const fontTwoWeight = document.querySelector('input#font-two-weight')
const fontTwoWeightDisplay = document.querySelector('p#font-two-weight-display')
fontTwoWeight.addEventListener('input', (e) => {
    fontTwoDisplay.style.fontWeight = `${e.target.value}`
    fontTwoWeightDisplay.textContent = e.target.value
})
const fontTwoSize = document.querySelector('input#font-two-size')
const fontTwoSizeDisplay = document.querySelector('p#font-two-size-display')
fontTwoSize.addEventListener('input', (e) => {
    fontTwoDisplay.style.fontSize = `${e.target.value}rem`
    fontTwoSizeDisplay.textContent = `${e.target.value}rem`
})
const fontTwoLineHeight = document.querySelector('input#font-two-line-height')
const fontTwoLineHeightDisplay = document.querySelector('p#font-two-line-height-display')
fontTwoLineHeight.addEventListener('input', (e) => {
    fontTwoDisplay.style.lineHeight = `${e.target.value}%`
    fontTwoLineHeightDisplay.textContent = `${e.target.value}%`
})
const fontTwoKerning = document.querySelector('input#font-two-kerning')
const fontTwoKerningDispay = document.querySelector('p#font-two-kerning-display')
fontTwoKerning.addEventListener('input', (e) => {
    fontTwoDisplay.style.letterSpacing = `${e.target.value}ch`
    fontTwoKerningDispay.textContent = `${e.target.value}ch`
})