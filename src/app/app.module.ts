import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginModuleComponent } from './login-module/login-module.component';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { ColorchangeDirective } from './colorchange.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginModuleComponent,
    MyDirectiveComponent,
    ColorchangeDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
