import { NgModule } from "@angular/core";
import { Route, Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { NsPath1Component } from './item/ns-path1.component';
import { NavDoc1Component, NavDoc2Component, NavDocComponent } from './item/nav-doc.component';
import { LeafDocComponent } from './item/leaf-doc.component';
import { NavNode } from './nav-data';
import { HomeComponent } from "./item/home.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "path1/p1", component: NsPath1Component },
    { path: "navdoc1/:id", component: NavDoc1Component },
    { path: "navdoc2/:id", component: NavDoc2Component },
    { path: "leafdoc/:id", component: LeafDocComponent },
];

function getRecRouteFromNavNode(n: NavNode, parentPath: string): Route {
    if (n.childNodes && n.childNodes.length > 0) {

    }

    return { path: `parentPath/${n.id}` };
}


@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
