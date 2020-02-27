import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ServicesService {
  private url = environment.base_url;

  constructor(private http: HttpClient) {}

  fetchServicesData() {
    return this.http.get(this.url + "services").pipe(map(response => response));
  }
}
