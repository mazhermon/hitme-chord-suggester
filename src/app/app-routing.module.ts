import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HitmeComponent } from './hitme/hitme.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
    {
        path: 'songs',
        loadChildren: () => import('./song-list/song-list.module').then(mod => mod.SongListModule)
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: '', component: HitmeComponent
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
