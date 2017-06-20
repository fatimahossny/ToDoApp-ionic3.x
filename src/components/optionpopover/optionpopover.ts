import { AlertController, NavParams, ViewController, PopoverController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the OptionpopoverComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'optionpopover',
  templateUrl: 'optionpopover.html'
})
export class OptionpopoverComponent {

// 
  categoryName:string;

  constructor(public editCategory:AlertController,public params:NavParams,public optionPop:ViewController) {
    if(params !=null)
    this.categoryName = this.params.get('categoryName');
    
  }
  // renaming category method
  renameCategory(){
  let categoryPrompt = this.editCategory.create({
      title:'Category Name',
      inputs:[{
        name:'name',
        placeholder:'category Name',
        value:this.categoryName,
      }],
      buttons:[{
        text:'Cancel',
        role:'cancel',
        handler: data => {
          // if cancel button clicked the popover will dismissed with original category name
           this.optionPop.dismiss(this.categoryName);
          }
      },{
        text:'Save',
        handler: data => {
          if(data.name.length>0){
         //  console.log('save clicked'+data.name);
           this.optionPop.dismiss(data.name);
          }
          else{
           this.optionPop.dismiss(this.categoryName);
            
          }
         
            
          }
      }]
    });
    categoryPrompt.setCssClass('txtTitle');
    categoryPrompt.present();
}
// dismiss popover with  object that move  button clicked
moveTasks(){
  this.optionPop.dismiss({move:true});

}
// dismiss popover with  object that delete  button clicked
deleteTasks(){
  this.optionPop.dismiss({delete:true});
}
}
