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
  signatureDishes = [
    {
      title: 'Crudo del Tirreno',
      description: 'Degustazione di ostriche, mazzancolle e tartare con olio agli agrumi.',
      image: 'assets/piatto_02.webp',
      pairing: 'Vermentino di Gallura DOCG',
      tag: 'Pesce fresco'
    },
    {
      title: 'Tagliolini con tartare',
      description: 'Pasta fresca tirata a mano con tartare di scampi, lime e finocchietto.',
      image: 'assets/tagliolini_con_tartare.webp',
      pairing: 'Falanghina del Sannio',
      tag: 'Pasta fresca'
    },
    {
      title: 'Ravioli cacao e cinghiale',
      description: 'Ripieno di brasato di cinghiale, riduzione al Sangiovese e fonduta leggera.',
      image: 'assets/ravioli_cacao_cinghiale.webp',
      pairing: 'Chianti Classico',
      tag: 'Terra & Tradizione'
    },
    {
      title: 'Totani veraci e carciofi',
      description: 'Saltati con fondo di crostacei, carciofi romaneschi e mentuccia.',
      image: 'assets/totani_veraci_e_carciofi_romaneschi.webp',
      pairing: 'Frascati Superiore DOCG',
      tag: 'Sapori romani'
    }
  ];

  reviews = [
    {
      quote: 'Una bellissima sorpresa. Locale nel borghetto di Ostia che ha saputo mantenere lo stile retrò delle antiche trattorie. Personale molto cortese e socievole. Cibo di ottima qualità e con presentazione molto curata. Complimenti ci ritorneremo!!',
      author: 'Rodolfo D.',
      source: 'Google',
      rating: '5/5',
      context: 'Cibo: 5\n' +
          'Servizio: 5\n' +
          'Ambiente: 5'
    },
    {
      quote: 'La bellezza di poter mangiare nei pressi del borgo di Ostia Antica già di per sé è un valore aggiunto...poi se il ristorante merita sotto TUTTI gli aspetti, non c\'è altro da chiedere. Lo chef è un artista, il proprietario è professionale e simpatico e il cameriere che ci ha servito, perfetto! Prezzi più che giusti per l\'ottima qualità del cibo! We\'ll come back soon!',
      author: 'Maurizio C.',
      source: 'Google',
      rating: '5/5',
      context: 'Cibo: 5\n' +
          'Servizio: 5\n' +
          'Ambiente: 5'
    },
    {
      quote: 'Andateci, merita.\n' +
          'Ambiente molto carino e pulito, personale cordiale. Il maitre è un personaggio pittoresco che vi saprà ben consigliare (ed è l\'unico che pende le comande).\n' +
          'Il sevizio è un po\' confusionario con il locale pieno e ciò provoca dei ritardi e qualche dimenticanza sugli ordini (a cui però si è posto subito rimedio).\n' +
          'Piatti sopra la media: la materia prima è rispettata e le cotture sono impeccabili.\n' +
          'Ottime le fritture (soprattutto possi e moscardini), spettacolare il tonno.\n' +
          'Validi anche i dolci.\n' +
          'Prezzi decisamente abbordabili per chiunque.\n' +
          'Consiglio la prenotazione.',
      author: 'Automaticjack',
      source: 'Google',
      rating: '5/5',
      context: 'Cibo: 5\n' +
          'Servizio: 4\n' +
          'Ambiente: 5'
    }
  ];

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
  currentReview = 0;
  private heroIntervalId: any;
  private reviewIntervalId: any;

  ngOnInit(): void {
    this.heroIntervalId = setInterval(() => this.nextSlide(), 4200);
    this.reviewIntervalId = setInterval(() => this.nextReview(), 5200);
  }

  ngOnDestroy(): void {
    if (this.heroIntervalId) {
      clearInterval(this.heroIntervalId);
    }
    if (this.reviewIntervalId) {
      clearInterval(this.reviewIntervalId);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.gallerySlides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  nextReview(): void {
    this.currentReview = (this.currentReview + 1) % this.reviews.length;
  }

  goToReview(index: number): void {
    this.currentReview = index;
  }
}
