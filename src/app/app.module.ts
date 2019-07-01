import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginModuleComponent } from './login-module/login-module.component';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { ColorchangeDirective } from './colorchange.directive';
import { MyListService } from './my-list.service';

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
  providers: [MyListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
