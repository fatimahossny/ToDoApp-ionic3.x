import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptionpopoverComponent } from './optionpopover';

@NgModule({
  declarations: [
    OptionpopoverComponent,
  ],
  imports: [
    IonicPageModule.forChild(OptionpopoverComponent),
  ],
  exports: [
    OptionpopoverComponent
  ]
})
export class OptionpopoverComponentModule {}
