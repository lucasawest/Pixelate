// Your code here
// const ul = document.getElementById('the-ul')
// const newLi = document.createElement('li')
// ul.appendChild(newLi)

const table = document.getElementsByTagName('table')[0]

function makeRow () {
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}

makeRow()
makeRow()

const AddButton = document.getElementById('add-row')
AddButton.addEventListener('click', makeRow)

table.addEventListener('click', colorize)
// td.className = 'greenyellow'

function colorize (event) {
    const target = event.target
    if (target.className.length) {
        target.className = ''
    } else {
        target.className = chosenColor
    }
}

let chosenColor = 'greenyellow'

const select = document.getElementsByTagName('select')[0]
select.addEventListener('change', function (event) {
    chosenColor = event.target.value
})

// function colorize (event) {
//     const target = event.target
//     if (target.className.length) {
//         target.className = ''
//     } else {
//         target.className = chosenColor
//     }
// }













