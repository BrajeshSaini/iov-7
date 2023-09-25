import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutPageRoutingModule } from './layout-routing.module';

import { LayoutPage } from './layout.page';
import { AddPhotoComponent } from '../gallery/add-photo/add-photo.component';
import { GeolocationComponent } from '../geolocation/geolocation.component';
import { BarComponent } from '../bar/bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutPageRoutingModule
  ],
  declarations: [LayoutPage, AddPhotoComponent, GeolocationComponent, BarComponent]
})
export class LayoutPageModule {}
