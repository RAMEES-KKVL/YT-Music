import { Component } from "@angular/core";

@Component({
    selector : "app-sidebar-menu",
    templateUrl : "./sidebarMenu.component.html"
})

export class SidebarMenu{
    buttonContent = [
        { text : "Home", icon : "bi bi-house-door-fill"},
        { text : "Explore", icon : "bi bi-compass"},
        { text : "Library", icon : "bi bi-music-note-list"}
    ] 
    
}