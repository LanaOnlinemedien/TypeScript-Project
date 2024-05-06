export interface Book {
    title: string;
    author: string;
    price: number;
    notes: string;
    ranking: number;
}

export function saveBook(book: Book) {
    //speichert das Buch in den Local Storage
    // Holen aller Bücher aus dem Local Storage, wenn es noch keine gibt, wird ein leeres Array zurückgegeben
    let books: Book[] = JSON.parse(localStorage.getItem('books') as string) || [];
    //neues Buch wird hinzugefügt
    books.push(book);
    //die alten und neuen Bücher werden wieder in den Local Storage gespeichert
    localStorage.setItem('books', JSON.stringify(books));
}

export function getBooks(): Book[] {
    //Holt alle Bücher aus dem Local Storage
    return JSON.parse(localStorage.getItem('books') as string) || [];
}