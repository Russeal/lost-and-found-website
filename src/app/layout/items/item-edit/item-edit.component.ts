import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeItems } from 'src/app/dto/fake-data';
import { italy } from 'src/app/dto/italy';
import { Item } from 'src/app/dto/itemDto';
import { ProvinceDto } from 'src/app/dto/provinceDto';
import { RegionDto } from 'src/app/dto/regionDTO';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {

  isEnglish: boolean = false;
  isLoading: boolean = true;

  id: string = ''
  categories: string[] = [
    'Personal Items',
    'Electronics',
    'Animals'
  ]
  italy: Array<RegionDto> = italy;
  status: string = ''
  today: Date = new Date()
  date: string
  time: string = ''
  location: string = ''
  locReg: string = ''
  locProv: string = ''
  details: string = ''
  public item: Item;

  selectedRegion?: RegionDto;

  constructor(private router: Router, private route: ActivatedRoute, private itemsService: ItemsService) {
  }

  ngOnInit(): void {

    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

    const id  = this.route.snapshot.paramMap.get('id') || '0'

    this.itemsService.getItemByID(id).subscribe(
      data => {
        this.item = data;
        this.isLoading = false;

        if (data.location.split(',').length === 3) {

          this.locReg = data.location.split(', ')[1]
          this.selectedRegion = this.italy.find(region => region.label === this.locReg)

          this.locProv = data.location.split(', ')[0]

        } else if (data.location.split(',').length === 2) {

          this.locReg = data.location.split(', ')[0]
          this.selectedRegion = this.italy.find(region => region.label === this.locReg)

        }
      }
    );
  }

  onSubmit() {
    let category = (<HTMLSelectElement>document.getElementById('itemCategory')).value;
    let status = (<HTMLSelectElement>document.getElementById('itemStatus')).value;
    let date = (<HTMLInputElement>document.getElementById('itemDate')).value;
    let time = (<HTMLInputElement>document.getElementById('itemTime')).value;
    let location = (<HTMLSelectElement>document.getElementById('itemRegions')).value;
    if (location === 'Whole Italy') {
      location = 'Italia'
    } else if (!(<HTMLSelectElement>document.getElementById('itemProvinces')).value.startsWith('Whole') &&
        !(<HTMLSelectElement>document.getElementById('itemProvinces')).value.startsWith('Tutta')) {
      location = (<HTMLSelectElement>document.getElementById('itemProvinces')).value + ', ' + location + ', Italia'
    } else {
      location = location + ', Italia'
    }
    let details = (<HTMLTextAreaElement>document.getElementById('itemDetails')).value;

    this.itemsService.editItem(this.item.id, this.item.name, category, status, date, time, location, details)
      .subscribe(() => {
          this.router.navigateByUrl( this.isEnglish ? '/en/my-items' : '/my-items');
      });
  }


  onRegSelected() {
    var reg = (<HTMLInputElement>document.getElementById('itemRegions')).value.toString()
    if (reg !== 'Whole Italy') {
      this.selectedRegion = this.italy.find(region => region.label === reg)
    } else {
      this.selectedRegion = new RegionDto()
    }
  }

}
