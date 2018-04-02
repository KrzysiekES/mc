import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {

  @Input() data: any;

}
