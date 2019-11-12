import { Component } from '@angular/core';
import { FdDatetime } from '@fundamental-ngx/core';

@Component({
    selector: 'fd-datetime-non-meridian-example',
    templateUrl: './datetime-non-meridian-example.component.html'
})
export class DatetimeNonMeridianExampleComponent {
    date = FdDatetime.getToday();
}
