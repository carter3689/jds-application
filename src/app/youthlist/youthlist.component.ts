import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-youthlist',
  templateUrl: './youthlist.component.html',
  styleUrls: ['./youthlist.component.scss']
})
export class YouthlistComponent implements OnInit {
  items:Observable<any[]>
  constructor(db: AngularFireDatabase) { 
    this.items = db.list('/intake').valueChanges();
  }

  ngOnInit() {
  }

}
