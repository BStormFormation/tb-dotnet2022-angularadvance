import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'plats', loadChildren: () => import('./pages/plat/plat.module').then(m => m.PlatModule) },
    { path: '**', redirectTo: '/plats'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
