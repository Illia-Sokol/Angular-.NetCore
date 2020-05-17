import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Result {
  check: Check[];
  totalStatus: string;
  totalResponseTime: number;
}

interface Check {
  name: string;
  status: string;
  responseTime: number;
}

@Component({
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})

export class HealtCheckComponent implements OnInit {
  public result: Result;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  ngOnInit() {
    this.http.get<Result>(this.baseUrl + 'hc').subscribe( result => {
      this.result = result;
    }, error => console.log('error'))
  }
}