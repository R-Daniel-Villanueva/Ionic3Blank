import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConstumerPage } from '../constumer/constumer';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  user:string;
  data:any;
  colorLabel:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data= this.navParams.data;
    this.user= this.navParams.get('user');
    //console.log(this.data);   
    //console.log(this.user);    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  goBack(){
    this.navCtrl.pop();
  }
  costumer(){
    // this.navCtrl.push(ConstumerPage);
    setTimeout(()=>{
      this.colorLabel='danger';
    },3*1000);
  }


}
