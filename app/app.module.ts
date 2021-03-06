import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { authProviders, appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module";
//setStatusBarColors();

@NgModule({
  providers: [
    
  ],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    HomeModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
      AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }