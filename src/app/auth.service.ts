import { Injectable } from '@angular/core';
//import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
	isLoggedIn: boolean = false;

	//constructor(private http: Http) { }
	constructor(public router: Router) {
	}

	login(activeRoute: ActivatedRoute) {
		// autenticar no servidor...

		let redirectUrl: string = activeRoute.snapshot.params['redirectUrl'];

		//return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
		
		//console.log(redirectUrl);

		if (redirectUrl == null)
			redirectUrl = '/';

		this.isLoggedIn = true;
		this.router.navigateByUrl(redirectUrl);
	}

	logout() {
		this.isLoggedIn = false;
		this.router.navigate(['/']);
	}
}
