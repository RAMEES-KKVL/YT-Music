import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector : "app-sign-in-button",
    templateUrl : "./signInButton.component.html",
    styleUrls : ["./signInButton.component.css"]
})

export class SignInButton{
    @Input() buttonStyle:string = ''
    @Output() buttonClicked = new EventEmitter();

    emitTheClickEvent() {
        this.buttonClicked.emit();
    }
}