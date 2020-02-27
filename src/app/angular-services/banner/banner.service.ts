import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class BannerService {
  private url = environment.base_url;

  constructor(private http: HttpClient) {}

  fettchBannerData() {
    return this.http.get(this.url + "banner").pipe(map(response => response));
  }
}
