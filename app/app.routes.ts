import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TesteComponent } from './teste/teste.component';

const appRoutes : Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'teste',
		component: TesteComponent
	}
];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRoutes);

