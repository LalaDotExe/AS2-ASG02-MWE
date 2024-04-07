import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  searchTerm: string = '';

  clubsAndEvents = [
    {
      name: 'Esport Convo Event',
      imageUrl: 'assets/img/PestaConvo.jpg',
      id: '/esport-event',
    },
    {
      name: 'Esport Club',
      imageUrl: 'assets/img/EsportClub.jpg',
      id: '/esport-club',
    },
    {
      name: 'Golden Night Event',
      imageUrl: 'assets/img/GoldenNight.jpg',
      id: '/golden-event',
    },
    {
      name: 'Handball Club',
      imageUrl: 'assets/img/handball.jpg',
      id: '/handball-club',
    },
  ];

  filteredClubsAndEvents = this.clubsAndEvents;

  filterClubsAndEvents() {
    this.filteredClubsAndEvents = this.clubsAndEvents.filter((item) => {
      return item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
