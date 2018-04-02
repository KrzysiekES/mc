import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  @Input() data: string;
}
