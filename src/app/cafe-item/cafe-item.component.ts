import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cafe-item",
  templateUrl: "./cafe-item.component.html",
  styleUrls: ["./cafe-item.component.scss"]
})
export class CafeItemComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() city: string;

  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor() {}

  ngOnInit() {
    // console.log(this.id);
  }

  updateItem() {
    this.update.emit(this.id);
  }

  deleteItem() {
    this.delete.emit(this.id);
  }
}
