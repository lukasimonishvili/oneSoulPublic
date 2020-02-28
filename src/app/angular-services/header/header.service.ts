import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class HeaderService {
  private url = environment.base_url;

  constructor(private http: HttpClient) {}

  fetchHeaderData() {
    return this.http.get(this.url + "header").pipe(map(response => response));
  }

  sayHi() {
    return this.http
      .post(this.url + "increaseHi", { add: true })
      .pipe(map(response => response));
  }
}
