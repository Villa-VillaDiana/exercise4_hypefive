import { Component } from '@angular/core';
import { Book } from '../model/books';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  title: string;
  author: string;
  rating: string;
  publication_year: number;
  language: string;

  book_library: Book[] = [
    {
      book_id: 0,
      book_title: 'The Little Prince',
      book_author: 'Antoine de Saint-Exupery',
      book_rating: '5 stars',
      book_publication_year: 1943,
      book_language: 'French',
    },
    {
      book_id: 1,
      book_title: 'The Love Hypothesis',
      book_author: 'Ali Hazelwood',
      book_rating: '5 stars',
      book_publication_year: 2021,
      book_language: 'English',
    },
    {
      book_id: 2,
      book_title: 'Daisy Darker',
      book_author: 'Alice Feeney',
      book_rating: '5 stars',
      book_publication_year: 2022,
      book_language: 'English',
    },
  ];
  //Temporarily save the book_id
  tempId = {
    book_id: null,
  };

  addBook() {
    const newBook = {
      book_id: this.book_library.length,
      book_title: this.title,
      book_author: this.author,
      book_rating: this.rating,
      book_publication_year: this.publication_year,
      book_language: this.language,
    };
    //resets the input field
    this.book_library.push(newBook);
    this.title = '';
    this.author = '';
    this.rating = '';
    this.publication_year = null;
    this.language = '';
  }
  //populate the input field
  getBookDetails(bookId: number) {
    //find the book to update
    const bookToUpdate = this.book_library.find(
      (book) => book.book_id === bookId
    );
    if (bookToUpdate) {
      this.title = bookToUpdate.book_title;
      this.author = bookToUpdate.book_author;
      this.rating = bookToUpdate.book_rating;
      this.publication_year = bookToUpdate.book_publication_year;
      this.language = bookToUpdate.book_language;
    }
    //store the book_id
    this.tempId = bookToUpdate;
  }
  //update the book details
  updateBookDetails() {
    //find the book using the saved book_id in the temporary variable
    const bookToUpdate = this.book_library.find(
      (book) => book.book_id === this.tempId.book_id
    );
    //pass the new value
    if (bookToUpdate) {
      bookToUpdate.book_title = this.title;
      bookToUpdate.book_author = this.author;
      bookToUpdate.book_rating = this.rating;
      bookToUpdate.book_publication_year = this.publication_year;
      bookToUpdate.book_language = this.language;
    }
    //reset the input field
    this.title = '';
    this.author = '';
    this.rating = '';
    this.publication_year = null;
    this.language = '';
  }

  deleteBook(bookId: number) {
    if (bookId !== -1) {
      this.book_library.splice(bookId, 1);
    }
  }
}
