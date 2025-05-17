import logger from '../../util/logger';
import { Book } from '../Book.model';

export class BookBuilder {
    private title!: string;
    private author!: string;
    private genre!: string;
    private pageCount!: number;
    private publisher!: string;
    private publicationYear!: number;
    private isbn!: string;
    private language!: string;
    private format!: string;
    private dimensions!: string;

    


    public setTitle(title: string): BookBuilder {
        this.title = title;
        return this;
    }

    public setAuthor(author: string): BookBuilder {
        this.author = author;
        return this;
    }

    public setGenre(genre: string): BookBuilder {
        this.genre = genre;
        return this;
    }

    public setPageCount(pageCount: number): BookBuilder {
        this.pageCount = pageCount;
        return this;
    }
    public setPublisher(publisher: string): BookBuilder {
        this.publisher = publisher;
        return this;
    }   

    public setPublicationYear(publicationYear: number): BookBuilder {
        this.publicationYear = publicationYear;
        return this;
    }
    public setIsbn(isbn: string): BookBuilder {
        this.isbn = isbn;
        return this;
    }
    public setLanguage(language: string): BookBuilder {
        this.language = language;
        return this;
    }   

    public setFormat(format: string): BookBuilder {
        this.format = format;
        return this;
    }
    public setDimensions(dimensions: string): BookBuilder {
        this.dimensions = dimensions;
        return this;
    }
    public build(): Book {
        const requiredproperties=[
            this.title,
            this.author,
            this.genre,
            this.pageCount,
            this.publisher,
            this.publicationYear,
            this.isbn,
            this.language,
            this.format,
            this.dimensions
        ]
        for (const property of requiredproperties){
            if(!property){
                logger.error("Missing required property for Book.");
                throw new Error("Missing required property for Book.");
            }
        }
        return new Book(
            this.title,
            this.author,
            this.genre,
            this.pageCount,
            this.publisher,
            this.publicationYear,
            this.isbn,
            this.language,
            this.format,
            this.dimensions
        );
    }
}