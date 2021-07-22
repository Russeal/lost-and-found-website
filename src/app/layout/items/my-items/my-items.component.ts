import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeItems } from 'src/app/dto/fake-data';
import { Item } from 'src/app/dto/itemDto';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {

  public isLoading: boolean = true;
  items: Array<Item>;
  isEnglish: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private itemsService: ItemsService) { }

  ngOnInit(): void {
    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

    this.itemsService.getMyItems().subscribe(
      data => {
        this.items = data;
        this.isLoading = false;
      }
    );

    this.isLoading = false;
  }

  deleteItem(itemId: string) {
    this.itemsService.deleteMyItems(itemId).subscribe(() => {
      this.items = this.items.filter(
        item => item.id !== itemId
      );
    });
  }

}
