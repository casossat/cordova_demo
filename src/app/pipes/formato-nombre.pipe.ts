import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatName'
})
export class FormatoNombre implements PipeTransform {

  transform(a: string, b: string): any {
    return a + " + " + b ;
  }

}
