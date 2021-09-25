import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  public currentResult: number = 0;

  public barResults: any[] = [
    { title: "Duel", year: "1971" },
    { title: "The Sugarland Express", year: "1974" },
    { title: "Jaws", year: "1975" },
    { title: "Close Encounters of the Third Kind", year: "1977" },
    { title: "1941", year: "1979" },
  ];
  constructor() {}

  ngOnInit() {}

  onSearchKeyDown(event: any): void {
    if (this.barResults.length > 0) {
      if (event.keyCode == 40) {
        this.setCurrentResult("subtract");
      } else if (event.keyCode == 38) {
        this.setCurrentResult("add");
      }
    }
  }

  setCurrentResult(op: string): void {
    if (op == "add") {
      this.currentResult =
        this.currentResult - 1 < 0
          ? this.barResults.length
          : this.currentResult - 1;
    } else if (op == "subtract") {
      this.currentResult =
        this.currentResult + 1 > this.barResults.length
          ? 0
          : this.currentResult + 1;
    }
  }
}
