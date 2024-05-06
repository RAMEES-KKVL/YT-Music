import { Component } from "@angular/core";

@Component({
    selector : "app-category-component",
    templateUrl : "./category.component.html"
})

export class CategoryComponent {
    categories:string[] = [
        "Romance", "Feel good", "Podcasts", "Relax", "Party", "Energize", "Workout", "Sad", "Focus", "Sleep"
    ]
}