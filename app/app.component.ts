

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>List of Animals</h1>
    <div *ngFor="let currentAnimal of animals">
    <h3>Name: {{currentAnimal.name}}</h3>
      <div class="row">
        <div class="col-sm-6">
          <h4>Species: {{currentAnimal.species}}</h4>
          <h4>Location: {{currentAnimal.location}}</h4>
          <h4>Caretakers: {{currentAnimal.caretakers}}</h4>
          <h4>Age: {{currentAnimal.age}}</h4>
          <h4>Sex: {{currentAnimal.sex}}</h4>
        </div>
        <div class="col-sm-6">
          <h4>Diet: {{currentAnimal.diet}}</h4>
          <h4>Likes: {{currentAnimal.likes}}</h4>
          <h4>Dislikes: {{currentAnimal.dislikes}}</h4>
          <button (click)="editAnimal(currentAnimal)" class="btn-success btn">Edit</button>
        </div>
      </div>
      <hr>
    </div>
    <div>
      <label>Edit {{selectedAnimal.name}}</label>
      <input [(ngModel)]="selectedAnimal.name">
      <label>Enter Task Priority (1-3):</label>
      <br>
      <input type="radio" name="gender"[(ngModel)]="selectedAnimal.gender" [value]="Male"> Male<br>
      <input type="radio" name="gender" [(ngModel)]="selectedAnimal.gender" [value]="Female"> Female<br>
      <input type="radio" name="gender" [(ngModel)]="selectedAnimal.gender" [value]="Fluid"> Fluid<br>
    </div>

  </div>
  `
})

export class AppComponent {

  animals: Animal[] = [
    new Animal("Bonny", "Gorilla", "Jungle Sciences Enclosure 4", 4,13,"female", "grass and fruit", "swings, art, philosophy", "hipsters and vegan food"),
    new Animal("Simon", "Giraffe", "Outdoor Savanah", 2,4, "male","grass and leaves", "Biccardi", "lions"),
    new Animal("Speck", "Penguine", "Glacier land", 4,5,"fluid","Fish, chips", "slides, sardines", "heat")
  ];
  selectedAnimal: Animal = this.animals[0];

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal
  }

}

export class Animal {
  constructor(public name: string, public species: string, public location: string, public caretakers: number, public age: number, public sex: string, public diet: string, public likes: string, public dislikes: string) { }
}
