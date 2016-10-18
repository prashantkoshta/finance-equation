import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { connectionType, getConnectionType } from "connectivity";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";

@Component({
    selector: 'fn-calculator',
    templateUrl: 'calculator/calculator.component.html',
    styleUrls: ["app.css","calculator/calculator.component.css"]
})
export class CalculatorComponent implements OnInit {

    amount:any;
    rate:any;
    time:any;
    si:any
    t:string;

     @ViewChild("initialContainer") initialContainer: ElementRef;

    constructor(private router: Router,
    private page: Page) {
        this.amount= 1.00;
        this.rate= 1.00;
        this.time = 1;
        this.si=0.00;
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }
    goToHome(){
         this.router.navigate(["/home"]);
    }

    siCalcualte():void{
        console.log(this.amount);
        this.si = (this.amount*this.rate*this.time)/ 100;
    }
    
}