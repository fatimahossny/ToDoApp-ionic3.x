import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTaskComponent } from './new-task';

@NgModule({
  declarations: [
    NewTaskComponent,
  ],
  imports: [
    IonicPageModule.forChild(NewTaskComponent),
  ],
  exports: [
    NewTaskComponent
  ]
})
export class NewTaskComponentModule {}
