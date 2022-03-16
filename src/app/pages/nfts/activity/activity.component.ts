import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivityService } from 'src/app/core/service/activity.service';
import { IActivityTab } from 'src/app/models/activityTab';

@Component({
  selector: 'psclone-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  s1!: Subscription;
  activityNfts: any;

  totalLength: any;
  page: number = 1;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.s1 = this.activityService.getAll()
      .subscribe(res => {
        this.activityNfts = res;
      });
  }

  ngOnDestroy() {
    this.s1.unsubscribe();
  }
}