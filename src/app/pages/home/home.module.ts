import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpertsComponent } from './experts/experts.component';
import { SupportComponent } from './support/support.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    ExpertsComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
