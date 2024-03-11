export interface Book {
    bookId: number;
    title: string
    authors: string[]
    totalCopies: number;
    copiesInUse: number;
    type: string;
    isbn: string;
    categories: string[];
}