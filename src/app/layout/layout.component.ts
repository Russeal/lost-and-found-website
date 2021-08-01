import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase  from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [ ProfileService ]
})
export class LayoutComponent implements OnInit {

  public isEnglish: boolean = false;
  public isLoggedIn: boolean = false;
  public isErrorWarning: boolean = false;

  public name: String;
  public surname: String;


  constructor(private router: Router, public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
        this.name = user.displayName || '';
      }
    })
  }

  ngOnInit() {
    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }
  }


  public signInClickedWithGoogle(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {

        this.isLoggedIn = true
        document.getElementById('form1Hider')?.click();
      });
  }

  public signOutClicked(): void {
    this.isLoggedIn = false
    this.auth.signOut().then(() => {
      this.router.navigateByUrl( this.isEnglish ? '/en' : '/');
    })
  }






  changeLanguage(lang: String) {
    if (this.isEnglish && lang.match('it')) {
      this.isEnglish = false;
      this.router.navigate([location.pathname.substring(4)]);
    } else if (!this.isEnglish && lang.match('en')) {
      this.isEnglish = true;
      this.router.navigate(['en' + location.pathname]);
    }
  }





  public openLogInModal() {
    if (document.getElementById("modalRegister")?.classList.contains("show")) {
      document.getElementById("form2Hider")?.click();
    }
    setTimeout(() => {
      document.getElementById("form1Clicker")?.click();
    }, 100);
  }

  public openRegistrationModal() {
    if (document.getElementById("modalLogin")?.classList.contains("show")) {
      document.getElementById("form1Hider")?.click();
    }
    setTimeout(() => {
      document.getElementById("form2Clicker")?.click();
    }, 100);
  }

  public goToHome() {

    window.scroll(0,0);

    if (this.isEnglish) this.router.navigate(["en"])
    else this.router.navigate([""])
  }
}
