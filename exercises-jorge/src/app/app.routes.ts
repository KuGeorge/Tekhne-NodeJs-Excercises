import { Routes, RouterModule } from "@angular/router";
import {RightComponent} from "./right/right.component";
import { Day2Exercise1Component } from './day2-exercise1/day2-exercise1.component';
import { Day2Exercise2Component } from './day2-exercise2/day2-exercise2.component';
import { Day2Exercise3Component } from './day2-exercise3/day2-exercise3.component';
import { Day2Exercise4Component } from './day2-exercise4/day2-exercise4.component';
import { ModuleWithProviders } from "@angular/compiler/src/core";
const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'home',component:RightComponent},
    {path:'day/2/exercise/1',component:Day2Exercise1Component},
    {path:'day/2/exercise/2',component:Day2Exercise2Component},
    {path:'day/2/exercise/3',component:Day2Exercise3Component},
    {path:'day/2/exercise/4',component:Day2Exercise4Component}
];
export const routes:ModuleWithProviders=RouterModule.forRoot(appRoutes);