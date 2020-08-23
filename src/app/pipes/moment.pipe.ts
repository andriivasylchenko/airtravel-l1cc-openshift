import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(date, type, format) {

    // in case of duration type, provide custom duration string output
    if (type == "duration") {
      let duration = moment.duration(date);
      return(duration.hours()+" hours "+duration.minutes()+" minutes ");
    } else {

      // otherwise provide date string output based on requested format
      return moment(date).format(format);
    }
  }

}
