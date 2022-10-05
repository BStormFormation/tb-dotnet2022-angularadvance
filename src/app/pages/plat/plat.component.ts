import { Component, OnInit } from '@angular/core';
import { Plat } from './models/plat';
import { ContentService } from './services/content.service';
import { PlatService } from './services/plat.service';

@Component({
    selector: 'app-plat',
    templateUrl: './plat.component.html',
    styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {
    public _composition: any;
    get Composition(): any { return this._composition; }
    set Composition(v: any) { this._composition = v; }

    constructor(private $service: PlatService, private $content: ContentService) { }

    ngOnInit(): void {
        this.$content.State$.subscribe(state => console.log(state));
    }


    onPlatSelected(plat: Plat) {
        console.log(plat);
        this.$content.findContentsByPlatId(plat.id)
        // this.$service.findComposition(plat.id).subscribe((composition: any) => {
        //     this.Composition = composition;
        // })
    }
}
