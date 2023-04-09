import { Component } from '@angular/core';
import { orderBy } from 'lodash-es';
import { User } from '../app.interfaces';


@Component({
  selector: 'app-component-input',
  templateUrl: './component-input.component.html',
  styleUrls: ['./component-input.component.css']
})
export class ComponentInputComponent {
  userData: User[] = [
    {firstname: "John", lastname: "Doe", age: 20},
    {firstname: "Jane", lastname: "Smith", age: 19},
    {firstname: "Kendick", lastname: "Lamar", age: 35},
    {firstname: "Asap", lastname: "Rocky", age: 30},
    {firstname: "Double", lastname: "Double", age: 30}
  ]

  sortByAgeDesc() {
    this.userData = orderBy(this.userData, ['age'], ['desc'])
  }

  sortByAgeAsc() {
    this.userData = orderBy(this.userData, ['age'], ['asc'])
  }

  sortByAgeDescLastDesc() {
    this.userData = orderBy(this.userData, ['age', 'lastname'], ['desc', 'desc'])
  }

  init() {
    this.userData = [
      {firstname: "John", lastname: "Doe", age: 20},
      {firstname: "Jane", lastname: "Smith", age: 19},
      {firstname: "Kendick", lastname: "Lamar", age: 35},
      {firstname: "Asap", lastname: "Rocky", age: 30},
      {firstname: "Double", lastname: "Double", age: 30}
    ]
  }
}
