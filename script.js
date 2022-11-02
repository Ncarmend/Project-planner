//conexion serveur


//Rafael
const body = document.body;
let addToDoButton = document.getElementById('addToDo');
let addToDoButtonA = document.getElementById('addToDoA');
let addToDoButtonB = document.getElementById('addToDoB');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function () {
        if (window.confirm('Excluir ' + paragraph.innerText + '?')) {
            toDoContainer.removeChild(paragraph);
        }
    })
})
addToDoButtonA.addEventListener('click', function () {
    let paragraphA = document.createElement('p');
    paragraphA.classList.add('paragraph-styling');
    paragraphA.innerText = inputFieldA.value;
    toDoContainer.appendChild(paragraphA);
    inputFieldA.value = '';
    paragraphA.addEventListener('click', function () {
        paragraphA.style.textDecoration = 'line-through';
    })
    paragraphA.addEventListener('dblclick', function () {
        if (window.confirm('Excluir ' + paragraphA.innerText + '?')) {
            toDoContainer.removeChild(paragraphA);
        }
    })
})
addToDoButtonB.addEventListener('click', function () {
    let paragraphB = document.createElement('p');
    paragraphB.classList.add('paragraph-styling');
    paragraphB.innerText = inputFieldB.value;
    toDoContainer.appendChild(paragraphB);
    inputFieldB.value = '';
    paragraphB.addEventListener('click', function () {
        paragraphB.style.textDecoration = 'line-through';
    })
    paragraphB.addEventListener('dblclick', function () {
        if (window.confirm('Excluir ' + paragraphB.innerText + '?')) {
            toDoContainer.removeChild(paragraphB);
        }
    })

    let debut = new Date()
    faireQuelqueChosePendantLongtemps()
    let fin = new Date()
    let duree = fin.getTime() - debut.getTime() // La durée en millisecondes
})

/////////////
const textinpt = document.createElement("input")
const div = document.createElement("div")
body.appendChild(div)
div.appendChild(textinpt)
textinpt.type = "text";
textinpt.placeholder = "Name task";
textinpt.classList.add("paragraph-styling")

const select = document.createElement("select")
select.classList.add('paragraph-styling')
body.appendChild(select)

const option = document.createElement("option")
const option1 = document.createElement("option")
const option2 = document.createElement("option")
const btnok = document.createElement("button");
option.value = "todo"
option.text = "TO DO";
option1.value = "doing"
option1.text = "DOING";
option2.value = "done"
option2.text = "DONE";

select.appendChild(option)
select.appendChild(option1)
select.appendChild(option2)
btnok.addEventListener('click', function () {
    const tache = document.querySelector(".nameInput");
    function selectt() {
        let select = document.getElementById("select");
        function selec() {
            alert(select.selectedOptions[0].value);
            console.log(selec)
        }
    }
    /*tab = [];
    for (i = 0; i < select.options.length; i++) {
        if (select.options.i.selected === true) { tab[i] = i }
    }*/
})
