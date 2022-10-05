import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Content } from '../../models/plat';
import { ContentService } from '../../services/content.service';

@Component({
    selector: 'plat-composition',
    templateUrl: './plat-composition.component.html',
    styleUrls: ['./plat-composition.component.scss']
})
export class PlatCompositionComponent implements OnInit {
    private _contents: Content[] = [];
    get Contents(): Content[] { return this._contents; }

    @Input("platId")
    set PlatId(v: number) {
        this.$content.findContentsByPlatId(v).subscribe(data => this._contents = data);
    }

    constructor(private $content: ContentService) { }

    ngOnInit(): void {
    }
}
