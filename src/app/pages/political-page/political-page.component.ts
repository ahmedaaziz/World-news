import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/shared/newsapi/newsapi.service';

@Component({
  selector: 'app-political-page',
  templateUrl: './political-page.component.html',
  styleUrls: ['./political-page.component.scss']
})
export class PoliticalPageComponent implements OnInit {
  displayPoliticalPage:any = [];
  constructor(private service:NewsapiService) { }

  ngOnInit(): void {
    this.service.politicalNews().subscribe((res)=> {
      console.log(res);
      this.displayPoliticalPage = res.articles;
    })
  }

}
