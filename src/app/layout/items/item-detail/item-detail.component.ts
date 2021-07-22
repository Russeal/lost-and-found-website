import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/dto/itemDto';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  public isLoading: boolean = true;
  public item: Item;
  public isEnglish: boolean = false;

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit(): void {
    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

    const id  = this.route.snapshot.paramMap.get('id') || '0'

    this.itemsService.getItemByID(id).subscribe(
      data => {
        this.item = data;
        this.isLoading = false;
      }
    );
  }

}
