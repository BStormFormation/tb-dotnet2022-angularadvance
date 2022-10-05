import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatModalDirective } from './directives/mat-modal.directive';



@NgModule({
    declarations: [
        PaginatorComponent,
        MatModalDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PaginatorComponent,
        MatModalDirective
    ]
})
export class SharedModule { }
