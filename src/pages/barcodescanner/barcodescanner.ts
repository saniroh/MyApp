import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the BarcodescannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcodescanner',
  templateUrl: 'barcodescanner.html',
})
export class BarcodescannerPage {
  scanText = "";
  scanFormat = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,private Scanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodescannerPage');
  }

  scan(){
    this.Scanner.scan().then(
      Data => {
      this.scanText = Data.text;
      this.scanFormat = Data.format
      }
      ,
      (error) => {console.log (error)}
    
     );
  }

}//end class
