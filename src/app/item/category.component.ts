import { Component, Directive, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NSRouterLink, RouterExtensions } from '@nativescript/angular';
import { ItemEventData } from '@nativescript/core';
import { NavNode, navData, findNavNodeById, findNavNodeByCategoryId, findCategoryById } from '../nav-data';


@Component({
    selector: 'ns-category',
    templateUrl: 'category.component.html',
    styleUrls: ['category.component.css']
})
export class CategoryComponent implements OnInit {

    curTitle = '';
    items: NavNode[] = [];

    constructor(private route: ActivatedRoute, private router: RouterExtensions) {
    }

    ngOnInit(): void {

        // this.curPath = this.route.snapshot.url[0].path;

        // const nextPath = this.curPath === 'navdoc1' ? 'navdoc2' : 'navdoc1';
        const catId = this.route.snapshot.params.catId;

        const category = findCategoryById(catId);

        const navNode = findNavNodeByCategoryId(catId);
        this.items.push(navNode);



        this.curTitle = category.title;
        console.log('CUR CAT', this.curTitle);
        console.log('ID', catId);

        /*
        this.itemsRl = navNode.childNodes.map((n) => {
            const nnRl: NavNodeRouterLink = {
                navNode: n,
                nsRouterLink: n.childNodes ? [`/${nextPath}`, n.id] : ['/leafdoc', n.id],
            };
            return nnRl;
        });
        */
    }

    onItemTap(args: ItemEventData) {
        const item = this.items[args.index];
        console.log(item.title);
        this.router.navigate(['navdoc1', item.id]);
    }
}


