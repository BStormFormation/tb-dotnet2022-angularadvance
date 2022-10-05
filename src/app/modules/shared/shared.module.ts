import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatModalDirective } from './directives/mat-modal.directive';
import { MatCarouselDirective } from './directives/mat-carousel.directive';
import { ForDirective } from './directives/for.directive';



@NgModule({
    declarations: [
        PaginatorComponent,
        MatModalDirective,
        MatCarouselDirective,
        ForDirective,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PaginatorComponent,
        MatModalDirective,
        MatCarouselDirective,
        ForDirective,
    ]
})
export class SharedModule { }
