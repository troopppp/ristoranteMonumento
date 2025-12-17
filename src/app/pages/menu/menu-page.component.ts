import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
  imports: [NgFor, NgIf]
})
export class MenuPageComponent {
  readonly menuTabs = [
    {
      id: 'mare',
      label: 'Mare',
      title: 'Dal pescato di Ostia',
      description: 'Crudi, primi e secondi ispirati al Tirreno, con verdure di macchia e agrumi del litorale.',
      dishes: [
        { name: 'Ostriche e selezione di crudi del Tirreno' },
        { name: 'Carpaccio di ricciola, finocchietto e arancia' },
        { name: 'Tagliolino al nero con vongole veraci e peperone crusco' },
        { name: 'Trancio di spigola arrosto, olive nere e crema di topinambur' },
        { name: 'Zuppa di pesce del giorno con pane alle alghe' }
      ]
    },
    {
      id: 'terra',
      label: 'Terra',
      title: 'Sapori di campagna',
      description: 'Ricette laziali e appunti di viaggio: pasta fresca, arrosti lenti e verdure di stagione.',
      dishes: [
        { name: 'Tonnarelli cacio e pepe con pepe affumicato' },
        { name: 'Agnolotti di coniglio, brodo ristretto e timo' },
        { name: 'Guancia di manzo al Cesanese, purea di sedano rapa' },
        { name: 'Faraona arrostita, carciofi e menta romana' },
        { name: 'Verdure di campo saltate con olio nuovo' }
      ]
    },
    {
      id: 'contorni',
      label: 'Contorni',
      title: 'Verdure e forno a legna',
      description: 'I nostri piatti di supporto, pensati per condividere.',
      dishes: [
        { name: 'Carciofo arrostito al forno a legna, mentuccia' },
        { name: 'Puntarelle, alici di Anzio e melagrana' },
        { name: 'Patate sabbiate al rosmarino' },
        { name: 'Cicoria ripassata e limone candito' },
        { name: 'Insalata di finocchi, arance e olive taggiasche' }
      ]
    },
    {
      id: 'dolci',
      label: 'Dolci',
      title: 'Dessert della casa',
      description: 'Classici preparati al momento e ricette che raccontano la nostra storia.',
      dishes: [
        { name: 'Tiramisù montato al momento' },
        { name: 'Crostata di visciole, crema inglese al limone' },
        { name: 'Semifreddo al pistacchio salato e caramello' },
        { name: 'Tortino al cioccolato, pere speziate e panna affumicata' }
      ]
    },
    {
      id: 'caffe',
      label: 'Caffè',
      title: 'Dopo cena',
      description: 'Caffetteria e amari legati al territorio laziale.',
      dishes: [
        { name: 'Espresso monorigine, miscela della casa' },
        { name: 'Moka condivisa al tavolo' },
        { name: 'Affogato al fior di latte e crumble di cacao' },
        { name: 'Selezione di amari del Lazio e liquori di erbe' },
        { name: 'Tisana al finocchietto selvatico e agrumi' }
      ]
    }
  ];

  activeTab = this.menuTabs[0].id;

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
