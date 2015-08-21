import {Component, Foreach, Template, If} from 'angular2/angular2';
import {CalendarCell} from 'components/calendar-cell/calendar-cell';
import {searchAllCells} from 'stores/registry';
import _ from '../../node_modules/lodash/index';

var DAYS = _.range(0,50);

@Component({
  selector: 'calendar'
})
@Template({
  url: System.baseURL+'app/components/calendar/calendar.html',
  directives: [
    Foreach,
    If,
    CalendarCell
  ]
})
export class Calendar {
  constructor() {
    this.hours = _.range(0,50);
    this.days = DAYS;
    this.isLoaded = false;
  }
  load() {
    this.isLoaded = true;
  }
  searchAll() {
    searchAllCells();
  }
}
