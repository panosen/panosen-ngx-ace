import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    content: string = 'zhangsan';

    disabled: boolean = false;

    mode?: string;

    theme?: string;
}
