import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { TeamListingComponent } from './team-listing/team-listing.component';
import { DialogFormComponent } from './team-listing/dialog-form/dialog-form.component';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TeamService } from './service/team.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, TeamListingComponent, DialogFormComponent],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
  ],
  exports: [MatFormFieldModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TeamService],
  bootstrap: [AppComponent],
  entryComponents: [DialogFormComponent],
})
export class AppModule {}
