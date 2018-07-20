import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Goal } from '../../models/goals.interface';
import { FirestoreProvider } from '../../providers/firestore/firestore';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public game: Goal
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public firestoreProvider: FirestoreProvider) {
      this.game = this.navParams.get('game');
  }

  deleteGame(gameId: string, gameDate: string): void {
    const alert: Alert = this.alertCtrl.create({
      message: `Are you sure you want to delete ${gameDate} from your list?`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Clicked Cancel');
          },
        },
        {
          text: 'OK',
          handler: () => {
            this.firestoreProvider.deleteGame(gameId).then(() => {
              this.navCtrl.pop();
            });
          },
        },
      ],
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
