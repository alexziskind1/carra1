import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { NsPath1Component } from "./item/ns-path1.component";
import { NavDoc1Component, NavDoc2Component, NavDocComponent } from "./item/nav-doc.component";
import { LeafDocComponent } from "./item/leaf-doc.component";
import { HomeComponent } from './item/home.component';
import { CategoryComponent } from './item/category.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CategoryComponent,
        ItemsComponent,
        ItemDetailComponent,

        NsPath1Component,
        NavDoc1Component,
        NavDoc2Component,
        LeafDocComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
