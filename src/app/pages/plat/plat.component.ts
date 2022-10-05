import { Component, OnInit, ViewChild } from '@angular/core';
import { MatModalDirective } from 'src/app/modules/shared/directives/mat-modal.directive';
import { Plat } from './models/plat';
import { ContentService } from './services/content.service';
import { PlatService } from './services/plat.service';

@Component({
    selector: 'app-plat',
    templateUrl: './plat.component.html',
    styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {
    @ViewChild(MatModalDirective, {static: true}) //Recherche dans le template la directive MatModalDirective
    matModal: MatModalDirective | undefined;

    data: any = {username: 'Flavian'};

    public _platId: any;
    get PlatId(): any { return this._platId; }
    set PlatId(v: any) { this._platId = v; }

    constructor() { }

    ngOnInit(): void {
        // if (this.matModal) {
        //     this.matModal.Options = {inDuration: 300};
        // }
    }

    handleOpenStart() {
        console.log("START");
    }


    onPlatSelected(plat: Plat) {
        this.PlatId = plat.id;
        this.matModal?.open();
    }
}
