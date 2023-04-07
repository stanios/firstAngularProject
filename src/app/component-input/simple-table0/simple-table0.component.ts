import { Component, Input } from '@angular/core';
import { User } from '../component-input.component';
//to kanoume to interface inport apo tin parent klasi tou

@Component({
  selector: 'app-simple-table0',
  templateUrl: './simple-table0.component.html',
  styleUrls: ['./simple-table0.component.css']
})
export class SimpleTable0Component {
  @Input() userData: User[] = []
  //to Input to bazoume gia na orisoume to userData os ?atribute/propertie? tis klasis, gia na mporesoume na to epiksoume sto htm (opou kai an to xrisimopoisoume)
}
