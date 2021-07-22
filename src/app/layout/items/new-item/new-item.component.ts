import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { italy } from 'src/app/dto/italy';
import { RegionDto } from 'src/app/dto/regionDTO';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  isEnglish: boolean = false;

  id: string = ''
  name: string = ''
  categories: string[] = [
    'Personal Items',
    'Electronics',
    'Animals'
  ]
  italy: Array<RegionDto> = italy;
  profile: string
  today: Date = new Date()
  date: string
  location: string = ''
  details: string = ''

  selectedRegion?: RegionDto

  constructor(private router: Router, private itemsService: ItemsService) {
    if (this.today.getMonth() < 9) {
      this.date =  this.today.getFullYear() + '-' + 0 + (this.today.getMonth() + 1) + '-' + this.today.getDate()
    } else {
      this.date =  this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate()
    }
  }

  ngOnInit(): void {

    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

  }


  onSubmit() {
    let name = this.name
    let category = (<HTMLSelectElement>document.getElementById('itemCategory')).value;
    let status = (<HTMLSelectElement>document.getElementById('itemStatus')).value;
    let date = (<HTMLInputElement>document.getElementById('itemDate')).value;
    let time = (<HTMLInputElement>document.getElementById('itemTime')).value;
    let location = (<HTMLSelectElement>document.getElementById('itemRegions')).value;
    if (!(<HTMLSelectElement>document.getElementById('itemProvinces')).value.startsWith('Whole') &&
        !(<HTMLSelectElement>document.getElementById('itemProvinces')).value.startsWith('Tutta')) {
      location = (<HTMLSelectElement>document.getElementById('itemProvinces')).value + ', ' + location
    }
    let details = (<HTMLTextAreaElement>document.getElementById('itemDetails')).value;

    this.itemsService.createItem(name, category, status, date, time, location, details)
      .subscribe(() => {
        this.router.navigateByUrl( this.isEnglish ? '/en/my-items' : '/my-items');
      });
  }


  onRegSelected() {
    var reg = (<HTMLInputElement>document.getElementById('itemRegions')).value.toString()
    if (reg === 'Whole Italy' || reg === 'Tutta Italia') {
      this.selectedRegion = new RegionDto()
    } else {
      this.selectedRegion = this.italy.find(region => region.label === reg.split(',')[0])
    }
  }

}
