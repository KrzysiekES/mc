import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  lat: number = 54.4964457;
  lng: number = 18.5379933;
  label="Marine Cover";


  @Input() data: any;
}
