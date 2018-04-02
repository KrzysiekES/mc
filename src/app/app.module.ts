import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TechnologyComponent } from './technology/technology.component';
import { RealizationsComponent } from './realizations/realizations.component';
import { TeamComponent } from './contact/team/team.component';
import { OfferComponent } from './offer/offer.component';
import { TechnologyItemComponent } from './technology/technology-item/technology-item.component';
import { FooterComponent } from './footer/footer.component';
import { IconsComponent } from './shared/icons/icons.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
    AboutComponent,
    TechnologyComponent,
    RealizationsComponent,
    TeamComponent,
    OfferComponent,
    TechnologyItemComponent,
    FooterComponent,
    IconsComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQjrfcd5IJyv4pRD9jZ1Yd5_GLSBoMPHM'
    }),
    MDBBootstrapModule.forRoot()

  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppModule { }
