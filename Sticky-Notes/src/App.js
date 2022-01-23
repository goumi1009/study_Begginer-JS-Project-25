import Button from './components/Button.js';

export default function ({ targetEl }) {
  this.isModalDisplay = true;
  this.setIsModalDisplay = () => {
    this.isModalDisplay = !this.isModalDisplay;
    if (this.isModalDisplay) {
      modalEl.style.display = 'none';
    } else {
      modalEl.style.display = 'flex';
    }
  };

  this.newNote = '';
  this.setNewNote = (note) => {
    this.newNote = note;
  };

  this.notes = [];
  this.setNotes = (addedNotes) => {
    this.notes = addedNotes;
    this.renderNotes();
  };

  const heading = document.createElement('h1');
  heading.textContent = '📌Sticky Note';
  targetEl.appendChild(heading);

  const modalEl = document.createElement('div');
  modalEl.classList.add('modal');
  const modalContentEl = document.createElement('div');
  const modalCloseButton = document.createElement('button');
  modalCloseButton.textContent = 'X';
  const modaltextArea = document.createElement('textarea');
  modalContentEl.appendChild(modalCloseButton);
  modalContentEl.appendChild(modaltextArea);
  modalEl.appendChild(modalContentEl);
  targetEl.appendChild(modalEl);

  new Button({
    targetEl,
    textContent: 'Add Note',
    onClick: () => {
      this.setIsModalDisplay();
    },
  });

  const notesEl = document.createElement('div');
  notesEl.classList.add('note-list');
  targetEl.appendChild(notesEl);
  this.renderNotes = () => {
    const notesHTML = this.notes
      .map(
        (note, i) =>
          `<div data-id="${i}" style="transform:rotate(${note.degree}deg); background:${note.background}" class="note">
        <p>${note.content}</p>
      </div>`
      )
      .join('');

    notesEl.innerHTML = notesHTML;
  };
  this.renderNotes();

  const closeModal = (e) => {
    this.setIsModalDisplay();
  };

  const rendomDegree = () => {
    const degree = Math.floor(Math.random() * (8 - -8 + 1)) + -8;
    return degree;
  };

  const rendomBackground = () => {
    const background = `#${Math.round(Math.random() * 0xffffff).toString(16)}`;
    return background;
  };

  modalCloseButton.addEventListener('click', (e) => {
    closeModal(e);
  });

  modaltextArea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      this.setNotes([
        ...this.notes,
        {
          content: this.newNote,
          degree: rendomDegree(),
          background: rendomBackground(),
        },
      ]);
    } else {
      this.setNewNote(e.target.value);
    }
  });

  notesEl.addEventListener('dblclick', (e) => {
    const id = e.target.closest('.note').dataset.id;
    const filterNotes = this.notes.filter((note, i) => i !== Number(id));
    this.setNotes(filterNotes);
  });
}
