/* import { Component, ViewChild } from "@angular/core";
import {
  EventSettingsModel,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  ResizeService,
  DragAndDropService,
  ScheduleComponent,
  ActionEventArgs
} from "@syncfusion/ej2-angular-schedule";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    ResizeService,
    DragAndDropService
  ]
})
export class AppComponent {
  public selectedDate: Date = new Date(2020, 9, 30);
  public eventSettings: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        Subject: "Testing Event",
        StartTime: new Date(2020, 9, 30, 14, 0),
        EndTime: new Date(2020, 9, 30, 14, 50),
        RecurrenceRule: "FREQ=WEEKLY;BYDAY=FR;INTERVAL=1;",
        RecurrenceException: "20201106T130000Z"
      }
    ]
  };

  @ViewChild("schedule", { static: false })
  public scheduleObj: ScheduleComponent;

  onPopupOpen(args) {
    console.log("popUp args", args.data);
    console.log("getEvent result", this.scheduleObj.getEvents(args.data));
  }

  onActionComplete(args: ActionEventArgs): void {
    console.log("actionComplete", args.requestType, args);

    switch (args.requestType) {
      case "viewNavigate":
      case "dateNavigate":
        this.scheduleObj.refresh();
        break;
      case "toolBarItemRendered":
        break;
      default:
    }
  }
}
 */



import { Component } from '@angular/core';
import { WeekService, MonthService, WorkWeekService, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { defaultData } from './datasource';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  providers: [WeekService, MonthService, WorkWeekService],
  /* template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings"><e-views> <e-view option="Week" startHour="07:00" endHour="15:00"></e-view>
  <e-view option="WorkWeek" startHour="10:00" endHour="18:00"></e-view> <e-view option="Month" [showWeekend]="showWeekend"></e-view></e-views></ejs-schedule>`
 */
  // specifies the template string for the Schedule component
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public selectedDate: Date = new Date(2021, 7, 3);
  public showWeekend: boolean = false;
  public eventSettings: EventSettingsModel = { dataSource: defaultData };
}