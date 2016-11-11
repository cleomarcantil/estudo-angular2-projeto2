import { Component, OnInit } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	//moduleId: module.id,
	selector: 'teste',
	template: `
		<p>Comonente Teste</p>
		<div>
			<input type="text" />
		</div>
		<div>
			<a [routerLink]="['/teste', { a:1, b:2 }]">Link 1</a>
			<a [routerLink]="['/teste', { a:1, c: [ 4, 2 ] }]">Link 2</a>

			<button type="button" (click)="mudarParametro({ x: txtParametro.value })">Mudar parâmetro</button>
			<input type="text" #txtParametro value="7" />
		</div>
	`
})
export class TesteComponent implements OnInit {

	currentParams:Object = {};

	constructor(private router: Router, private route : ActivatedRoute) {
		//console.log(router)
		route.params.subscribe(
			(params) => { 
				this.currentParams = params;
				console.log(params);
			}
		);
	}

	ngOnInit() { }

	mudarParametro(params:Object) {
		params = Object.assign({}, this.currentParams, params, { "n-x": 75 });

		params["n-a"] = 89;

		this.router.navigate(['/teste', params]);
	}
}
