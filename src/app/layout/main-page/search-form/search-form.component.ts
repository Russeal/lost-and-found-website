import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ProvinceDto } from 'src/app/dto/provinceDto';
import { RegionDto } from 'src/app/dto/regionDTO';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  private isRegionBlockOpen: boolean = false;
  public value: String = 'Tutta Italia';

  public selectedRegion: RegionDto;

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
          value: '1',
          label: '1'
        }
      ]
    },
    {
      value: "campania",
      label: 'Campania',
      provinces: [
        {
          value: '1',
          label: '1'
        }
      ]
    },
    {
      value: 'emilia-romagna',
      label: 'Emilia Romagna',
      provinces: [
        {
          value: '1',
          label: '1'
        }
      ]
    },
    {
      value: "lazio",
      label: 'Lazio',
      provinces: [
        {
          value: '1',
          label: '1'
        }
      ]
    },
    {
      value: "liguria",
      label: 'Liguria',
      provinces: [
        {
          value: '1',
          label: '1'
        }
      ]
    },
    {
      value: "lombardia",
      label: 'Lombardia',
      provinces: [
        {
          value: '1',
          label: '1'
        }
      ]
    },
    {
      value: "marche",
      label: 'Marche',
      provinces: [
        {
          value: '1',
          label: '1'
        }
      ]
    },
    {
      value: "molise",
      label: 'Molise',
      provinces: [
        {
          value: '1',
          label: '1'
        }
      ]
    },
    {
      value: "piemonte",
      label: 'Piemonte',
      provinces: [
        {
          value: '1',
          label: '1'
        }
      ]
    },
    {
      value: "puglia",
      label: 'Puglia',
      provinces: [
        {
          value: '1',
          label: '1'
        }
      ]
    },
    {
      value: "sardegna",
      label: 'Sardegna',
      provinces: [
        {
          value: '1',
          label: '1'
        }
      ]
    },
    {
      value: "sicilia",
      label: 'Sicilia',
      provinces: [
        {
          value: '1',
          label: '1'
        }
      ]
    },
    {
      value: "toscana",
      label: 'Toscana',
      provinces: [
        {
          value: '1',
          label: '1'
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

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  public toggleRegionsBlock() {
    if (!document.getElementById('regions-layer')?.style.getPropertyValue('display').match('block')) {
      document.getElementById('regions-layer')?.style.setProperty('display', 'block')
      this.isRegionBlockOpen = true
    }
  }

  public onSelectRegion(region: RegionDto) {
    this.value = region.label + ", Italia"
    this.selectedRegion = region
    document.getElementById('regions-layer')?.style.setProperty('display', 'none')
    document.getElementById('provinces-layer')?.style.setProperty('display', 'block')
  }

  public onSelectItaly() {
    this.value = 'Tutta Italia'
    this.selectedRegion = new RegionDto();
    document.getElementById('regions-layer')?.style.setProperty('display', 'none')
    document.getElementById('provinces-layer')?.style.setProperty('display', 'none')
  }

  public onSelectProvince(province: ProvinceDto) {
    this.value = province.label + ", " + this.value
    document.getElementById('provinces-layer')?.style.setProperty('display', 'none')

  }

}
