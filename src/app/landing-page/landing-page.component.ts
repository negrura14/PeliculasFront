import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
    {
      this.peliculasEnCines = [
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          poster: 'https://www.originalfilmart.com/cdn/shop/products/spiderman_2002_fr_teaser_original_film_art_d552a3bd-679e-4c8e-8815-b4f9bf91cae9_5000x.jpg?v=1646946972'
        },
        {
          titulo: 'Avengers: End Game',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
          poster: 'https://http2.mlstatic.com/D_NQ_NP_2X_614424-MLA52735656162_122022-F.webp'
        },
      ];
    }
  }
  
  peliculasEnCines: any;
  peliculasProximosEstrenos = [];

}
