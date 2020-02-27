import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class SeoService {
  private url = environment.base_url;

  constructor(private http: HttpClient) {}

  getSeoData(url: string) {
    return this.http
      .post(this.url + "seo", { pageName: url })
      .pipe(map(response => response));
  }
}
