function saveNote() {
    let note = document.getElementById("noteInput").value;

    if (note === "") {
        alert("Please write something!");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("noteInput").value = "";

    displayNotes();
}

function displayNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    let list = document.getElementById("notesList");
    list.innerHTML = "";

    notes.forEach((note, index) => {
        let li = document.createElement("li");
        li.innerHTML = note + " <button onclick='deleteNote(" + index + ")'>Delete</button>";
        list.appendChild(li);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}

displayNotes();