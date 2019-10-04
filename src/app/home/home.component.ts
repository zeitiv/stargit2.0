import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../service/trending.service';
import { Repository } from '../model/repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  repositories: Repository;
  constructor(private trendingService: TrendingService) { }

  ngOnInit() {
    this.loadRepos();
    console.log(this.repositories);
  }

  loadRepos() {
    this.trendingService.getTrendingRepos().subscribe({
      next: (data: Repository) => this.repositories = data,
      complete: () => console.log(this.repositories)
    });
  }
}
