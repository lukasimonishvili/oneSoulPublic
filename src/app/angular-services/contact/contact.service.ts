import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  private url = environment.base_url;

  constructor(private http: HttpClient) {}

  fetchContactData() {
    return this.http.get(this.url + "contact").pipe(map(response => response));
  }

  sendMessage(payload) {
    let headers = new HttpHeaders({
      "Access-Control-Allow-Headers": "X-Requested-With"
    });

    let options = {
      headers
    };

    return this.http
      .post(this.url + "contact-us", payload)
      .pipe(map(response => response));
  }
}
