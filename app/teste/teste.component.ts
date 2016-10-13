import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'teste',
	template: `
		<p>Comonente Teste</p>
	`
})
export class TesteComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}