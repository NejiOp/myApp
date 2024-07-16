import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cards = [
    {
      imageUrl: '../assets/image/image1.jpg',
      title: 'Card 1',
      description: 'Description for Card 1'
    },
    {
      imageUrl: '../assets/image/image2.jpg',
      title: 'Card 2',
      description: 'Description for Card 2'
    },
    {
      imageUrl: '../assets/image/image3.jpg',
      title: 'Card 3',
      description: 'Description for Card 3'
    },
    {
      imageUrl: '../assets/image/image4.jpg',
      title: 'Card 4',
      description: 'Description for Card 4'
    },
    {
      imageUrl: '../assets/image/image5.jpg',
      title: 'Card 5',
      description: 'Description for Card 5'
    },
    {
      imageUrl: '../assets/image/image6.jpg',
      title: 'Card 6',
      description: 'Description for Card 6'
    }
  ];
}
