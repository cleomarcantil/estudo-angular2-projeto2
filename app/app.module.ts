import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { routes } from './app.routes';

import { HomeComponent } from './home/home.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
	imports: [BrowserModule, routes],
	declarations: [AppComponent, HomeComponent, TesteComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
	
}
