import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {
  constactArray = [
    {name: 'Jackie', telephone: '0925271947', imageUrl: 'assets/imgs/mypict1.jpg'}
    ,{name: 'Jaylerr', telephone: '0925271947', imageUrl: 'assets/imgs/mypict2.jpg'}
    ,{name: 'Jamyjame', telephone: '0925271947', imageUrl: 'assets/imgs/mypict3.jpg'}
    ,{name: 'Porsche', telephone: '0925271947', imageUrl: 'assets/imgs/mypict4.jpg'}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }
  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);
  }

}//end class
