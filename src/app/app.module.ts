import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";
// Material
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
// Mock
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {MedicalConceptService} from './medical-concept.service';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [MedicalConceptService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
