import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psclone-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.css']
})
export class AddSectionComponent implements OnInit {

  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showHidden() {
    this.showModal = !this.showModal;
  }

  hide() {
    if (this.showModal = true) {
      this.showModal = false;
    }
  }

}
