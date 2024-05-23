async function getBooks() {
  const url = 'http://localhost:3000/books';
  const response = await fetch(url);
}

async function renderBooks() {
  const books = await getBooks();
  console.log(books);
}
