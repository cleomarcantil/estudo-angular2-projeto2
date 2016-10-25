import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { LoginComponent } from './login.component';
import { HomeComponent } from './home/home.component';
import { TesteComponent } from './teste/teste.component';

const appRoutes : Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'teste',
		component: TesteComponent,
		canActivate: [ AuthGuard ]
	}
];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRoutes);

