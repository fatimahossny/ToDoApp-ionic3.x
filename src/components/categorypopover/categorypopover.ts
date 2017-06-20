import { Category } from './../../Classes/Category';
import { NavParams, ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
/**
 * Generated class for the CategorypopoverComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'categorypopover',
  templateUrl: 'categorypopover.html'
})
export class CategorypopoverComponent {
  // all categories 
  categories:any;
  // selected category index
  selectedCategory:number;
  // the new selected category to add task in it .
  newIndex:number;
  constructor(public params:NavParams,public categoryViewController:ViewController) {
    this.categories = Category.getCategories();
    this.selectedCategory = Category.getSelectedCategory();
    this.newIndex= this.selectedCategory;
  }
  /**
   * 
   * @memberof CategorypopoverComponent
   * @description send back index to the new category 
   */
  close() {
    this.categoryViewController.dismiss(this.newIndex);
  }
}
