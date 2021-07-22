import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Item } from '../../dto/itemDto';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  items: Item[];

  public isEnglish: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private itemsService: ItemsService) { }

  ngOnInit() {
    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

    this.itemsService.getItems().subscribe(
      data => this.items = data
    );
  }


}
