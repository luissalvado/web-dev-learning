import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book: Book;

  // route -
  // router -
  // service -
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: BookService) { }

  ngOnInit() {
    this.service.getBookById(this.route.snapshot.params.id).subscribe(data => {
      this.book = data;
    });
  }

  deleteBook(id: number) {
    this.service.deleteBook(id).subscribe(dta => {
      this.router.navigate(['/books']);
    });
  }
}
