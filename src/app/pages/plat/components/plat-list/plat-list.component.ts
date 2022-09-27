import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListState, Plat } from '../../models/plat';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { PlatService } from './../../services/plat.service';
import { PageState } from 'src/app/modules/shared/types/state.type';

@Component({
    selector: 'plat-list',
    templateUrl: './plat-list.component.html',
    styleUrls: ['./plat-list.component.scss']
})
export class PlatListComponent implements OnInit {
    @Output("selectedPlat")
    private selectedPlatEvent = new EventEmitter<Plat>();
    currentPage: number = 1;
    set SelectedPlat(plat: Plat) {
        this.selectedPlatEvent.emit(plat);
    }

    private _plats: Plat[] = [];
    set Plats(v: Plat[]) { this._plats = v; }
    get Plats() { return this._plats; }

    private _isLoading: boolean = false;
    get IsLoading() { return this._isLoading; }
    set IsLoading(v: boolean) { this._isLoading = v; }

    constructor(private $service: PlatService) {
        this.$service.State$.subscribe((state: PageState<Plat>) => {
            this.IsLoading = state.loading;
            this.Plats = state.data;
            console.log(state);
        })
        // this.$service.subscribe((state: PlatState) => {
        //     console.log(state);
        //     this.IsLoading = state.loading;
        //     this.Plats = state.data;
        // })
    }

    ngOnInit(): void {
        this.$service.findPage()
    }

    getPrevious(page: number) {
        this.currentPage = page;
        this.$service.findPage(this.currentPage);
    }
    getNext(page: number) {
        this.currentPage = page;
        this.$service.findPage(this.currentPage);
    }
}
