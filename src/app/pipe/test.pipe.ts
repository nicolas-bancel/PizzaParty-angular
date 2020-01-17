import { Pipe, PipeTransform } from '@angular/core';
import { ViewCompileResult } from '@angular/compiler/src/view_compiler/view_compiler';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args);
    let before = args[0] || ''; //on verifie si la clé du tableau est vide
    let after = args[1] ||'';
    return before + value + after;

    // return value.toUpperCase();

  }

}
