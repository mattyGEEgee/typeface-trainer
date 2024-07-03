// Font One
const fontOneWeight = document.querySelector('input#font-one-weight')
const fontOneWeightDisplay = document.querySelector('p#font-one-weight-display')
fontOneWeight.addEventListener('input', (e) => {
    fontOneDisplay.style = `font-weight: ${e.target.value}`
    fontOneWeightDisplay.textContent = e.target.value
})
const fontOneSize = document.querySelector('input#font-one-size')
const fontOneSizeDisplay = document.querySelector('p#font-one-size-display')
fontOneSize.addEventListener('input', (e) => {
    fontOneDisplay.style = `font-size: ${e.target.value}rem`
    fontOneSizeDisplay.textContent = `${e.target.value}%`
})
const fontOneLineHeight = document.querySelector('input#font-one-line-height')
const fontOneLineHeightDisplay = document.querySelector('p#font-one-line-height-display')
fontOneLineHeight.addEventListener('input', (e) => {
    fontOneDisplay.style = `line-height: ${e.target.value}%`
    fontOneLineHeightDisplay.textContent = `${e.target.value}%`
})
const fontOneKerning = document.querySelector('input#font-one-kerning')
const fontOneKerningDispay = document.querySelector('p#font-one-kerning-display')
fontOneKerning.addEventListener('input', (e) => {
    fontOneDisplay.style = `letter-spacing: ${e.target.value}ch`
    fontOneKerningDispay.textContent = `1${(e.target.value).slice(2)}%`
})

// Font Two
const fontTwoWeight = document.querySelector('input#font-two-weight')
const fontTwoWeightDisplay = document.querySelector('p#font-two-weight-display')
fontTwoWeight.addEventListener('input', (e) => {
    fontTwoDisplay.style = `font-weight: ${e.target.value}`
    fontTwoWeightDisplay.textContent = e.target.value
})
const fontTwoSize = document.querySelector('input#font-two-size')
const fontTwoSizeDisplay = document.querySelector('p#font-two-size-display')
fontTwoSize.addEventListener('input', (e) => {
    fontTwoDisplay.style = `font-size: ${e.target.value}rem`
    fontTwoSizeDisplay.textContent = `${e.target.value}%`
})
const fontTwoLineHeight = document.querySelector('input#font-two-line-height')
const fontTwoLineHeightDisplay = document.querySelector('p#font-two-line-height-display')
fontTwoLineHeight.addEventListener('input', (e) => {
    fontTwoDisplay.style = `line-height: ${e.target.value}%`
    fontTwoLineHeightDisplay.textContent = `${e.target.value}%`
})
const fontTwoKerning = document.querySelector('input#font-two-kerning')
const fontTwoKerningDispay = document.querySelector('p#font-two-kerning-display')
fontTwoKerning.addEventListener('input', (e) => {
    fontTwoDisplay.style = `letter-spacing: ${e.target.value}ch`
    fontTwoKerningDispay.textContent = `1${(e.target.value).slice(2)}%`
})