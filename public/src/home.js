function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = books.filter((book) => book.borrows[0].returned === false);
  return result.length;
}

function getMostCommonGenres(books) {
  //use .slice() and .sort()
  const result = [];

  books.forEach((book) => {
    let genreExists = result.find((genre) => genre.name === book.genre);
    if(!genreExists) {
      result.push({name:book.genre, count:1});
    } else {
      genreExists.count += 1;
    }
  })
  result.sort((genreA,genreB) => genreA.count > genreB.count ? -1: 1);
  return result.slice(0,5);
}

function getMostPopularBooks(books) {
  return books.map(book => {
    return {
      name:book.title,
      count: book.borrows.length
    }
    }).sort((bookA,bookB) => bookB.count - bookA.count).slice(0,5)
}


function getMostPopularAuthors(books, authors) {
  const popularAuthor = []
  
  authors.forEach((author) => {
    let getAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count:0}
    
    books.forEach((book) => {
      if(book.authorId === author.id) {
        return getAuthor.count += book.borrows.length
      }
    });
    popularAuthor.push(getAuthor);
  });
    return popularAuthor.sort((bookA,bookB) => bookB.count - bookA.count).slice(0,5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
