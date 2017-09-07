
import { Injectable } from '@angular/core';

@Injectable()//pode ser injetada em outra classe
export class CursosService {

  constructor() { }
  getCursos(){
     return  ['java' , 'sql' , 'Angular'];
   }



}
