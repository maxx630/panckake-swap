import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { LanguagesService } from 'src/app/core/service/languages.service';

@Component({
  selector: 'psclone-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data!: Data[];

  constructor(private langService: LanguagesService) { }

  getData() {
    this.langService.getData()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
      })
  }

  ngOnInit(): void {
    this.getData();
  }

}
