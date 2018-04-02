import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent{

  @Input() data: any;


}
