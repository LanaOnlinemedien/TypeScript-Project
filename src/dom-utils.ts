export function showBooks(book: { title: string; author: string; price: number; notes: string; ranking: number }) {
    const displayDiv = document.getElementById('books-display');
    displayDiv.innerHTML += `<div>
        <h3>${book.title} by ${book.author}</h3>
        <p>Preis: ${book.price.toFixed(2)}€</p>
        <p>Anmerkungen: ${book.notes}</p>
        <p>Sterneranking: ${"★".repeat(book.ranking)}</p>
    </div>`;
}
