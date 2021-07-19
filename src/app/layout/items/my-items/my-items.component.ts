import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeItems } from 'src/app/dto/fake-data';
import { Item } from 'src/app/dto/itemDto';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {

  items?: Array<Item>;
  isEnglish: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.items = fakeItems;


    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }
  }

  deleteItem(itemId: string) {
    alert('Your item is deleted!');
  }

}
