import { BookService } from "./../../services/book.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  public books: Book[];

  constructor(private service: BookService) {}

  ngOnInit() {
    this.service.getAllBooks().subscribe((data) => {
      this.books = data;
    });
  }
}
