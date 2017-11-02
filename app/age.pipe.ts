import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "age",
  pure: false
})


export class AgePipe implements PipeTransform {
  
  transform(input: Animal[], desiredMaturity) {
     var output: Animal[] = [];
     if(desiredMaturity === "juvenileAnimals") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].age <=2) {
           output.push(input[i]);
         }
       }
       return output;
       } else if (desiredMaturity === "matureAnimals") {
         for (var i = 0; i < input.length; i++) {
           if (input[i].age > 2) {
             output.push(input[i]);
           }
         }
         return output;
       } else {
         return input;
       }
  }
}
