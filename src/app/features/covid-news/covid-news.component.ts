import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/shared/newsapi/newsapi.service';

@Component({
  selector: 'app-covid-news',
  templateUrl: './covid-news.component.html',
  styleUrls: ['./covid-news.component.scss']
})
export class CovidNewsComponent implements OnInit {
  displayCovidNews:any = [];
  constructor(private service:NewsapiService) { }

  ngOnInit(): void {
    this.service.covidNews().subscribe((res) => {
      console.log(res);
      this.displayCovidNews = res.articles;
      console.log(this.displayCovidNews);

    });
  }

}
