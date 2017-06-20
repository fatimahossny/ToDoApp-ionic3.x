import { ManageCategoryPage } from './../pages/manage-category/manage-category';
import { Category } from './../Classes/Category';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, NavController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Task } from './../Classes/Task';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  tasksList:Array<Task>;
  pages: Array<{title: string, component: any,tasksList:Array<Task>}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public alerCategory:AlertController,public toastCtrl:ToastController) {
    this.initializeApp();
    this.tasksList = new Array<Task>();
    for(let i=0;i<9;i++){
      let task = new Task("title of "+i,"subject of title "+i,new Date(Date.now()),new Date('2017-05-26'),new Date('2017-05-26')
                            ,'2:26','4:00','no image to show');
     this.tasksList.push(task);
    }

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage,tasksList:this.tasksList}
    ];

     // to set array of categories for the first time before click  
    Category.setCategories(this.pages);
   
    // this.openPage(this.pages[0]);
    // let hpage = this.pages[0];
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page,_index:number) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
     Category.setCategories(this.pages);
     Category.setSelectedCategory(_index);
    this.nav.setRoot(page.component);
  }
  addCategory(){
    let categoryPrompt = this.alerCategory.create({
      title:'Category Name',
      inputs:[{
        name:'name',
        placeholder:'category Name',
        value:null
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
              message: 'One Category has been added',
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
  getCatOptions(){
    this.nav.push(ManageCategoryPage);
   
  
  }
}
