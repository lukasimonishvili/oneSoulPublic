import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  private url = environment.base_url;

  constructor(private http: HttpClient) {}

  fetchPeopleData() {
    return this.http.get(this.url + "peoples").pipe(map(response => response));
  }
}
