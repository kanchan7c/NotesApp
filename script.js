// getting references to add new notes on body 
const newNote = document.querySelector('#addNote');
// saving user notes to local storage 
const updateLocalStorage = () => {
    const textInput = document.querySelectorAll('textarea');
    const notes = [];
    
    textInput.forEach((note) => {
        return notes.push(note.value);
    })

    localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNote = (text = '') => {
  const note = document.createElement('div');
        note.classList.add('note');
        // note.classList.add('mx-3');
        // note.classList.add('my-2');
        note.classList.add('d-inline-flex');
        note.classList.add('flex-row');

    // inserting HTML data to be rendered dynamically 
    const htmlData = 
    `<div class=" bg-light border-0">
    <button id="edit" class="edit border-0 bg-transparent "><i class="bi bi-pen rounded fs-6 fw-bolder shadow"></i></button>
    <button id="delete" class="delete border-0 bg-transparent "><i class="bi bi-trash fs-6 fw-bolder rounded shadow"></i></button>
    </div>
    <div class="main ${text ? "" : "d-none"}" style="width: 15rem; min-height: 10rem; max-height: 15rem;"></div>
    <textarea class="border-0 ${text ? "d-none" : ""}" style="width: 15rem; min-height: 10rem; max-height: 15rem;"> </textarea> `;
    
    note.insertAdjacentHTML('afterbegin', htmlData);

    // getting references of the DOM elements 
    const Edit = note.querySelector('.edit');
    const Delete = note.querySelector('.delete');
    const Main = note.querySelector('.main');
    const TextArea = note.querySelector('textarea');

    //  delete note functionality 
    Delete.addEventListener('click', () => {
        note.remove();
    })  

    // toggle using edit button 
    TextArea.value = text;
    Main.innerText = text;
    Edit.addEventListener('click', () => {
        TextArea.classList.toggle('d-none');
        Main.classList.toggle('d-none');
    })

    // adding notes entered to main section 
    TextArea.addEventListener('change', (event) => {
        const userNote = event.target.value;
        Main.innerText = userNote;

        updateLocalStorage();
    })

    document.body.appendChild(note);
}

// getting data from localStorage 

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){ notes.forEach((note) => addNewNote(note))};

// Add another note button functionality 
newNote.addEventListener('click', () => addNewNote());


