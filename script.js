// getting references to add new notes on body 
const newNote = document.querySelector('#addNote');
const addNewNote = (text = '') => {
  const note = document.createElement('div');
        note.classList.add('note');
        // note.classList.add('mx-3');
        // note.classList.add('my-2');
        note.classList.add('d-inline-flex');
        note.classList.add('flex-row');

    // inserting HTML data to be rendered dynamically 
    const htmlData = 
    `<div class=" bg-light border-0 ">
    <button id="edit" class="edit border-0 bg-transparent"><i class="bi bi-pen rounded fs-6 fw-bolder "></i></button>
    <button id="delete" class="delete border-0 bg-transparent"><i class="bi bi-trash fs-6 fw-bolder rounded"></i></button>
    </div>
    <div class="main"></div>
    <textarea class="border-0" style="width: 15rem; min-height: 10rem; max-height: 15rem;"> </textarea> `;
    
    note.insertAdjacentHTML('afterbegin', htmlData);

    // getting references of the DOM elements 
    const Edit = note.querySelector('.edit');
    const Delete = note.querySelector('.delete');
    const Main = note.querySelector('.main');
    const TextArea = note.querySelector('textarea');

    //  delete button functionality 
    Delete.addEventListener('click', () => {
        note.remove();
    })  

    document.body.appendChild(note);
}

// Add another note button functionality 
newNote.addEventListener('click', () => addNewNote());


