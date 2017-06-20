import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageCategoryPage } from './manage-category';

@NgModule({
  declarations: [
    ManageCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageCategoryPage),
  ],
  exports: [
    ManageCategoryPage
  ]
})
export class ManageCategoryPageModule {}
