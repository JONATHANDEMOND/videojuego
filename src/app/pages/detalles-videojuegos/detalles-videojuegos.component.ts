import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalles-peliculas',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './detalles-videojuegos.component.html',
  styleUrl: './detalles-videojuegos.component.css'
})
export class DetallesVideojuegosComponent {


  ruta = inject(ActivatedRoute)

  videojuegos = [
    {
      id: "j01",
      nombre: 'Asasins Creed',
      precio: 70,
      categoria:"aventura",
      url: "../../../assets/images/assasincredd1.jpg"
    },
    {
      id: "j02",
      nombre: 'Assasins Creed Brotherhot',
      precio: 90,
      categoria:"accion",
      url: "../../../assets/images/brother.jpg"

    },
    {
      id: "j03",
      nombre: 'Samsh Bros',
      precio: 53,
      categoria:"aventura",
      url: "../../../assets/images/smash.png"
    },
    {
      id: "j04",
      nombre: 'God of War Ragnarok',
      precio: 69,
      categoria:"accion",
      url: "../../../assets/images/gow4.jpg"
    },
    {
      id: "j05",
      nombre: 'MineCraft',
      precio: 68,
      categoria:"simulacion",
      url: "../../../assets/images/mine.jpg"
    },
    {
      id: "j06",
      nombre: 'Guilds Wars',
      precio: 85,
      categoria:"RPG",
      url: "../../../assets/images/guild.jpg"
    },
    {
      id: "j07",
      nombre: 'Def Jam Figth',
      precio: 98,
      categoria:"lucha",
      url: "../../../assets/images/def.jpg"
    },
    {
      id: "j08",
      nombre: 'Grand Theft Auto Vice City',
      precio: 34,
      categoria:"lucha",
      url: "../../../assets/images/gta.jpg"
    },
    {
      id: "j09",
      nombre: "Rayman",
      precio: 38,
      categoria:"aventura",
      url: "../../../assets/images/ray.jpg"
    },
    {
      id: "j10",
      nombre: 'Silent Hill',
      precio: 42,
      categoria:"drama",
      url: "../../../assets/images/sh.jpg"
    },
  ]

  juego: any
  id: any

  ngOnInit() {
    this.ruta.params.subscribe(p => {
      console.log(p['idvideojuegos']);
      this.id = p['idvideojuegos']

      this.videojuegos.forEach(element => {
        if (element.id == this.id) {
          this.juego = element
        }
      });

      
      

      
    })
  }

  mensaje() {
    alert("Id del juego: "+this.juego.id)
  }

}
