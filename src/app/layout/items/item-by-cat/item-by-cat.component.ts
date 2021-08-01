import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/dto/itemDto';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item-by-cat',
  templateUrl: './item-by-cat.component.html',
  styleUrls: ['./item-by-cat.component.scss']
})
export class ItemByCatComponent implements OnInit {

  items: Item[];
  public isEnglish: boolean = false;
  public category;

  constructor(private router: Router, private route: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit(): void {
    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

    this.category  = this.route.snapshot.paramMap.get('category') || ''

    this.itemsService.getItemsByCategory(this.category).subscribe(
      data => {
        this.items = data.reverse()
      }
    );
  }

}
