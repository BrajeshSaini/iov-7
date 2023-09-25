import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';
import { AddPhotoComponent } from '../gallery/add-photo/add-photo.component';
import { GeolocationComponent } from '../geolocation/geolocation.component';
import { BarComponent } from '../bar/bar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: '',
        component: GeolocationComponent
      },
      {
        path: 'gallery',
        component: AddPhotoComponent
      },
      {
        path: 'geolocation',
        component: GeolocationComponent
      },      
      {
        path: 'bar',
        component: BarComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule { }
