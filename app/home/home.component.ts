import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";

@Component({
    selector: 'fn-home',
    templateUrl: 'home/home.component.html',
    styleUrls: ["app.css","home/home.component.css"]
})
export class HomeComponent implements OnInit {
     siLabel:string;
     compLabel:string;
     email:string = "nativescriptrocks@telerik.com";

     @ViewChild("initialContainer") initialContainer: ElementRef;

    constructor(private router: Router,
    private page: Page) {
        this.siLabel = "SIMPLE INTEREST";
        this.compLabel = "COMPOUND INTERESET";
        console.log("###########: Hello");
     }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }
    actionSI(){
        console.log("#HomeComponent - Hello, world!");
        this.router.navigate(["/calculator"]);
    }
    actionCI(){
        console.log("#HomeComponent - Hello, world!");
        this.router.navigate(["/calculator"]);
    }
}