import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { authProviders, appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
/*import { setStatusBarColors, BackendService, LoginService } from "./shared";
*/
import { HomeModule } from "./home/home.module";
import { CalculatorModule } from "./calculator/calculator.module";
//setStatusBarColors();

@NgModule({
  providers: [
    
  ],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    HomeModule,
    CalculatorModule
  ],
  declarations: [
      AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }