import { CategorypopoverComponent } from './../categorypopover/categorypopover';
import { Category } from './../../Classes/Category';
import { Task } from './../../Classes/Task';
import { Component } from '@angular/core';
import { ViewController,ToastController,NavParams,PopoverController} from 'ionic-angular';

/**
 * Generated class for the NewTaskComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'new-task',
  templateUrl: 'new-task.html'
})
export class NewTaskComponent {
// task variable title,subject 
  title: string;
  subject:string;
  newTask:Task;
  // I use the same popover for adding new task and view existed task
  editMode:boolean;
  viewMode:boolean;
  categories:any;
  catIndex:number;

  constructor(public newTaskCtrl:ViewController,public toastController:ToastController,public params:NavParams,
              public catPopOver:PopoverController) {
                // in case of add new task 
    this.title = null;
    this.subject = null;
    this.editMode = true;
    this.viewMode = false;
// in case of view existed task
  this.newTask = params.get('viewTask');
  this.categories = Category.getCategories();
  this.catIndex = Category.getSelectedCategory();

  if(this.newTask != null){
   this.title = this.newTask.title;
   this.subject = this.newTask.subject;
   this.editMode = false;
   this.viewMode = true;
  }
}

  closeModal(){
    this.newTaskCtrl.dismiss(null);

  }
  // saving new task or edited task
  saveNewTask(){
      let date = Date.now();
    if(this.title != null && this.subject != null){
      this.newTask = new Task(this.title,this.subject,new Date(date));
      this.newTaskCtrl.dismiss({task:this.newTask,index:this.catIndex});
    } else if (this.title != null && this.subject == null ){
        this.subject = ' no SUbject';
         this.newTask = new Task(this.title,this.subject,new Date(date));
      this.newTaskCtrl.dismiss({task:this.newTask,index:this.catIndex});

    }else if (this.title == null && this.subject != null)
   {
     this.title= ' no Title';
         this.newTask = new Task(this.title,this.subject,new Date(date));
      this.newTaskCtrl.dismiss({task:this.newTask,index:this.catIndex});
   }else
   this.closeModal();
  }
// changing mode in edit task
  editTask(){
    this.editMode = true;
   this.viewMode = false;

  }
  // selecting category for this task

  addTaskToCategory(event){
   // console.log(JSON.stringify(this.categories));
    let popover = this.catPopOver.create(CategorypopoverComponent);
    popover.onDidDismiss(data =>{
      if(data != null)
      this.catIndex = data;
     //console.log('dis data'+this.catIndex);
      });
    popover.present({
      ev: event
    });


  }
}
