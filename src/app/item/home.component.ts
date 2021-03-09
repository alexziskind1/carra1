import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { TopLevelCategory, topLevelCats } from '../nav-data';

@Component({
    selector: 'ns-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

    itemsLeft: TopLevelCategory[] = [];
    itemsRight: TopLevelCategory[] = [];

    constructor(private router: RouterExtensions) { }

    ngOnInit() { 
        this.itemsLeft = topLevelCats.slice(0, 3);
        this.itemsRight = topLevelCats.slice(3, 6);
    }

    onItemTap(catId: string) {
        this.router.navigate(['category', catId]);
    }
}
