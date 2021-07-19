import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  isEnglish: boolean = false;

  id: string = ''
  name: string = ''
  category: string = ''
  profile: string
  status: string = ''
  today: Date = new Date()
  date: string
  time: string = ''
  location: string = ''
  details: string = ''

  constructor(private router: Router) {
    if (this.today.getMonth() < 9) {
      this.date =  this.today.getFullYear() + '-' + 0 + (this.today.getMonth() + 1) + '-' + this.today.getDate()
    } else {
      this.date =  this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate()
    }
  }

  ngOnInit(): void {

    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }

  }

  onSubmit() {
    alert('Creating a new listing')
    this.router.navigateByUrl( this.isEnglish ? '/en/my-items' : '/my-items')
  }

  test() {
    console.log((<HTMLInputElement>document.getElementById('itemDate')).value);

  }

}
