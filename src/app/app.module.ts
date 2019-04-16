import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
//import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MccColorPickerModule } from 'src/lib/color-picker';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MccColorPickerModule.forRoot({
      used_colors: ['#000000', '#123456', '#777666','#25FF00','#00C3FF',
    '#FFBD00','#C4FF00']
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
