import { Component, OnInit } from '@angular/core';

import { Cards } from '../newest-collections/newest-collections.component';


@Component({
  selector: 'psclone-hot-collections',
  templateUrl: './hot-collections.component.html',
  styleUrls: ['./hot-collections.component.css']
})
export class HotCollectionsComponent implements OnInit {
  
  card: Cards[] = [
    { img: '../../../../../assets/overview/banner-sm6.png', avatar: '../../../../../assets/overview/avatar6.png', name: 'Pancake Squad', value: 84.43607146 },
    { img: '../../../../../assets/overview/banner-sm7.png', avatar: '../../../../../assets/overview/avatar7.png', name: 'Pancake Bunnies', value: 31.23561319 },
    { img: '../../../../../assets/overview/banner-sm8.png', avatar: '../../../../../assets/overview/avatar8.png', name: 'Gamester Apes', value: 1.68177263 },
    { img: '../../../../../assets/overview/banner-sm9.jpg', avatar: '../../../../../assets/overview/avatar9.png', name: 'ShitPunks', value: 1.50506411 },
    { img: '../../../../../assets/overview/banner-sm10.png', avatar: '../../../../../assets/overview/avatar10.png', name: 'BornBadBoys', value: 1.11593457 },
    { img: '../../../../../assets/overview/banner-sm11.png', avatar: '../../../../../assets/overview/avatar11.png', name: 'BornBadGirl', value: 870.56083 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
