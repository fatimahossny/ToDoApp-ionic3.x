import { HomePage } from './../home/home';
import { Category } from './../../Classes/Category';
import { Task } from './../../Classes/Task';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ManageCategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-manage-category',
  templateUrl: 'manage-category.html',
})
export class ManageCategoryPage {
   pages: Array<{title: string, component: any,tasksList:Array<Task>}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCategory:AlertController,
              public toastCtrl:ToastController) {
    this.pages = Category.getCategories();
  }

  ionViewDidLoad() {

   // console.log('ionViewDidLoad ManageCategoryPage');
  }
// deleting the selected category and adding its task to home category 
  deleteCategory(index){
    // Check it is not the last category
    if(index != 0){
      for(let i=0;i<this.pages[index].tasksList.length;i++)
      this.pages[0].tasksList.push(this.pages[index].tasksList[i]);
      // remove the category
       this.pages.splice(index,1);
       //
       if(index == Category.getSelectedCategory()) 
           Category.setSelectedCategory(0);
           Category.setCategories(this.pages);

             let toast = this.toastCtrl.create({
              message: 'One Category has been deleted',
              duration: 3000
              });
                 toast.present();
    }else{
             let toast = this.toastCtrl.create({
              message: "Can't delete the main Category",
              duration: 3000
              });
              toast.present();
      //console.log("can't delete the last Category");
    }
  }
 // editing Category Name
  editCategory(index){
  let categoryPrompt = this.alerCategory.create({
      title:'Category Name',
      inputs:[{
        name:'name',
        placeholder:'category Name',
        value:this.pages[index].title
      }],
      buttons:[{
        text:'Cancel',
        role:'cancel',
        handler: data => {
          let toast = this.toastCtrl.create({
              message: "Cancel" ,
              duration: 3000
              });
              toast.present();
              //console.log('cancel edit');
          }
      },{
        text:'Save',
        handler: data => {
          if(data.name.length>0){
          // console.log('save clicked'+data.name);
           this.pages[index].title = data.name;
           let toast = this.toastCtrl.create({
              message: "Category Name has been saved" ,
              duration: 3000
              });
              toast.present();
          }
          else{
          //  console.log('enter Name');
            let toast = this.toastCtrl.create({
              message: "please write Category name" ,
              duration: 3000
              });
              toast.present();
          }
         
            
          }
      }]
    });
    categoryPrompt.setCssClass('txtTitle');
    categoryPrompt.present();
}
  // adding new Category 
 addCategory(){
    let categoryPrompt = this.alerCategory.create({
      title:'Category Name',
      inputs:[{
        name:'name',
        placeholder:'category Name'
      }],
      buttons:[{
        text:'Cancel',
        handler: data => {
            let toast = this.toastCtrl.create({
              message: "Cancel",
              duration: 3000
              });
              toast.present();
          }
      },{
        text:'Save',
        handler: data => {
           // console.log('save clicked'+data.name);
           if(data.name.length>0){
            this.pages.push({title:data.name,component:HomePage,tasksList:new Array<Task>()});
             Category.setCategories(this.pages);
             let toast = this.toastCtrl.create({
              message: "One Category has been added" ,
              duration: 3000
              });
              toast.present();
           }
          }
      }]
    });
   categoryPrompt.setCssClass('txtTitle');
    categoryPrompt.present();
  }

}
