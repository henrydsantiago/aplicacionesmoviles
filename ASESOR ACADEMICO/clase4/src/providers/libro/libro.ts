import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../modelo/libro';

/**
 * 
 * 
 */

@Injectable()
export class LibroProvider {

  private libros:Libro[];
  
  public getLibros():Libro[]{
    return this.libros;
  }
  public add(libro:Libro){
    this.libros.push(libro)
  }

  constructor() {
    console.log('Hello LibroProvider Provider');
    this.libros = [];
    this.add(new Libro("Harry Potter",200));
    this.add(new Libro("Las aventuras de HuckleBerry Finn",1500));
  }

}
