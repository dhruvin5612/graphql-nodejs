import { Book, Author } from '../../../db/models';

const bookQueries = {
    books: async (_, args) => {
        const books = await Book.find();
        // for (let i = 0; i < books.length; i++) {
        //     books[i].author = await Author.findById(books[i].author)
        // }
        return books;
    },
    book: async (_, { id }) => {
        const book = await Book.findById(id);

        return book;
    },
};

export default bookQueries;