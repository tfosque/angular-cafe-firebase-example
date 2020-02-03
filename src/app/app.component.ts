"use strict";

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, fromEventPattern } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "cafe-tutorial";

  items: Observable<any[]>;
  public data: any[] = [];

  myForm: FormGroup;

  constructor(public db: AngularFirestore, private fb: FormBuilder) {}

  ngOnInit() {
    this.getData();
    // Reactive Form Model
    this.myForm = this.fb.group({
      name: "",
      city: ""
    });
  }

  getData() {
    // this.items = this.db.collection("cafes").valueChanges();
    // this.items.subscribe(console.log);
    let list: any[] = [];

    this.db
      .collection("cafes")
      .get()
      .subscribe(snapshot => {
        snapshot.docs.forEach(doc => {
          // console.log({ ...doc.data(), id: doc.id });

          list.push({ ...doc.data(), id: doc.id });
        });
        // console.log({ list });
        this.data = list;
      });
  }

  deleteItem(id: string) {
    // console.log({ id });
    this.db
      .collection("cafes")
      .doc(id)
      .delete();
    setTimeout(() => {
      this.getData();
    }, 500);
  }

  updateItem(id: string) {
    this.db
      .collection("cafes")
      .doc(id)
      .set({
        name: this.myForm.value.name,
        city: this.myForm.value.city
      });
    console.log(id);

    setTimeout(() => {
      this.getData();
      this.myForm.reset();
    }, 500);
  }

  onSubmit() {
    // e.preventDefault();
    this.db.collection("cafes").add({
      name: this.myForm.value.name,
      city: this.myForm.value.city
    });

    setTimeout(() => {
      this.getData();
      this.myForm.reset();
    }, 500);

    // this.myForm.valueChanges.subscribe(console.log);
  }
}
