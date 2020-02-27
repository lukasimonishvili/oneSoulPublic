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
    let headers = new HttpHeaders({
      "Access-Control-Allow-Headers": "X-Requested-With"
    });

    let options = {
      headers
    };

    let fd = new FormData();
    fd.append("add", "true");
    console.log(fd.getAll("add"));
    return this.http
      .post(this.url + "increaseHi", { add: true })
      .pipe(map(response => response));
  }
}
