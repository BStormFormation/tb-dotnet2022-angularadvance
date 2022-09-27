import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'plat-composition',
    templateUrl: './plat-composition.component.html',
    styleUrls: ['./plat-composition.component.scss']
})
export class PlatCompositionComponent implements OnInit {
    private _composition: any;
    get Composition(): any { return this._composition; }
    @Input("composition")
    set Composition(v: any) {
        console.log(v);
        this._composition = v;
    }

    constructor() { }

    ngOnInit(): void {
    }

}
