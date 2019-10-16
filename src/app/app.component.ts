import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() { }

  ngOnInit() {
  }

  title = 'grid';

  columnDefs = [
    {headerName: 'Product', field: 'Product', sortable: true, filter: true},
    {headerName: 'Supplement ', field: 'Supplement', sortable: true, filter: true},
    {headerName: 'Status', field: 'Status', filter: true},
    {headerName: 'Type ', field: 'Type', filter: true, sortable: true},
    {headerName: 'Packaging', field: 'Packaging', filter: true, sortable: true},
    {headerName: 'Date created/last updated', field: 'DateCreatedLastUpdated', sortable: true},
    {headerName: 'Action', field: 'Action'}
];

rowData = [
  {Product: 'Toyota', Supplement: 'Celica', Status: 35000, Type: 35000, Packaging: 35000, DateCreatedLastUpdated: 35000, Action: 35000},
  {Product: 'Ford', Supplement: 'Mondeo', Status: 32000, Type: 35000, Packaging: 35000, DateCreatedLastUpdated: 35000, Action: 35000},
  {Product: 'Porsche', Supplement: 'Boxter', Status: 72000, Type: 35000, Packaging: 35000, DateCreatedLastUpdated: 35000, Action: 35000}
];
}
