import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityService } from 'src/app/core/service/activity.service';
import { IActivityTab } from 'src/app/models/activityTab';

@Component({
  selector: 'psclone-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activityNfts: any;

  totalLength: any;
  page: number = 1;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getAll()
      .subscribe(res => {
        this.activityNfts = res;
      })
  }
}