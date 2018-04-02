import { Component, Input } from '@angular/core';
import { ITechnologyItem } from 'app/technology/technology-item/technology-item.interface';

@Component({
  selector: 'mc-technology-item',
  templateUrl: './technology-item.component.html',
  styleUrls: ['./technology-item.component.scss']
})

export class TechnologyItemComponent {

  @Input() item :ITechnologyItem; 
  constructor() { }

}
