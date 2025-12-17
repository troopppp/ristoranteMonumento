import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-ristorante-page',
  imports: [RouterLink, NgFor],
  templateUrl: './ristorante-page.component.html',
  styleUrls: ['./ristorante-page.component.scss']
})
export class RistorantePageComponent implements OnInit, OnDestroy {
  gallerySlides = [
    {
      image: 'assets/vista_alto_borgo_01.jpeg',
      title: 'Storia millenaria',
      caption: 'Nel cuore di Ostia Antica, dove le rovine romane raccontano secoli di storia e il Monumento custodisce tradizioni dal 1884.'
    },
    {
      image: 'assets/esterno_01.jpeg',
      title: 'Tradizione da vivere',
      caption: 'A pochi passi dalla rocca, una casa storica dove l\'accoglienza è arte tramandata di generazione in generazione.'
    },
    {
      image: 'assets/interno_01.webp',
      title: 'Moderna tradizione',
      caption: 'Ambiente ricco di storia, rivisitazioni moderne della cucina romana fanno del Monumento il luogo ideale per i piaceri della tavola.'
    },
    {
      image: 'assets/vista_alto_borgo_02.jpeg',
      title: 'Il borgo racconta',
      caption: 'Tra il castello medievale e i resti dell\'antica Roma, il nostro ristorante è custode di sapori che attraversano il tempo.'
    },
    {
      image: 'assets/esterno_02.jpeg',
      title: 'Freschezza da gustare',
      caption: 'Tra le specialità del Monumento, il pesce freschissimo del Tirreno cucinato seguendo ricette che onorano mare e territorio.'
    },
    {
      image: 'assets/interno_02.webp',
      title: 'Piacere da scoprire',
      caption: 'Un\'atmosfera intima dove ogni portata è un viaggio tra memoria e innovazione, dall\'antipasto al dolce dello Chef pasticcere.'
    }
  ];

  currentSlide = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.nextSlide(), 4200);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.gallerySlides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}
