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
//try using a helper function to help get the top five items
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
  return sortAndSlice(result);
}

function getMostPopularBooks(books) {
  const result = books.map(book => {
    return {
      name:book.title,
      count: book.borrows.length
    }
    });
    return sortAndSlice(result);
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
    return sortAndSlice(popularAuthor);
}

function sortAndSlice(arr) {
  return arr.sort((itemA,itemB) => itemB.count - itemA.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
