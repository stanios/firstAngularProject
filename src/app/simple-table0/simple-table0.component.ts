import { Component, Input } from '@angular/core';
import { User } from '../app.interfaces';
//to kanoume to interface inport app.interfaces.ts

@Component({
  selector: 'app-simple-table0',
  templateUrl: './simple-table0.component.html',
  styleUrls: ['./simple-table0.component.css']
})
export class SimpleTable0Component {
  @Input() userData: User[] = []
  //to Input to bazoume gia na orisoume to userData os ?atribute/propertie? tis klasis, gia na mporesoume na to epiksoume sto htm (opou kai an to xrisimopoisoume)
}
