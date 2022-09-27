import { Component, OnInit } from '@angular/core';
import { Plat } from './models/plat';
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

    constructor(private $service: PlatService) { }

    ngOnInit(): void {
    }


    onPlatSelected(plat: Plat) {
        console.log(plat);
        // this.$service.findComposition(plat.id).subscribe((composition: any) => {
        //     this.Composition = composition;
        // })
    }
}
