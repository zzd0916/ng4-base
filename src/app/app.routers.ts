import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {DirectoryComponent} from './directory/directory.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';

export const appRouters: Routes = [
    {path:'directory',component:DirectoryComponent},
    {path:'directory/:person',component:DirectoryComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'', component:HomeComponent}
]
export const routing: ModuleWithProviders =RouterModule.forRoot(appRouters)