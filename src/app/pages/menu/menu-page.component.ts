import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
  imports: [NgFor, NgIf]
})
export class MenuPageComponent implements OnInit, OnDestroy {
  backgroundImages = [
    'assets/piatto_01.webp',
    'assets/piatto_02.webp',
    'assets/piatto_03.webp',
    'assets/piatto_04.webp',
    'assets/piatto_05.webp',
    'assets/piatto_06.webp',
    'assets/piatto_07.webp',
    'assets/piatto_08.webp',
    'assets/piatto_09.webp',
    'assets/piatto_10.webp',
    'assets/piatto_11.webp',
    'assets/piatto_12.jpg',
    'assets/piatto_13.jpg',
    'assets/piatto_14.jpg'
  ];

  currentSlide = 0;
  private intervalId: any;

  readonly menuTabs = [
    {
      id: 'mare',
      label: 'Mare',
      sections: [
        {
          title: 'I nostri antipasti dal mare',
          dishes: [
            { name: 'Misto mare dello chef per 2 persone', description: 'Polpo e patate, calamaretti affogati, alici lime e menta, polipetti in casseruola' }
          ]
        },
        {
          title: 'I caldi',
          dishes: [
            { name: 'Soutè di vongole veraci' },
            { name: 'Soutè di cozze' },
            { name: 'Soutè di cozze, vongole e mazzancolle' },
            { name: 'Zuppetta di calamari, ceci e cozze con crostini di pane' },
            { name: 'Polipetti in casseruola' },
            { name: 'Calamaretti affogati', description: 'Ricetta storica' },
            { name: 'Totani veraci e carciofi romaneschi', image: 'assets/totani_veraci_e_carciofi_romaneschi.webp' }
          ]
        },
        {
          title: 'I fritti',
          dishes: [
            { name: 'Frittura di alici di pesca locale' },
            { name: 'Polpettine di tonno agli agrumi' },
            { name: 'Moscardini fritti con porro croccante e riduzione di aceto balsamico' },
            { name: 'Crocchette di baccalà mantecato su maionese di zenzero e zafferano' }
          ]
        },
        {
          title: 'I freddi',
          dishes: [
            { name: 'Alici marinate con lime e menta' },
            { name: 'Gamberoni alla catalana' },
            { name: 'Insalata di mare' },
            { name: 'Polpo e patate' }
          ]
        },
        {
          title: 'Cruditè alla carta',
          dishes: [
            { name: 'Scampo Porcupine' },
            { name: 'Gambero Viola di Sicilia' },
            { name: 'Tris di Tartare', description: 'Salmone, spigola, tonno' },
            { name: 'Tartare di Gambero Rosa' },
            { name: 'Carpaccio di Spigola' },
            { name: 'Ostriche Brevault' },
            { name: 'Gambero Rosso di Marzara del Vallo' },
            { name: 'Mazzancolla di Sicilia' },
            { name: 'Tartare di Tonno' },
            { name: 'Tartare di Ricciola con Carpaccio di Tartufo Nero e i Suoi Sali' },
            { name: 'Carpaccio d\'Orata' }
          ]
        },
        {
          title: 'I nostri primi dal mare',
          dishes: [
            { name: 'Spaghetti di Gragnano alle vongole veraci' },
            { name: 'Spaghetti di Gragnano alle vongole veraci con scaglie di bottarga di muggine' },
            { name: 'Gnocchetti di patate al ragù di crostacei', description: 'Scampo, gamberone, gambero viola e mazzancolla' },
            { name: 'Paccheri al ragù di polpo verace' },
            { name: 'Tagliolini alla Monumento', description: 'Ricetta storica con cozze, vongole, calamari e mazzancolle sgusciate' },
            { name: 'Tagliolini con tartare di gambero rosso di Marzara e la sua bisque', image: 'assets/tagliolini_con_tartare.webp' },
            { name: 'Ravioli fatti in casa ripieni di pesce, in guazzetto di pachino e vongole', image: 'assets/ravioli_fatti_in_casa.webp' }
          ]
        },
        {
          title: 'I nostri secondi dal mare',
          subsections: [
            {
              subtitle: 'Grigliati',
              dishes: [
                { name: 'Trancio di pesce spada' },
                { name: 'Filetto di tonno scottato' },
                { name: 'Gamberoni Imperiali' },
                { name: 'Scampi' },
                { name: 'Grigliata mista', description: 'Filetto di pescato del giorno, gamberone, scampo e calamari' },
                { name: 'Calamari' },
                { name: 'Pescato del giorno' },
                { name: 'Filetto di ricciola', image: 'assets/filetto_di_ricciola.webp' }
              ]
            },
            {
              subtitle: 'Elaborati',
              dishes: [
                { name: 'Filetto di tonno scottato al sesamo e pepe nero' },
                { name: 'Ricciola su purea di zucca, pistacchi e julienne di verdure mediterranee' },
                { name: 'Gamberoni al coccio', description: 'Ricetta storica' },
                { name: 'Trancio di pesce spada alla siciliana' },
                { name: 'Polpo rosticciato su hummus di ceci e zafferano' }
              ]
            },
            {
              subtitle: 'Fritti',
              dishes: [
                { name: 'Paranza' },
                { name: 'Calamari' },
                { name: 'Calamari e gamberi' },
                { name: 'Calamari, gamberi, paranza e alici' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'terra',
      label: 'Terra',
      sections: [
        {
          title: 'I nostri antipasti dalla terra',
          dishes: [
            { name: 'Scamorza alla griglia' },
            { name: 'Scamorza con prosciutto crudo' },
            { name: 'Scamorza con funghi porcini' },
            { name: 'Polpettine fritte con le sue salse', description: 'a scelta tra: battuto di carne, bollito misto, vegetali' }
          ],
          subsections: [
            {
              subtitle: 'Gli speciali',
              dishes: [
                { name: 'Raviolo fritto di farina di canapa ripieno di bufala e tartufo nero' },
                { name: 'Paccheri fritti ripieni di carbonara' },
                { name: 'Paccheri fritti ripieni di amatriciana' },
                { name: 'Tartare di filetto' },
                { name: 'Tartare di filetto con carpaccio di tartufo e i suoi sali' }
              ]
            }
          ]
        },
        {
          title: 'I nostri primi dalla terra',
          dishes: [
            { name: 'Cappelletti romagnoli', description: 'Ricetta storica, al battuto di carne o in brodo o burro e salvia' },
            { name: 'Fettuccine al battuto di carne' },
            { name: 'Ravioli di sfoglia al cacao amaro ripieni di brasato di cinghiale su fonduta di parmiggiano', image: 'assets/ravioli_cacao_cinghiale.webp' },
            { name: 'Tagliolini al ragù d\'anatra', image: 'assets/tagliolini_al_ragu_danatra2.webp' },
            { name: 'Fettuccin ai funghi porcini' },
            { name: 'Tagliolini cacio e pepe' }
          ]
        },
        {
          title: 'I nostri secondi dalla terra',
          dishes: [
            { name: 'Filetto alla griglia' },
            { name: 'Picanha alla griglia' },
            { name: 'Scaloppine con funghi porcini' },
            { name: 'Scaloppine agli agrumi' }
          ]
        }
      ]
    },
    {
      id: 'contorni',
      label: 'Contorni',
      sections: [
        {
          title: 'I nostri contorni',
          dishes: [
            { name: 'Verdure di stagione', description: 'All\'agro o ripassate in padella' },
            { name: 'Insalata mista' },
            { name: 'Patate', description: 'fritte o al forno' }
          ]
        }
      ]
    },
    {
      id: 'dolci',
      label: 'Dolci',
      sections: [
        {
          title: 'Frutta e dolci',
          dishes: [
            { name: 'Frutta di stagione' },
            { name: 'I nostri dolci fatti in casa' },
            { name: 'Sorbetto di limone' }
          ]
        }
      ]
    },
    {
      id: 'caffe',
      label: 'Caffè',
      sections: [
        {
          title: 'I nostri caffè',
          dishes: [
            { name: 'Illy Caffè Intenso' },
            { name: 'Illy Caffè Decaffeinato' },
            { name: 'Illy Ginseng' },
            { name: 'Illy Orzo' },
            { name: 'Illy Caffè Etiopia, Guatemala o Brasile' }
          ]
        }
      ]
    }
  ];

  activeTab = this.menuTabs[0].id;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.nextSlide(), 4200);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.backgroundImages.length;
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
