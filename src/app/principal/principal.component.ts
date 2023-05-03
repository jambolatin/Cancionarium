import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent {

   //variables que van a recoger los campos del formulario y la salida
    cancion: string="";
    autor: string="";
    formato: string="";
    playlist: string="";

    //permite acceder a un elemento del DOM que es referenciado con "#"
    @ViewChild("playlist")list!: ElementRef;

    //muestra la salida en un elemento del template html
    mostrarPlaylist(){
      this.playlist += "<p>Canción: " + this.cancion + "</p>" 
                    + "<p>Autor: " + this.autor + "</p>" 
                    + "<p>Formato: " + this.formato + "</p><hr>"
                    //accede al valor del DOM referenciado
                    this.list!.nativeElement.innerHTML = this.playlist;

                    this.cancion = "";
                    this.autor = "";
                    this.formato = "";
                   
    }
};


