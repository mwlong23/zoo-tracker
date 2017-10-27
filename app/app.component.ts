

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>List of Animals</h1>
    <div>
    <h3>Name:</h3>
      <div class="row">
        <div class="col-sm-6">
          <h4>Species:</h4>
          <h4>Name:</h4>
          <h4>Location:</h4>
        </div>
        <div class="col-sm-6">
          <h4>Caretakers:</h4>
          <h4>Likes:</h4>
          <h4>Dislikes:</h4>
        </div>
      </div>
      <hr>
    </div>
  </div>


  `
})

export class AppComponent {

}
