import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
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
  public isLoggedIn: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private itemsService: ItemsService, public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.router.navigateByUrl( this.isEnglish ? '/en' : '/');
      }
    })
  }

  ngOnInit(): void {
    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

    this.itemsService.getMyItems().subscribe(
      data => {
        this.items = data.reverse();
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
