import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/shared/newsapi/newsapi.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {
  displayHeadline:any = [];
  constructor(private service:NewsapiService) { }

  ngOnInit(): void {
    this.service.topHeading().subscribe((res) => {
      // console.log(res);
      this.displayHeadline = res.articles;
      // console.log(this.displayHeadline);

    })

  }

}
