//alle Objekte, die als Buch behandelt werden, müssen folgende 5 Eigenschaften in gegebenem Typen enthalten
export interface Book {
    title: string;
    author: string;
    price: number;
    notes: string;
    ranking: number;
}

//speichert das Buch in den Local Storage
export function saveBooks(book: Book) {
    // Holen aller Bücher aus dem Local Storage, wenn es noch keine gibt, wird ein leeres Array zurückgegeben
    let books: Book[] = JSON.parse(localStorage.getItem('books') as string) || [];
    //neues Buch wird hinzugefügt, durch Abspeichern in Array werden zuvor gespeicherte Daten nicht überschrieben, sondern in Array hinzugefügt am Ende
    books.push(book);
    //die alten und neuen Bücher werden wieder in den Local Storage gespeichert
    localStorage.setItem('books', JSON.stringify(books));
}

//Holt alle Bücher aus dem Local Storage
export function getBooks(): Book[] {
    return JSON.parse(localStorage.getItem('books') as string) || [];
}