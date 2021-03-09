import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { findNavNodeById } from '../nav-data';

@Component({
    selector: 'ns-leaf-doc',
    templateUrl: 'leaf-doc.component.html'
})

export class LeafDocComponent implements OnInit {

    curTitle = '';
    imgSrc = '~/images/chart1.png';
    note = '';

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        const curPath = this.route.snapshot.url[0].path;

        // const nextPath = this.curPath === 'navdoc1' ? 'navdoc2' : 'navdoc1';
        const id = this.route.snapshot.params.id;
        const navNode = findNavNodeById(id);
        this.curTitle = navNode.title;
        this.imgSrc = navNode.imgSrc;
        this.note = navNode.note;

        console.log('CURPATH', curPath);
        console.log('ID', id);

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
}
