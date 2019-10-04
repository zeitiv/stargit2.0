import { Component } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private sidebarService: NbSidebarService, private themeService: NbThemeService) {}
  title = 'stargit';
  sun = 'sun-outline';
  moon = 'moon-outline';
  icon = this.sun;

  items = [
    {
      title: 'Trending',
      icon: 'star-outline',
      link: [],
    },
    {
      title: 'Discord',
      icon: 'message-square-outline',
      url: 'https://discord.gg/yvmEcGM',
      target: '_blank'
    },
    {
      title: 'About',
      icon: 'info-outline',
      link: [],
    },
    {
      title: 'Github',
      icon: 'github-outline',
      url: 'https://github.com/theArgex/stargit2.0',
      target: '_blank'
    },
  ];

  toggle() {
    this.sidebarService.toggle(true, 'left');
  }

  changeTheme() {
    if (this.icon === this.sun) {
      this.themeService.changeTheme('default');
      this.icon = this.moon;
    } else {
      this.themeService.changeTheme('dark');
      this.icon = this.sun;
    }
  }
}
