import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../modules/shared/shared.module';
import { PlatRoutingModule } from './plat-routing.module';
import { PlatComponent } from './plat.component';
import { PlatListComponent } from './components/plat-list/plat-list.component';
import { PlatService } from './services/plat.service';
import { PlatCompositionComponent } from './components/plat-composition/plat-composition.component';


@NgModule({
    declarations: [
        PlatComponent,
        PlatListComponent,
        PlatCompositionComponent
    ],
    imports: [
        CommonModule,
        PlatRoutingModule,
        SharedModule
    ],
    providers: [
        PlatService
    ]
})
export class PlatModule { }
