import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cards = [
    { id: 1, imageUrl: '../assets/image/image1.jpg', title: 'Card 1' },
    { id: 2, imageUrl: '../assets/image/image2.jpg', title: 'Card 2' },
    { id: 3, imageUrl: '../assets/image/image3.jpg', title: 'Card 3' }
  ];
}
