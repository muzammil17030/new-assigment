
var a = document.getElementById('main')
var inp = document.getElementById('inp')

function createElem() {
    var p = document.createElement('P')
    var txt = document.createTextNode(inp.value)
    p.appendChild(txt)
    p.setAttribute('class', 'pera')
    var id = 'p' + (a.childElementCount + 1) // generate unique id
    p.setAttribute('id', id)
    p.style.display = "flex"
    p.style.justifyContent = "center"
    var delBtn = document.createElement("BUTTON")
    var delLabel = document.createTextNode('Delete')
    delBtn.appendChild(delLabel)
    delBtn.setAttribute('onclick', 'delTodo(this)')
    p.appendChild(delBtn)
    
    
    var editBtn = document.createElement("BUTTON")
    var editLabel = document.createTextNode('Edit')
    editBtn.appendChild(editLabel)
    editBtn.setAttribute('onclick', 'editTodo(this)')
    p.appendChild(editBtn)

    a.appendChild(p)

    
}

function delTodo(elem) {
    var p = elem.parentNode
    p.remove()
}

function editTodo(elem) {
    var p = elem.parentNode
    var id = p.getAttribute('id')
    var txt = p.firstChild
    var newTxt = prompt('Enter new text:')
    if (newTxt) {
        txt.textContent = newTxt
    }
}

function delAllTodos() {
    var todos = a.getElementsByClassName('pera')
    while (todos.length > 0) {
        todos[0].remove()
    }
}


