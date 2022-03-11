import { Injectable } from '@angular/core';
import { mocks } from 'src/app/mocks/mocks';
import { IActivityTab } from 'src/app/models/activityTab';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  tabs: IActivityTab[] = mocks;

  constructor() { }

  getAll(): IActivityTab[] {
    return this.tabs;
  }
}
