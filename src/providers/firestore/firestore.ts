import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Goal } from '../../models/goals.interface';

/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {
  constructor(public firestore: AngularFirestore) {}

  createGame(
    gameDate: Date,
    who: string
  ): Promise<void> {
    const id = this.firestore.createId();

    return this.firestore.doc('goals/' + id).set({
      id,
      gameDate,
      who,
    });
  }

  getGameList() : AngularFirestoreCollection<Goal> {
    return this.firestore.collection('goals');
  }

}
