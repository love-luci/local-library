function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedStatus = [];

  let checkedOut = books.filter((book) => book.borrows.some((transaction) => !transaction.returned));
  let returnedBooks = books.filter((book) => book.borrows.every((transaction) => transaction.returned));
  borrowedStatus.push(checkedOut,returnedBooks);
  return borrowedStatus;
}

function getBorrowersForBook(book, accounts) { 

  let result = book.borrows.map((borrow) =>  {
    const account = accounts.find((account) => account.id === borrow.id);
     account.returned = borrow.returned;
     return account;
  });

  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
