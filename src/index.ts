import './styles/styles.css';
import { form, displayDiv, totalValueDiv } from "./dom-utils.ts";
import {Book, getBooks, saveBooks} from "./storage.ts";

//Funktionen werden an Anfang ausgeführt, damit gespeicherte Bücher und der Wert des Bücherregals direkt angezeigt werden und nicht erst bei Klicken des submit-Buttons
showBooks();
showTotalValue();

//submit-Button bekommt ein Event zugewiesen
form.addEventListener('submit', function (event: Event) {
        //verhindert, dass Neuladen der Seite bei Klicken des submit-Buttons
        event.preventDefault();
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const author = (document.getElementById('author') as HTMLInputElement).value;
        const price = parseFloat((document.getElementById('price') as HTMLInputElement).value);
        const notes = (document.getElementById('notes') as HTMLTextAreaElement).value;
        const ranking = parseInt((document.getElementById('ranking') as HTMLSelectElement).value);

        //Objekt für neues Buch wird mit den oben extrahierten Daten erstellt. Datenstruktur wie in zuvor definiertem Interface Book 
        const newBook: Book = {
            title: title,
            author: author,
            price: price,
            notes: notes,
            ranking: ranking,
        }

        //neues Buch wird gespeichert
        saveBooks(newBook);
        //alle Bücher werden angezeigt
        showBooks();
        //Gesamtwert des Bücherregals, aller abgespeicherten Bücher, wird angezeigt
        showTotalValue();
        //Formular mit allen Eingabefeldern wird zurückgesetzt
        form.reset()
});

//Anzeigen der eingegebenen Bücher
function showBooks() {
    //Leeren des Inhalts des Containers, damit frühere Inhalte nicht dupliziert werden
    displayDiv.innerHTML = '';
    //Holt alle Bücher aus dem Local Storage
    const books: Book[] = getBooks();
    //über jedes vorher gespeicherte Buch iterieren und alle folgenden Informationen ausgeben
    books.forEach((book: Book) => {
        displayDiv.innerHTML += `<div>
            <h3>${book.title} von ${book.author}</h3>
            <p>Preis: ${book.price.toFixed(2)}€</p>
            <p>Anmerkungen: ${book.notes}</p>
            <p>Sterneranking: ${"★".repeat(book.ranking)}</p>
        </div>`;
    });
}


//Gibt den Gesamtwert des Bücherregals aus
function showTotalValue(): void {
    let totalValue = 0; // Variable zur Speicherung des Gesamtwertes
    const books: Book[] = getBooks(); //Holt alle Bücher aus dem Local Storage
    books.forEach((book: Book) => {
        totalValue += book.price; //Addiert den Preis des Buches zum Gesamtwert
    });
    //Gesamtwert des Bücherregals mit 2 Nachkommastellen ausgegeben
    totalValueDiv.textContent = `Gesamtwert des Bücherregals: ${totalValue.toFixed(2)}€`;
}





