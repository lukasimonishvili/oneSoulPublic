import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class WorksService {
  private url = environment.base_url;

  constructor(private http: HttpClient) {}

  fetchWorksWitchData() {
    return this.http.get(this.url + "partners").pipe(map(response => response));
  }

  fetchWorksData() {
    return this.http.get(this.url + "work").pipe(map(response => response));
  }

  fetchWorkById(id: string) {
    return this.http
      .get(this.url + "single-work/" + id)
      .pipe(map(response => response));
  }
}
