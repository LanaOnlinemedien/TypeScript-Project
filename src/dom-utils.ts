export function showBooks(book: { title: string; author: string; price: number; notes: string; ranking: number }) {
    const displayDiv = document.getElementById('books-display');
    displayDiv.innerHTML += `<div>
        <h3>${book.title} by ${book.author}</h3>
        <p>Preis: ${book.price.toFixed(2)}€</p>
        <p>Anmerkungen: ${book.notes}</p>
        <p>Sterneranking: ${"★".repeat(book.ranking)}</p>
    </div>`;
}

let totalValue = 0; // Variable zur Speicherung des Gesamtwertes

export function showTotalValue(price: number): void {
    totalValue += price; // Addiere den Preis des neuen Buches zum Gesamtwert
    const totalValueDiv = document.getElementById('total-value-display') as HTMLDivElement;
    if (totalValueDiv) {
        totalValueDiv.textContent = `Gesamtwert des Bücherregals: ${totalValue.toFixed(2)}€`;
    }
}

