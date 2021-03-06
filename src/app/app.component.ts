import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
	selector: 'my-app',
	template: `
		<div class="container">
			<h1>Teste <i class="fa fa-user"></i></h1>
			<div>
				<a [routerLink]="['/']">Home</a>
				<a [routerLink]="['/teste']">Teste</a>
	
				<button (click)="authService.logout()" *ngIf="authService.isLoggedIn" style="float: right;">Logout</button>
			</div>
			<div>
				<hr />
				<router-outlet></router-outlet>
				<div>
					...
				</div>
			</div>
		</div>
	`
})
export class AppComponent {
	
	constructor(public authService: AuthService) { }
	
}
