import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivityService } from 'src/app/core/service/activity.service';

@Component({
  selector: 'psclone-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  s1!: Subscription;

  checkedClassK = '';
  checkedClassP = '';
  checkedClassS = '';
  checkedClassG = '';

  activityNfts: any;
  filterEvent: any;

  totalLength: any;
  page: number = 1;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.s1 = this.activityService.getAll()
      .subscribe(res => {
        this.activityNfts = res;
        this.filterEvent = res;
      });
  }

  // COLLECTION FILTERS 

  filterByS(description: any) {
    console.log('sono stato cliccato')
    this.filterEvent = this.activityNfts
      .filter((a: any) => {
        if (a.description == description || description == '') {
          return a;
        }
      })
    if (this.checkedClassS === '') {
      this.checkedClassS = "checkedFilter";
      this.checkedClassK = '';
      this.checkedClassP = '';
      this.checkedClassG = '';
    }
    else {
      this.clearFilter();
      this.checkedClassS = '';
    }
  }
  filterByG(description: any) {
    console.log('sono stato cliccato')
    this.filterEvent = this.activityNfts
      .filter((a: any) => {
        if (a.description == description || description == '') {
          return a;
        }
      })
    if (this.checkedClassG === '') {
      this.checkedClassS = '';
      this.checkedClassK = '';
      this.checkedClassP = '';
      this.checkedClassG = "checkedFilter";
    }
    else {
      this.clearFilter();
      this.checkedClassG = '';
    }
  }
  filterByK(description: any) {
    console.log('sono stato cliccato')
    this.filterEvent = this.activityNfts
      .filter((a: any) => {
        if (a.description == description || description == '') {
          return a;
        }
      })
    if (this.checkedClassK === '') {
      this.checkedClassS = '';
      this.checkedClassK = "checkedFilter";
      this.checkedClassP = '';
      this.checkedClassG = '';
    }
    else {
      this.clearFilter();
      this.checkedClassK = '';
    }
  }

  filterByP(description: any) {
    console.log('sono stato cliccato')
    this.filterEvent = this.activityNfts
      .filter((a: any) => {
        if (a.description == description || description == '') {
          return a;
        }
      })
    if (this.checkedClassP === '') {
      this.checkedClassS = '';
      this.checkedClassK = '';
      this.checkedClassP = "checkedFilter";
      this.checkedClassG = '';
    }
    else {
      this.clearFilter();
      this.checkedClassP = '';
    }
  }

  // END COLLECTION FILTERS 

  ngOnDestroy() {
    this.s1.unsubscribe();
  }

  filter(event: string) {
    this.filterEvent = this.activityNfts
      .filter((a: any) => {
        if (a.event == event || event == '') {
          return a;
        }
      })
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  clearFilter() {
    this.filterEvent = this.activityNfts;
  }
}