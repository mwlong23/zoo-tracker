import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <div>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    </div>
    <div>
      <new-animal (newAnimalSender)= "addAnimal($event)"></new-animal>
    </div>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal("Bonny", "Gorilla", "Jungle Sciences Enclosure 4", 4,13, "grass and fruit", "swings, art, philosophy", "hipsters and vegan food","female"),
    new Animal("Simon", "Giraffe", "Outdoor Savanah", 2,4,"grass and leaves", "Biccardi", "lions", "male"),
    new Animal("Speck", "Penguine", "Glacier land", 4,5,"Fish, chips", "slides, sardines", "heat","fluid")
  ];


  selectedAnimal: Animal = null;

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }
  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
