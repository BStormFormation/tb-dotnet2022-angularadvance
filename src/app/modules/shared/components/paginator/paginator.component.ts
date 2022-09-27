import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
    @Output("left") leftEvent = new EventEmitter<number>();
    @Output("right") rightEvent = new EventEmitter<number>();

    private _page: number = 0;
    @Input("page")
    set Page(v: number) { this._page = v; }
    get Page() { return this._page; }

    constructor() { }

    ngOnInit(): void {
    }

    leftAction() { --this.Page; this.leftEvent.emit(this.Page); }
    rightAction() { ++this.Page; this.rightEvent.emit(this.Page); }
}
