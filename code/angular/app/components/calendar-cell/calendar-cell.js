import {Component, Foreach, Template, If} from 'angular2/angular2';
import {addCell} from 'stores/registry';
import {BindingPropagationConfig} from 'angular2/core';

var randomMillis = function() {
  return  Math.floor(Math.random() * 300);
}

var getRandomColor = function () {
    return '#' +
        (function aaaaaa(color) {
            return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
            && (color.length == 6) ? color : aaaaaa(color);
        })('');
}
@Component({
  selector: 'calendar-cell'
})
@Template({
  url: System.baseURL+'app/components/calendar-cell/calendar-cell.html',
  directives: [
    Foreach, If
  ]
})
export class CalendarCell {
	bpc;

  constructor(bpc:BindingPropagationConfig) {
    this.isPure = true;
    this.bpc = bpc;
    if (this.isPure) this.bpc.shouldBePropagated();

    addCell(this);
    this.status = {
      isSearching: false,
      searchResults: {
        options: randomMillis()

      },
      background:'#fff'
    }
  }
  cellClicked() {
    var alreadySearching = this.status.isSearching;
    this.status.isSearching = !alreadySearching;

    if (!alreadySearching) {
      var self = this;
      self.isSearching = true;
      if (this.isPure) this.bpc.shouldBePropagated();
      setTimeout(() => {
        self.status.isSearching = false;
        self.status.searchResults.options =  randomMillis();
        self.status.background = getRandomColor();
          this.bpc.shouldBePropagated();
      }, 0);
    }
  }
  showSpinner() {
    return this.status.isSearching;
  }
  hideSpinner() {
    return !this.status.isSearching;
  }
  showTime() {
    return !this.status.isSearching && this.status.searchResults.options === null;
  }
  showSearchResults() {
    return !this.status.isSearching && this.status.searchResults.options !== null;
  }
}

