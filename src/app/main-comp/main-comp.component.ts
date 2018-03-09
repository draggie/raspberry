import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:80';
  ngOnInit() {
  }

  /**
   * SetHighVoltage
   */
  public SetHighVoltage() {
    this.http.get(this.url + '?action=high').subscribe(data => {
      console.log(data);
    });
  }

  /**
   * SetLowVoltage
   */
  public SetLowVoltage() {
    this.http.get(this.url + '?action=low').subscribe(data => {
      console.log(data);
    });
  }

}
