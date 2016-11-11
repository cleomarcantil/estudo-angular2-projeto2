import { Component, OnInit } from '@angular/core';

@Component({
	//moduleId: module.id,
	selector: 'home',
	template: `
		<p>Componente Home</p>
	`
})
export class HomeComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}