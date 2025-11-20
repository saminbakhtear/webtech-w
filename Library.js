document.getElementById('library-form').addEventListener('submit', addBook);

function addBook(event) {
    event.preventDefault();  

    let bookTitle = document.getElementById('book-title').value;
    let publicationYear = document.getElementById('publication-year').value;

    if (bookTitle === '' || publicationYear === '') {
        alert('Please fill in both fields');
        return;
    }

    
    let row = document.createElement('tr');

    row.innerHTML = `
        <td>${bookTitle}</td>
        <td>${publicationYear}</td>
    `;

    
    document.getElementById('book-list').appendChild(row);

    
    document.getElementById('book-title').value = '';
    document.getElementById('publication-year').value = '';
}
