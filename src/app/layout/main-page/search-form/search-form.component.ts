import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvinceDto } from 'src/app/dto/provinceDto';
import { RegionDto } from 'src/app/dto/regionDTO';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  public isEnglish: boolean = false;
  private isRegionBlockOpen: boolean = false;
  public value: String = 'Tutta Italia';

  public selectedRegion: RegionDto = new RegionDto();

  public italy: Array<RegionDto> = [
    {
      value: 'abruzzo',
      label: 'Abruzzo',
      provinces: [
        {
          value: 'chieti',
          label: 'Chieti'
        },
        {
          value: "l'aquila",
          label: "L'Aquila"
        },
        {
          value: 'pescara',
          label: 'Pescara'
        },
        {
          value: 'teramo',
          label: 'Teramo'
        }
      ]
    },
    {
      value: 'basilicata',
      label: 'Basilicata',
      provinces: [
        {
          value: 'matera',
          label: 'Matera'
        },
        {
          value: 'potenza',
          label: 'Potenza'
        }

      ]
    },
    {
      value: 'calabria',
      label: 'Calabria',
      provinces: [
        {
          value: 'catanzaro',
          label: 'Catanzaro'
        },
        {
          value: 'cosenza',
          label: 'Cosenza'
        },
        {
          value: 'crotone',
          label: 'Crotone'
        },
        {
          value: 'reggio calabria',
          label: 'Reggio Calabria'
        },
        {
          value: 'vibo valentia',
          label: 'Vibo Valentia'
        }
      ]
    },
    {
      value: "campania",
      label: 'Campania',
      provinces: [
        {
          value: 'avellino',
          label: 'Avellino'
        },
        {
          value: 'benevento',
          label: 'Benevento'
        },
        {
          value: 'caserta',
          label: 'Caserta'
        },
        {
          value: 'napoli',
          label: 'Napoli'
        },
        {
          value: 'salerno',
          label: 'Salerno'
        }
      ]
    },
    {
      value: 'emilia romagna',
      label: 'Emilia Romagna',
      provinces: [
        {
          value: 'bologna',
          label: 'Bologna'
        },
        {
          value: 'ferrara',
          label: 'Ferrara'
        },
        {
          value: 'forlì-cesena',
          label: 'Forlì-Cesena'
        },
        {
          value: 'modena',
          label: 'Modena'
        },
        {
          value: 'parma',
          label: 'Parma'
        },
        {
          value: 'piacenza',
          label: 'Piacenza'
        },
        {
          value: 'ravenna',
          label: 'Ravenna'
        },
        {
          value: 'reggio emilia',
          label: 'Reggio Emilia'
        },
        {
          value: 'rimini',
          label: 'Rimini'
        }
      ]
    },
    {
      value: "friuli-venezia giulia:",
      label: 'Friuli-Venezia Giulia',
      provinces: [
        {
          value: 'gorizia',
          label: 'Gorizia'
        },
        {
          value: 'pordenone',
          label: 'Pordenone'
        },
        {
          value: 'trieste',
          label: 'Trieste'
        },
        {
          value: 'udine',
          label: 'Udine'
        }
      ]
    },
    {
      value: "lazio",
      label: 'Lazio',
      provinces: [
        {
          value: 'frosinone',
          label: 'Frosinone'
        },
        {
          value: 'latina',
          label: 'Latina'
        },
        {
          value: 'rieti',
          label: 'Rieti'
        },
        {
          value: 'roma',
          label: 'Roma'
        },
        {
          value: 'viterbo',
          label: 'Viterbo'
        }
      ]
    },
    {
      value: "liguria",
      label: 'Liguria',
      provinces: [
        {
          value: 'genova',
          label: 'Genova'
        },
        {
          value: 'imperia',
          label: 'Imperia'
        },
        {
          value: 'la spezia',
          label: 'La Spezia'
        },
        {
          value: 'Savona',
          label: 'Savona'
        }
      ]
    },
    {
      value: "lombardia",
      label: 'Lombardia',
      provinces: [
        {
          value: 'bergamo',
          label: 'Bergamo'
        },
        {
          value: 'brescia',
          label: 'Brescia'
        },
        {
          value: 'como',
          label: 'Como'
        },
        {
          value: 'cremona',
          label: 'Cremona'
        },
        {
          value: 'lecco',
          label: 'Lecco'
        },
        {
          value: 'lodi',
          label: 'Lodi'
        },
        {
          value: 'mantova',
          label: 'Mantova'
        },
        {
          value: 'milano',
          label: 'Milano'
        },
        {
          value: 'monza e della brianza',
          label: 'Monza e della Brianza'
        },
        {
          value: 'pavia',
          label: 'Pavia'
        },
        {
          value: 'sondrio',
          label: 'Sondrio'
        },
        {
          value: 'varese',
          label: 'Varese'
        }
      ]
    },
    {
      value: "marche",
      label: 'Marche',
      provinces: [
        {
          value: 'ancona',
          label: 'Ancona'
        },
        {
          value: 'ascoli piceno',
          label: 'Ascoli Piceno'
        },
        {
          value: 'fermo',
          label: 'Fermo'
        },
        {
          value: 'macerata',
          label: 'Macerata'
        },
        {
          value: 'pesaro urbino',
          label: 'Pesaro Urbino'
        }
      ]
    },
    {
      value: "molise",
      label: 'Molise',
      provinces: [
        {
          value: 'campobasso',
          label: 'Campobasso'
        },
        {
          value: 'isernia',
          label: 'Isernia'
        }
      ]
    },
    {
      value: "piemonte",
      label: 'Piemonte',
      provinces: [
        {
          value: 'alessandria',
          label: 'Alessandria'
        },
        {
          value: 'asti',
          label: 'Asti'
        },
        {
          value: 'biella',
          label: 'Biella'
        },
        {
          value: 'cuneo',
          label: 'Cuneo'
        },
        {
          value: 'novara',
          label: 'Novara'
        },
        {
          value: 'torino',
          label: 'Torino'
        },
        {
          value: 'verbano-cusio-ossola',
          label: 'Verbano-Cusio-Ossola'
        },
        {
          value: 'vercelli',
          label: 'Vercelli'
        }
      ]
    },
    {
      value: "puglia",
      label: 'Puglia',
      provinces: [
        {
          value: 'bari',
          label: 'Bari'
        },
        {
          value: 'barletta-andria-trani',
          label: 'Barletta-Andria-Trani'
        },
        {
          value: 'brindisi',
          label: 'Brindisi'
        },
        {
          value: 'foggia',
          label: 'Foggia'
        },
        {
          value: 'lecce',
          label: 'Lecce'
        },
        {
          value: 'taranto',
          label: 'Taranto'
        }
      ]
    },
    {
      value: "sardegna",
      label: 'Sardegna',
      provinces: [
        {
          value: 'cagliari',
          label: 'Cagliari'
        },
        {
          value: 'nuoro',
          label: 'Nuoro'
        },
        {
          value: 'oristano',
          label: 'Oristano'
        },
        {
          value: 'sassari',
          label: 'Sassari'
        },
        {
          value: 'sud sardegna',
          label: 'Sud Sardegna'
        }
      ]
    },
    {
      value: "sicilia",
      label: 'Sicilia',
      provinces: [
        {
          value: 'agrigento',
          label: 'Agrigento'
        },
        {
          value: 'caltanissetta',
          label: 'Caltanissetta'
        },
        {
          value: 'catania',
          label: 'Catania'
        },
        {
          value: 'enna',
          label: 'Enna'
        },
        {
          value: 'messina',
          label: 'Messina'
        },
        {
          value: 'palermo',
          label: 'Palermo'
        },
        {
          value: 'ragusa',
          label: 'Ragusa'
        },
        {
          value: 'siracusa',
          label: 'Siracusa'
        },
        {
          value: 'trapani',
          label: 'Trapani'
        }
      ]
    },
    {
      value: "toscana",
      label: 'Toscana',
      provinces: [
        {
          value: 'arezzo',
          label: 'Arezzo'
        },
        {
          value: 'firenze',
          label: 'Firenze'
        },
        {
          value: 'grosseto',
          label: 'Grosseto'
        },
        {
          value: 'livorno',
          label: 'Livorno'
        },
        {
          value: 'lucca',
          label: 'Lucca'
        },
        {
          value: 'massa-carrara',
          label: 'Massa-Carrara'
        },
        {
          value: 'pisa',
          label: 'Pisa'
        },
        {
          value: 'pistoia',
          label: 'Pistoia'
        },
        {
          value: 'prato',
          label: 'Prato'
        },
        {
          value: 'siena',
          label: 'Siena'
        }
      ]
    },
    {
      value: "trentino-alto-adige",
      label: 'Trentino-Alto Adige',
      provinces: [
        {
          value: 'bolzano',
          label: 'Bolzano'
        },
        {
          value: 'trento',
          label: 'Trento'
        }
      ]
    },
    {
      value: "umbria",
      label: 'Umbria',
      provinces: [
        {
          value: 'perugia',
          label: 'Perugia'
        },
        {
          value: 'terni',
          label: 'Terni'
        }
      ]
    },
    {
      value: "valle d'Aosta",
      label: "Valle d'Aosta",
      provinces: [
        {
          value: 'aosta',
          label: 'Aosta'
        }
      ]
    },
    {
      value: "veneto",
      label: 'Veneto',
      provinces: [
        {
          value: 'belluno',
          label: 'Belluno'
        },
        {
          value: 'padova',
          label: 'Padova'
        },
        {
          value: 'rovigo',
          label: 'Rovigo'
        },
        {
          value: 'treviso',
          label: 'Treviso'
        },
        {
          value: 'venezia',
          label: 'Venezia'
        },
        {
          value: 'verona',
          label: 'Verona'
        },
        {
          value: 'vicenza',
          label: 'Vicenza'
        }
      ]
    }
  ];

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target) && this.isRegionBlockOpen) {

      document.getElementById('regions-layer')?.style.setProperty('display', 'none')
      document.getElementById('provinces-layer')?.style.setProperty('display', 'none')
      this.isRegionBlockOpen = false

    } else {
      this.isRegionBlockOpen = true
    }
  }

  constructor(private eRef: ElementRef, private itemsService: ItemsService, private router: Router) { }

  ngOnInit(): void {
    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
      this.value = 'All Italy';
    }
  }


  public goSearch() {
    let item = (<HTMLInputElement>document.getElementById('mainSearch')).value
    let loc

    if (this.selectedRegion.label == undefined) loc = 'Italia'
    else loc = this.value

    if (this.isEnglish) this.router.navigate(['/en/search'], {queryParams: {str: item, location: loc}});
    else this.router.navigate(['/search'], {queryParams: {str: item, location: loc}});


    // GO SEARCH in HERE
  }

  public toggleRegionsBlock() {
    if (!document.getElementById('regions-layer')?.style.getPropertyValue('display').match('block') &&
        !document.getElementById('provinces-layer')?.style.getPropertyValue('display').match('block')) {
      document.getElementById('regions-layer')?.style.setProperty('display', 'block')
      this.isRegionBlockOpen = true
    }
  }

  public onSelectRegion(region: RegionDto) {
    this.selectedRegion = region
    if (this.isEnglish) {
      this.value = region.label + ", Italy"
    } else {
      this.value = region.label + ", Italia"
    }
    document.getElementById('regions-layer')?.style.setProperty('display', 'none')
    document.getElementById('provinces-layer')?.style.setProperty('display', 'block')
  }

  public onFinalSelectRegion() {
    document.getElementById('provinces-layer')?.style.setProperty('display', 'none')
  }

  public onSelectItaly() {
    if (this.isEnglish) {
      this.value = 'All Italy'
    } else {
      this.value = 'Tutta Italia'
    }
    this.selectedRegion = new RegionDto();
    document.getElementById('regions-layer')?.style.setProperty('display', 'none')
    document.getElementById('provinces-layer')?.style.setProperty('display', 'none')
  }

  public onSelectProvince(province: ProvinceDto) {
    this.value = province.label + ", " + this.value
    document.getElementById('provinces-layer')?.style.setProperty('display', 'none')
  }

  public changeRegion() {
    if (this.isEnglish) {
      this.value = 'All Italy'
    } else {
      this.value = 'Tutta Italia'
    }
    this.selectedRegion = new RegionDto();
    document.getElementById('provinces-layer')?.style.setProperty('display', 'none')
    document.getElementById('regions-layer')?.style.setProperty('display', 'block')
  }

}
