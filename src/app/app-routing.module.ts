import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGeneroComponent } from './generos/crear-genero/crear-genero.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearCinesComponent } from './cines/crear-cines/crear-cines.component';
import { CrearPeliculasComponent } from './peliculas/crear-peliculas/crear-peliculas.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'generos',
    component: IndiceGenerosComponent,
  },
  {
    path: 'generos/crear',
    component: CrearGeneroComponent,
  },
  {
    path: 'actores',
    component: IndiceActoresComponent,
  },
  {
    path: 'actores/crear',
    component: CrearActorComponent,
  },
  {
    path: 'cines',
    component: IndiceCinesComponent,
  },
  {
    path: 'cines/crear',
    component: CrearCinesComponent,
  },
  {
    path: 'peliculas/crear',
    component: CrearPeliculasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
