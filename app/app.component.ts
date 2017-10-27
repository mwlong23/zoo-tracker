import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `

  `
})


export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) {   }
}
