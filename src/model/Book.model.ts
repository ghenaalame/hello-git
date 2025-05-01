import { ItemCatagory, item } from "./item.model";

export class Book implements item {
    private title: string;
    private author: string;
    private genre: string;
    private pageCount: number;
    private publisher: string;
    private publicationYear: number;
    private isbn: string;
    private language: string;
    private format: string;
    private dimensions: string;

    constructor(
        title: string,
        author: string,
        genre: string,
        pageCount: number,
        publisher: string,
        publicationYear: number,
        isbn: string,
        language: string,
        format: string,
        dimensions: string
    ) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pageCount = pageCount;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
        this.isbn = isbn;
        this.language = language;
        this.format = format;
        this.dimensions = dimensions;
    }

    getCategory(): ItemCatagory {
        return ItemCatagory.Book;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getGenre(): string {
        return this.genre;
    }

    getPageCount(): number {
        return this.pageCount;
    }

    getPublisher(): string {
        return this.publisher;
    }

    getPublicationYear(): number {
        return this.publicationYear;
    }

    getIsbn(): string {
        return this.isbn;
    }

    getLanguage(): string {
        return this.language;
    }

    getFormat(): string {
        return this.format;
    }

    getDimensions(): string {
        return this.dimensions;
    }
}