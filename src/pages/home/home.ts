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

  public goalsList: Observable<Goal[]>;

  constructor(public navCtrl: NavController
              public firestoreProvider: FirestoreProvider
            ) {}

  }

  goToCreatePage(): void {
    this.navCtrl.push('CreatePage');
  }

}
