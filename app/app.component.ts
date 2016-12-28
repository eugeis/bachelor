import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	styles: [`
		ee-railroad {
			display: flex;
			flex: 1;
			height: 100%;
		}
	`],
	template: `<ee-railroad></ee-railroad>`
})
export class AppComponent  { }
