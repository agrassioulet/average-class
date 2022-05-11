// const createElement = function(text) {
//     document.createElement(tex)
// }

const dataStudent = {

    "listStudent" :[],

    "computeAverage" : function() {
        var cpt = 0
        for (let i = 0; i < this.listStudent.length; i++) {
            var student = this.listStudent[i]
            cpt=cpt + Number(student.note)
        }

        return cpt / this.listStudent.length
    }


}

const btnAddStudent = document.getElementById("add-student")
const btnComputeAverage = document.getElementById("compute-average")
const formStudent = document.getElementById("form-student")

const inputFirstName = document.getElementById("firstname")
const inputLastName = document.getElementById("lastname")
const inputNote = document.getElementById("note")

const main = document.getElementById("main")


btnAddStudent.onclick = (e) => {
    e.preventDefault()
    main.innerHTML=''
    var firstName = inputFirstName.value
    var lastName = inputLastName.value
    var note = inputNote.value

    if(firstName != '' && lastName != '' && !isNaN(note)) {
        var student = {
            "firstname": firstName,
            "lastname": lastName,
            "note" : note
        }
        dataStudent.listStudent.push(student)
    }
    formStudent.reset()
    
}

btnComputeAverage.onclick = (e) => {
    main.innerHTML=''
    e.preventDefault()
    var p =  document.createElement("p")
    var average=dataStudent.computeAverage()
    p.appendChild(document.createTextNode("Moyenne : " + average))
    main.appendChild(p)

    for (let i = 0; i < dataStudent.listStudent.length; i++) {
        var student = dataStudent.listStudent[i]
        var divStudent = document.createElement("div")
        if(Number(student.note)>= average) {
            divStudent.classList.add("good-note")
        } else {
            divStudent.classList.add("bad-note")
        }

        divStudent.classList.add("student-result")
        var firstNameText = document.createElement("p")
        firstNameText.appendChild(document.createTextNode("Prénom : " + student.firstname))
        divStudent.appendChild(firstNameText)

        var lastNameText = document.createElement("p")
        lastNameText.appendChild(document.createTextNode("Nom : " + student.lastname))
        divStudent.appendChild(lastNameText)

        var noteText = document.createElement("p")
        noteText.appendChild(document.createTextNode("Note : " + student.note))
        divStudent.appendChild(noteText)

        var btnDelete = document.createElement("button")
        btnDelete.appendChild(document.createTextNode("Supprimer"))
        btnDelete.setAttribute("index",i )

        btnDelete.onclick = (e) => {
            dataStudent.listStudent.splice(i,1)
        }
        btnDelete.classList.add("delete-student")
        divStudent.appendChild(btnDelete)

        main.appendChild(divStudent)
    }
    
}