import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="juvenileAnimals">Animals Younger Than Two</option>
    <option value="matureAnimals" >Animals Older Than Two</option>
  </select>
  <h1>List of Animals</h1>
  <div *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
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
        <button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn-success btn">Edit</button>
      </div>
    </div>
    <hr>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";

  onChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit)
  }
};
