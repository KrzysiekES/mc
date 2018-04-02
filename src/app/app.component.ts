import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  data: any;
  constructor(private service: AppService) {}
  
  ngOnInit(): void {
    this.service.getData().subscribe( x=> { this.data = x})
  }
}
