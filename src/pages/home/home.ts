import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Goal } from '../../models/goals.interface';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public gameList: Observable<Goal[]>;

  constructor(public navCtrl: NavController,
              public firestoreProvider: FirestoreProvider
            ) {}

  goToCreatePage(): void {
    this.navCtrl.push('CreatePage');
  }


  ionViewDidLoad() {
    this.gameList = this.firestoreProvider.getGameList().valueChanges();
  }

goToDetailPage(game: Goal): void {
  this.navCtrl.push('DetailPage', { game: game });
}


}
