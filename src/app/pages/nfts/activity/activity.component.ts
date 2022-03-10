import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/core/service/activity.service';
import { IActivityTab } from 'src/app/models/activityTab';

@Component({
  selector: 'psclone-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  totalLength: any;
  page: number = 1;

  tab: IActivityTab[] = [];

  constructor(private tabService: ActivityService) { }

  ngOnInit(): void {
    this.tab = this.tabService.getAll();
  }

}
