import './icon.type';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IconListComponent } from './icon-list/icon-list.component';
import { IconFilterPipe } from './icon-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IconListComponent,
    IconFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
