import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiUrl = "";

  constructor(private _http: HttpClient) {}

  /* db.collection("cafes").add({
      name: "Tim",
      city: "Newport News"
    }); */
}
