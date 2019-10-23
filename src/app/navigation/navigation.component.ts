import { User } from 'src/models/user';
import { AuthenticationService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user: User;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.authService.currentUser.subscribe(u => { this.user = u; });
  }

  async logOut() {
    await this.authService.logout();
  }

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthenticationService) {}

}
