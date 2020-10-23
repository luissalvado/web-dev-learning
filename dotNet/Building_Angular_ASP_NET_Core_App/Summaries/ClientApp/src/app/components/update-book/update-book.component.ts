import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book: Book;
  // this is going to be our FormGroup
  updateBookForm: FormGroup;

  // service - because we need a service to get a single book and then to send a put request.
  // route - to get the idea of the book from the URL.
  // router - navigate to all books after we have updated the books.
  // formBuilder - to constructor our form group.
  constructor(private service: BookService,
     private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder) { }

  // get the single book and construct our FormGroup.
  ngOnInit() {
    this.service.getBookById(this.route.snapshot.params.id).subscribe(data => {
      // first get the book data.
      this.book = data;
      // create our UpdateBookForm.
      this.updateBookForm = this.formBuilder.group({
        id: [data.id],
        title: [data.title, Validators.required],
        author: [data.author, Validators.required],
        description: [data.description, Validators.compose([Validators.required, Validators.minLength(30)])],
        rate: [data.rate],
        dateStart: [this.formatDate(data.dateStart)],
        dateRead: [this.formatDate(data.dateRead)],
      });
    });
  }

  formatDate(date: Date) {
    if (date) {
      return new Date(date).toISOString().substring(0, 10);
    }
  }

  onSubmit() {
    this.service.updateBook(this.updateBookForm.value).subscribe( data => {
      this.router.navigate(['/books']);
    });
  }

}
