import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psclone-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
