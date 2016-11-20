import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { connectionType, getConnectionType } from "connectivity";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import { SiData} from "../shared";

@Component({
    selector: 'fn-calculator',
    templateUrl: 'calculator/calculator.component.html',
    styleUrls: ["app.css","calculator/calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
    public siData:SiData;
    public amount1:string;
    @ViewChild("initialContainer") initialContainer: ElementRef;
    @ViewChild("amountTxtField") amountTxtField: ElementRef;
    @ViewChild("timeTxtField") timeTxtField: ElementRef;
    @ViewChild("rateTxtField") rateTxtField: ElementRef;
    @ViewChild("resultLab") resultLab: ElementRef;
     
    constructor(private router: Router, private page: Page) {
        this.siData = new SiData();
        this.siData.rate = 5.00;
        this.siData.amount = 15.00;
        this.siData.time = 1;
        this.amount1 = "asdfsafsa";
        
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
       console.log("#CalculatorComponent-siCalcualte:"+this.amountTxtField.nativeElement);
       console.log("Hello, world!");
    }
    
}