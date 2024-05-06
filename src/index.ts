import './styles/styles.css';
import { form, displayDiv, totalValueDiv } from "./dom-utils.ts";

form.addEventListener('submit', function (event: Event) {
        event.preventDefault();
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const author = (document.getElementById('author') as HTMLInputElement).value;
        const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);
        const notes = (document.getElementById('notes') as HTMLTextAreaElement).value;
        const ranking = parseInt((document.getElementById('ranking') as HTMLSelectElement).value);

        showBooks({title, author, price, notes, ranking});
        showTotalValue(price);
});

function showBooks(book: { title: string; author: string; price: number; notes: string; ranking: number }) {
    displayDiv.innerHTML += `<div>
        <h3>${book.title} by ${book.author}</h3>
        <p>Preis: ${book.price.toFixed(2)}€</p>
        <p>Anmerkungen: ${book.notes}</p>
        <p>Sterneranking: ${"★".repeat(book.ranking)}</p>
    </div>`;
}



function showTotalValue(price: number): void {
    let totalValue = 0; // Variable zur Speicherung des Gesamtwertes
    totalValue += price; // Addiere den Preis des neuen Buches zum Gesamtwert
    totalValueDiv.textContent = `Gesamtwert des Bücherregals: ${totalValue.toFixed(2)}€`;
}





