import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/dto/itemDto';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public isLoading: boolean = true;
  email: string = '';
  message: string = '';
  item: Item;
  isEnglish: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private itemsService: ItemsService) { }

  ngOnInit(): void {
    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

    const id = this.route.snapshot.paramMap.get('id') || '0'

    this.itemsService.getItemByID(id).subscribe(
      data => {
        this.item = data;
        this.isLoading = false;
        this.message = `Hi, I contacting you about the announcement of ${ data.name }.`;
      }
    );
  }

  sendMessage() {
    alert('Your message is sent!');

    this.router.navigateByUrl( this.isEnglish ? '/en/items/' + this.item?.id : '/items/' + this.item?.id )
  }

}
