import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutaComponent } from './fruta/fruta.component';
import { ProfesorComponent } from './profesor/profesor.component';

const appRoutes: Routes = [
    //el path se refiere al url ej.. localhost:8080/esto/
    {path: '', component: ProfesorComponent},    //ruta inicial
    {path: 'profesor', component: ProfesorComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: '**', component: FrutaComponent},    //ruta caudno falle, por defecto
    // con ** significa que hay un error en la carga
];

export const appRoutingProviders:any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);