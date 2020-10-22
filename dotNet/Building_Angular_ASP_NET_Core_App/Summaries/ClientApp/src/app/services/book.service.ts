import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BookService {
  _baseURL: string = "api/Books";

  constructor(private http: HttpClient) {}

  getAllBooks() {
    console.log(this._baseURL);
    return this.http.get<Book[]>(this._baseURL + "/GetBooks");
  }
}
