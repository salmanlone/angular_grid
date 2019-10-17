import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { GridComponent } from './components/grid.component';


import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents(null)
  ],
  providers: [],
  bootstrap: [GridComponent]
})
export class AppModule { }
