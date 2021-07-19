import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeItems } from 'src/app/dto/fake-data';
import { Item } from 'src/app/dto/itemDto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email: string = '';
  message: string = '';
  item?: Item;
  isEnglish: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.item = fakeItems.find(item => item.id === id);


    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

    this.message = `Hi, I contacting you about the announcement of ${ this.item?.name }.`;
  }

  sendMessage() {
    alert('Your message is sent!');

    this.router.navigateByUrl( this.isEnglish ? '/en/items/' + this.item?.id : '/items/' + this.item?.id )
  }

}
