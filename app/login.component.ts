import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
	moduleId: module.id,
	template: `
        <h2>LOGIN</h2>
        <p>
          <button (click)="onLogin()" *ngIf="!authService.isLoggedIn">Login</button>
        </p>
	`
})
export class LoginComponent implements OnInit {
	//redirectUrl: string;

	constructor(public authService: AuthService, private route: ActivatedRoute) { }

	ngOnInit() { }

	onLogin() {		
		this.authService.login(this.route);
	}

}