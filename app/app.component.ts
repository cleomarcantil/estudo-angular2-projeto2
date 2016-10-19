import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<h1>Teste</h1>
		<div>
			<a [routerLink]="['/']">Home</a>
			<a [routerLink]="['/teste']">Teste</a>
		</div>
		<div>
			<hr />
			<router-outlet></router-outlet>
			<div>
				...
			</div>
		</div>
	`
})
export class AppComponent {
	
}
