import './styles/styles.css';

import { showBooks } from './dom-utils.ts';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('book-form') as HTMLFormElement;
    form.onsubmit = function(event) {
        event.preventDefault();
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const author = (document.getElementById('author') as HTMLInputElement).value;
        const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);
        const notes = (document.getElementById('notes') as HTMLTextAreaElement).value;
        const ranking = parseInt((document.getElementById('ranking') as HTMLSelectElement).value);

        showBooks({title, author, price, notes, ranking});
    };
});

