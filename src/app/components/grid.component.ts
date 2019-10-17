import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  private gridApi;
  private gridColumnApi;

  constructor() { }

  @ViewChild('agGrid') agGrid;

  ngOnInit() {
  }

  title = 'grid';

    columnDefs = [
      {headerName: 'Product', field: 'Product', filter: "agTextColumnFilter", resizable: true, minWidth: 150,
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
      {headerName: 'Supplement ', field: 'Supplement', sortable: true, filter: true, resizable: true, minWidth: 150},
      {headerName: 'Status', field: 'Status', filter: true, resizable: true, minWidth: 150},
      {headerName: 'Type ', field: 'Type', filter: true, sortable: true, resizable: true, minWidth: 150},
      {headerName: 'Packaging', field: 'Packaging', filter: true, sortable: true, resizable: true, minWidth: 150},
      {headerName: 'Date created/last updated', field: 'DateCreatedLastUpdated', sortable: true, resizable: true, minWidth: 150},
      {headerName: 'Action', field: 'Action', minWidth: 150}
  ];

  rowData = [
    {Product: 'Toyota', Supplement: 'Celica', Status: 'Live', Type: 'Powder', Packaging: '150ml bottle', DateCreatedLastUpdated: 35000, Action: 35000},
    {Product: 'Ford', Supplement: 'Mondeo', Status: 'Draft', Type: 'Capsule', Packaging: '200ml bottle', DateCreatedLastUpdated: 35000, Action: 35000},
    {Product: 'Porsche', Supplement: 'Boxter', Status: 'Archived', Type: 'Tablet', Packaging: '250ml bottle', DateCreatedLastUpdated: 35000, Action: 35000},
    {Product: 'Toyota', Supplement: 'Celica', Status: 'Live', Type: 'Softgel', Packaging: '1kg white tub', DateCreatedLastUpdated: 35000, Action: 35000},
    {Product: 'Ford', Supplement: 'Mondeo', Status: 'Live', Type: 'Capsule', Packaging: '1kg clear tub', DateCreatedLastUpdated: 35000, Action: 35000},
    {Product: 'Porsche', Supplement: 'Boxter', Status: 'Live', Type: 'Powder', Packaging: '150ml bottle', DateCreatedLastUpdated: 35000, Action: 35000}
  ];

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();

    params.api.sizeColumnsToFit();
    window.addEventListener("resize", function() {
      setTimeout(function() {
        params.api.sizeColumnsToFit();
      });
    });

    console.log('btSizeColsToFix ');
  }
}
