import { BookBuilder } from '../src/model/builder/book.builder';
import { Book } from '../src/model/Book.model';

describe('BookBuilder', () => {
    it ('should build a Book object with all properties correctly set', () => {
        const bookBuilder = new BookBuilder();
        const book = bookBuilder
            .setTitle("The Great Gatsby")
            .setAuthor("F. Scott Fitzgerald")
            .setGenre("Fiction")
            .setPageCount(180)
            .setPublisher("Scribner")
            .setPublicationYear(1925)
            .setIsbn("9780743273565")
            .setLanguage("English")
            .setFormat("Hardcover")
            .setDimensions("5.5 x 8.2 inches")
            .build();

        expect(book.getCategory()).toBe('Book');
        expect(book.getTitle()).toBe('The Great Gatsby');
        expect(book.getAuthor()).toBe('F. Scott Fitzgerald');
        expect(book.getGenre()).toBe('Fiction');
        expect(book.getPageCount()).toBe(180);
        expect(book.getPublisher()).toBe('Scribner');
        expect(book.getPublicationYear()).toBe(1925);
        expect(book.getIsbn()).toBe('9780743273565');
        expect(book.getLanguage()).toBe('English');
        expect(book.getFormat()).toBe('Hardcover');
        expect(book.getDimensions()).toBe('5.5 x 8.2 inches');
    });

    it ('should throw an error if a required field is missing', () => {
        const builder = new BookBuilder() as any;
        builder
            .setTitle("The Great Gatsby")
            .setAuthor("F. Scott Fitzgerald")
            .setGenre("Fiction")
            .setPageCount(180)
            .setPublisher("Scribner")
            .setPublicationYear(1925)
            .setIsbn("9780743273565")
            .setLanguage("English")
            .setFormat("Hardcover");
            

        expect(() => builder.build()).toThrow("Missing required property for Book.");
    });

    // it ('should throw if a property has incorrect type', () => {
    //     const builder = new BookBuilder() as any;
    //     builder
    //         .setTitle("The Great Gatsby")
    //         .setAuthor("F. Scott Fitzgerald")
    //         .setGenre("Fiction")
    //         .setPageCount(180)
    //         .setPublisher("Scribner")
    //         .setPublicationYear(1925)
    //         .setIsbn("9780743273565")
    //         .setLanguage("English")
    //         .setFormat("Hardcover")
    //         .setDimensions(123); // should be string

    //     expect(() => builder.build()).toThrow();
    // });
});