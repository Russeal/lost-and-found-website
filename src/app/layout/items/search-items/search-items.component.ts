import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/dto/itemDto';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent implements OnInit {

  items: Item[];
  public isEnglish: boolean = false;
  order: string[];

  constructor(private route: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit(): void {
    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

    this.route.queryParamMap.subscribe((params) => {
        const item = params.get('str')
        const location = params.get('location')

        if (item !== null && location !== null) {
          this.itemsService.searchItems(item, location).subscribe(
            data => this.items = data
          );
        }
      }
    );

  }

}
