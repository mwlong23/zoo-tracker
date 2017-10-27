import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>New Animal:</h1>

      <div>
        <label>Name: </label>
        <input #newName>
      </div>
      <div>
        <label>Species: </label>
        <input #newSpecies>
      </div>
      <div>
        <label>Location: </label>
        <input #newLocation>
      </div>
      <div>
        <label>Number of Caretakers: </label>
        <input #newCaretakers>
      </div>
      <div>
        <label>Age: </label>
        <input #newAge>
      </div>

      <div>
        <label>Diet: </label>
        <input #newDiet>
      </div>
      <div>
        <label>Likes: </label>
        <input #newLikes>
      </div>
      <div>
        <label>Dislikes</label>
        <input #newDislikes>
      </div>
      <div>
      <label>Gender:</label>
      <select #newSex>
        <option [value]="Male"> Male</option>
        <option [value]="Female"> Female</option>
        <option [value]="Fluid"> Fluid</option>
      </select>
      <br>
        <button (click)="submitForm(newName.value, newSpecies.value, newLocation.value, newCaretaker.value, newAge.value, newDiet.value, newLikes.value, newDislikes.value, newSex.value)">Done</button>
      </div>

  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, species: string, location: string, caretaker: number, age: number, diet: string, likes: string, dislikes: string, sex: string){

    var newAnimalToAdd: Animal = new Animal(name, species, location, caretaker, age, diet, likes, dislikes, sex);

    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
