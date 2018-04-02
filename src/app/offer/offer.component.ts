import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent{

  @Input() data: string;
}
