import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { routes } from './app.routes';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import { LoginComponent } from './login.component';
import { HomeComponent } from './home/home.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
	imports: [BrowserModule, routes],
	declarations: [AppComponent, LoginComponent, HomeComponent, TesteComponent],
	providers: [AuthGuard, AuthService/*, { provide: LocationStrategy, useClass: PathLocationStrategy }*/],
	bootstrap: [AppComponent]
})
export class AppModule {

}
