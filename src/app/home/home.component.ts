import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../service/trending.service';
import { Repository } from '../model/repository';
import { Language } from '../model/language';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  repositories: Repository;
  languages: Language;
  selectedSince = 'daily';
  selectedLanguage = 'all';
  loading = true;

  constructor(private trendingService: TrendingService) { }

  ngOnInit() {
    this.loadLanugaes();
    this.loadRepos();
  }

  onLanuguageSelected(event) {
    this.loadRepos(event, this.selectedSince);
  }

  onSinceSelected(event) {
    this.loadRepos(this.selectedLanguage, event);
  }

  loadRepos(language: string = '', since: string = '') {
    language = (language !== 'all' ? language : '');
    this.trendingService.getTrendingRepos(language, since).subscribe({
      next: (data: Repository) => this.repositories = data,
      complete: () => this.loading === false
    });
  }

  loadLanugaes() {
    this.trendingService.getLanguages().subscribe({
      next: (data: Language) => this.languages = data
    });
  }
}
