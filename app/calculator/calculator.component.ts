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
    amount:number;
    rate:number;
    year:number;
    si:number;
    btnName:string;
    @ViewChild("initialContainer") initialContainer: ElementRef;
    @ViewChild("amountTxtField") amountTxtField: ElementRef;
    @ViewChild("timeTxtField") timeTxtField: ElementRef;
    @ViewChild("rateTxtField") rateTxtField: ElementRef;
    @ViewChild("resultLab") resultLab: ElementRef;
     
    constructor(private router: Router, private page: Page) {
        this.amount = 1.5;
        this.rate =2;
        this.year =1;
        this.si=0.00;
        this.btnName ="Calculate Now";
    }
    ngOnInit() {
        this.page.actionBarHidden = true;
    }
    goToHome(){
         this.router.navigate(["/home"]);
    }

    focusRate(){
        this.rateTxtField.nativeElement.focus();
    }

    focusTime(){
        this.timeTxtField.nativeElement.focus();
    }

    siCalcualte():void{
       this.si = (this.amount * this.rate * this.year ) /100 ;
    }
    
}