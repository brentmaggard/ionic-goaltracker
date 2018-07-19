import { Component } from '@angular/core';
import {
          IonicPage,
          NavController,
          NavParams,
          Loading,
          LoadingController,
          AlertController,
          Alert
        } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirestoreProvider } from '../../providers/firestore/firestore';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

public createGameForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firestoreProvider: FirestoreProvider,
    formBuilder: FormBuilder
  ) {

    this.createGameForm = formBuilder.group({
      gameDate: ['', Validators.required],
      who: ['', Validators.required]
    });

  }

  createGame(): void {
    const loading: Loading = this.loadingCtrl.create();
    loading.present();

    const gameDate = this.createGameForm.value.gameDate;
    const who = this.createGameForm.value.who;

    this.firestoreProvider
      .createGame(gameDate, who)
      .then(
        () => {
          loading.dismiss().then(() => {
            this.navCtrl.pop();
          });
        },
        error => {
          loading.dismiss().then(() => {
            const alert: Alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }]
            });
            alert.present();
          });
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
