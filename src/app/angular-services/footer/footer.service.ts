import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class FooterService {
  private url = environment.base_url;

  constructor(private http: HttpClient) {}

  fetchFooterData() {
    return this.http.get(this.url + "footer").pipe(map(response => response));
  }
}
