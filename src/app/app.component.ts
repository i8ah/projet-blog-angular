import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [

   new Post('Mon premier post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae qui perferendis, doloremque eveniet a doloribus repudiandae dicta autem dolorum aliquam recusandae architecto tempore repellendus id temporibus, rerum. Tempora, magnam, ipsa!',
      1)
  ,

  new Post('Mon deuxième post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae qui perferendis, doloremque eveniet a doloribus repudiandae dicta autem dolorum aliquam recusandae architecto tempore repellendus id temporibus, rerum. Tempora, magnam, ipsa!',
      -1)

  ,

  new Post('Encore un post',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae qui perferendis, doloremque eveniet a doloribus repudiandae dicta autem dolorum aliquam recusandae architecto tempore repellendus id temporibus, rerum. Tempora, magnam, ipsa!',
      0)

  ];

}


class Post {

  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(title, content, loveIts) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = new Date();
  }

}
