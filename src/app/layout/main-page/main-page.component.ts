import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonKey } from 'src/app/dto/commonKey';
import { LocalStorageSecurity } from 'src/app/dto/localStorageSecurity';

import { Item } from '../../dto/itemDto';
import { fakeItems } from 'src/app/dto/fake-data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  items: Item[] = [];

  public isEnglish: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

    this.items = fakeItems
  }



  public foundSmth() {
    if (LocalStorageSecurity.hasItem(CommonKey.TOKEN)) {
      this.router.navigate(["i-found"], {relativeTo: this.route});
    } else {
      document.getElementById("findOpener")?.click();
    }
  }

  public lostSmth() {
    if (LocalStorageSecurity.hasItem(CommonKey.TOKEN)) {
      this.router.navigate(["i-lost"], {relativeTo: this.route});
    } else {
      document.getElementById("lostOpener")?.click();
    }
  }

}
