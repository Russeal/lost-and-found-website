import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { ProfileDto } from '../dto/profileDto';
import { LocalStorageSecurity } from '../dto/localStorageSecurity';
import { CommonKey } from '../dto/commonKey';

const MINUTES_UNITL_AUTO_LOGOUT = 5; // in mins
const CHECK_INTERVAL = 15000; // in ms
const STORE_KEY = 'lastAction';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [ ProfileService ]
})
export class LayoutComponent implements OnInit {

  public isEnglish: boolean = false;






  public isRussian: boolean = false;
  public isLoggedIn: boolean;
  public isLostWarning: boolean = false;
  public isFoundWarning: boolean = false;
  public isErrorWarning: boolean = false;
  public name: String;
  public surname: String;

  // @HostListener("window:scroll", ["$event"])
  //   onWindowScroll() {
  //   let pos = document.documentElement.scrollTop;
  //   if (pos >= 150) {
  //     document.querySelector('.navbar')?.classList.add('shrinkPadding');
  //   } else if (document.querySelector('.shrinkPadding')) {
  //     document.querySelector('.shrinkPadding')?.classList.remove('shrinkPadding');
  //   }
  // }

  constructor(private router: Router, private profileService: ProfileService, private route: ActivatedRoute) {}

  ngOnInit() {

    if (location.pathname.split('/')[1] === 'en') {
      this.isEnglish = true;
    }









    if (location.pathname.split('/')[1] === 'en') {
      this.isRussian = true;
    }
    if (LocalStorageSecurity.hasItem(CommonKey.TOKEN)) {
      this.isLoggedIn = true;
      this.name = LocalStorageSecurity.getItem(CommonKey.NAME);
      this.surname = LocalStorageSecurity.getItem(CommonKey.SURNAME);
    } else {
      this.isLoggedIn = false;
    }
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
    this.isFoundWarning = false;
    this.isLostWarning = false;
    if (document.getElementById("modalRegister")?.classList.contains("show")) {
      document.getElementById("form2Hider")?.click();
    }
    setTimeout(() => {
      document.getElementById("form1Clicker")?.click();
    }, 300);
  }

  public openRegistrationModal() {
    if (document.getElementById("modalLogin")?.classList.contains("show")) {
      document.getElementById("form1Hider")?.click();
    }
    setTimeout(() => {
      document.getElementById("form2Clicker")?.click();
    }, 300);
  }

  public goToHome() {

    window.scroll(0,0);

    if (this.isEnglish) this.router.navigate(["en"])

    else this.router.navigate([""])
  }

  public authorization(f: NgForm) {
    var profile = new ProfileDto();
    profile.login = f.value.username;
    profile.password = f.value.password;
    this.profileService.authorization(profile).subscribe(
      (data) => {
        console.log(data);
        if (data.state === 1) {
          if (this.isErrorWarning) {
            this.isErrorWarning = false
          }
          this.name = data.firstName;
          this.surname = data.lastName;
          LocalStorageSecurity.setItem(CommonKey.TOKEN, data.token);
          LocalStorageSecurity.setItem(CommonKey.NAME, data.firstName);
          LocalStorageSecurity.setItem(CommonKey.SURNAME, data.lastName);
          LocalStorageSecurity.setItem(CommonKey.IMG, data.imgLink);
          document.getElementById("form1Hider")?.click();
          this.isLoggedIn = true;
          localStorage.setItem('lastAction', Date.now().toString());
          this.check();
          this.initListener();
          this.initInterval();

          if (this.isLostWarning) {
            this.router.navigate(['i-lost'], {relativeTo: this.route});
          } else if (this.isFoundWarning) {
            this.router.navigate(['i-found'], {relativeTo: this.route});
          }
        } else if (data.state === -1) {
          this.isErrorWarning = true;
          // this.profile = new ProfileDto();
        }
      },
      (error: any) => console.log(error)
    );
  }

  public registration(f: NgForm) {
    console.log(f.value);
  }

  public logout() {
    if (location.pathname.split("/")[1] === "i-lost" ||
        location.pathname.split("/")[2] === "i-lost" ||
        location.pathname.split("/")[1] === "i-found" ||
        location.pathname.split("/")[2] === "i-found") {
      this.goToHome();
    }
    clearInterval(this.refreshIntervalId);
    this.isLoggedIn = false;
    this.isFoundWarning = false;
    this.isLostWarning = false;
    localStorage.clear();
    window.scrollTo(0, 0);
  }

  public shadowChanger() {
    document.querySelector(".navbar")?.classList.toggle("shadowChanger");
  }

  public findOpener() {
    this.isFoundWarning = true;
    document.getElementById("form1Clicker")?.click();
  }

  public lostOpener() {
    this.isLostWarning = true;
    document.getElementById("form1Clicker")?.click();
  }

  private getLastAction() {
    var test: string = localStorage.getItem(STORE_KEY)?.toString()!;
    if (test?.length > 0) {

      return parseInt(test)
    }
    return 0;
  }

  private setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

  private initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover', () => this.reset());
    document.body.addEventListener('mouseout', () => this.reset());
    document.body.addEventListener('keydown', () => this.reset());
    document.body.addEventListener('keyup', () => this.reset());
    document.body.addEventListener('keypress', () => this.reset());
  }

  private reset() {
    this.setLastAction(Date.now());
  }

  private refreshIntervalId;

  private initInterval() {
    this.refreshIntervalId = setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  private check() {
    const now = Date.now();
    const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    if (isTimeout) {
      this.logout();
    }
  }

  public goMyProfile() {
    if (LocalStorageSecurity.hasItem(CommonKey.TOKEN)) {
      this.router.navigate(["my-profile"], {relativeTo: this.route})
    } else {
      this.openLogInModal()
    }
  }
}
