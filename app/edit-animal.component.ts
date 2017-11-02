import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <label>Edit {{childSelectedAnimal.name}}</label>
    <input [(ngModel)]="childSelectedAnimal.name">
    <br>
    <label>Gender: </label>
    <br>
    <div>
      <label>Species: </label>
      <input [(ngModel)]="childSelectedAnimal.species">
    </div>
    <div>
      <label>Location: </label>
      <input [(ngModel)]="childSelectedAnimal.location">
    </div>
    <div>
      <label>Number of Caretakers: </label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
    </div>
    <div>
      <label>Age: </label>
      <input [(ngModel)]="childSelectedAnimal.age">
    </div>

    <div>
      <label>Diet: </label>
      <input [(ngModel)]="childSelectedAnimal.diet">
    </div>
    <div>
      <label>Likes: </label>
      <input [(ngModel)]="childSelectedAnimal.likes">
    </div>
    <div>
      <label>Dislikes</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">
    </div>

      <input type="radio" name="sex"[(ngModel)]="childSelectedAnimal.sex" value="Male"> Male<br>
      <input type="radio" name="sex" [(ngModel)]="childSelectedAnimal.sex" value="Female"> Female<br>
      <input type="radio" name="sex" [(ngModel)]="childSelectedAnimal.sex" value="Fluid"> Fluid<br>

    <button (click)="doneButtonClicked()" class="btn-success btn">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit();
  }

}
