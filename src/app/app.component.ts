import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  _text: string = "Sample Text";
  _disabled: boolean = true;
  _inputText: string = "";

  botonClickado(event: any): void {
    console.log(event)
  }

  listanombres: string[] = ["Bryan","Nicolai","Juan","Manuel","Sefir","Ardnass","Morgana","Clementine","Sarah"];
  valor1: string="";
  valor2: number = 0;
  valor3: number = 0;
  valor4: number = 0;
  valor5: number = 0;

  guardado1: string="";
  guardado2: number = 0;
  guardado3: number = 0;
  guardado4: number = 0;
  guardado5: number = 0;

  GenerarAleatorio(event: any): void {
    this.valor1 = this.listanombres[Math.floor(Math.random() * 8)];
    this.valor2 = Math.floor(Math.random() * 11);
    this.valor3 = Math.floor(Math.random() * 11);
    this.valor4 = Math.floor(Math.random() * 11);
    this.valor5 = Math.floor(Math.random() * 11);
  }

  GuardarDatos(event: any): void {
    this.guardado1 = this.valor1;
    this.guardado2 = this.valor2;
    this.guardado3 = this.valor3;
    this.guardado4 = this.valor4;
    this.guardado5 = this.valor5;
  }

}
