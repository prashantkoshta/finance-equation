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
    templateUrl: 'calculator/calculator.component.html'
})
export class CalculatorComponent implements OnInit {

     @ViewChild("initialContainer") initialContainer: ElementRef;

    constructor(private router: Router,
    private page: Page) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }
    goToHome(){
         this.router.navigate(["/home"]);
    }
    
}