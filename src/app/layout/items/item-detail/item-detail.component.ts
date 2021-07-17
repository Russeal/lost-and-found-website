import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeItems } from 'src/app/dto/fake-data';
import { Item } from 'src/app/dto/itemDto';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  public item?: Item;
  public isEnglish: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

    const id  = this.route.snapshot.paramMap.get('id')

    this.item = fakeItems.find(item => item.id === id)
  }

}
