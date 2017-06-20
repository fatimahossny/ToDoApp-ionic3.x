import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategorypopoverComponent } from './categorypopover';

@NgModule({
  declarations: [
    CategorypopoverComponent,
  ],
  imports: [
    IonicPageModule.forChild(CategorypopoverComponent),
  ],
  exports: [
    CategorypopoverComponent
  ]
})
export class CategorypopoverComponentModule {}
