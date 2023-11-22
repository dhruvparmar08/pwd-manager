import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  vaultData: any;

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.vaultData = localStorage.getItem('vaultData') ?? [];

    if(this.vaultData.length > 0) {
      this.vaultData = JSON.parse(this.vaultData);
    }
  }
}
