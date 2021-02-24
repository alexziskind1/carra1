import { Component, Directive, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NSRouterLink } from '@nativescript/angular';
import { NavNode, navData, findNavNodeById } from '../nav-data';

type NavNodeRouterLink = {
    navNode: NavNode;
    nsRouterLink: string[];
};

@Directive({
    selector: 'ns-nav-doc'
})
export class NavDocComponent {
    // items: NavNode[] = [];

    itemsRl: NavNodeRouterLink[] = [];
    curTitle = '';
    curPath = '';

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {

        this.curPath = this.route.snapshot.url[0].path;

        const nextPath = this.curPath === 'navdoc1' ? 'navdoc2' : 'navdoc1';
        const id = this.route.snapshot.params.id;
        const navNode = findNavNodeById(id);
        this.curTitle = navNode.title;
        console.log('CURPATH', this.curPath);
        console.log('ID', id);

        this.itemsRl = navNode.childNodes.map((n) => {
            const nnRl: NavNodeRouterLink = {
                navNode: n,
                nsRouterLink: n.childNodes ? [`/${nextPath}`, n.id] : ['/leafdoc', n.id],
            };
            return nnRl;
        });
    }
}

@Component({
    selector: 'ns-nav-doc1',
    templateUrl: 'nav-doc.component.html'
})
export class NavDoc1Component extends NavDocComponent implements OnInit {

}

@Component({
    selector: 'ns-nav-doc2',
    templateUrl: 'nav-doc.component.html'
})
export class NavDoc2Component extends NavDocComponent implements OnInit {

}