function findAccountById(accounts, id) {
   return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA,nameB) => nameA.name.last > nameB.name.last ? 1:-1);
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0
  for (let id in books){
    const total = books[id].borrows.filter((book) => book.id === account.id);
     result += total.length;
  }
return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  //chat's code
  return (
    books
      .filter(
        (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
      )
      .map((book) => {
        book["author"] = authors.find((author) => author.id === book.authorId);
        return book;
      })
  );
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
