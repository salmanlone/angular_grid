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
    {headerName: 'Product', field: 'Product', filter: "agTextColumnFilter",
      filterParams: {
        filterOptions: ["contains", "notContains"],
        textFormatter: function(r) {
          if (r == null) return null;
          r = r.replace(new RegExp("[àáâãäå]", "g"), "a");
          r = r.replace(new RegExp("æ", "g"), "ae");
          r = r.replace(new RegExp("ç", "g"), "c");
          r = r.replace(new RegExp("[èéêë]", "g"), "e");
          r = r.replace(new RegExp("[ìíîï]", "g"), "i");
          r = r.replace(new RegExp("ñ", "g"), "n");
          r = r.replace(new RegExp("[òóôõøö]", "g"), "o");
          r = r.replace(new RegExp("œ", "g"), "oe");
          r = r.replace(new RegExp("[ùúûü]", "g"), "u");
          r = r.replace(new RegExp("[ýÿ]", "g"), "y");
          return r;
        },
        debounceMs: 0,
        caseSensitive: true,
        suppressAndOrCondition: true}},
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
