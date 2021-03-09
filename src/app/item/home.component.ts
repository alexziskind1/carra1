import { Component, OnInit } from '@angular/core';
import { TopLevelCategory, topLevelCats } from '../nav-data';

@Component({
    selector: 'ns-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

    itemsLeft: TopLevelCategory[] = [];
    itemsRight: TopLevelCategory[] = [];

    constructor() { }

    ngOnInit() { 
        this.itemsLeft = topLevelCats.slice(0, 3);
        this.itemsRight = topLevelCats.slice(3, 6);
    }
}
