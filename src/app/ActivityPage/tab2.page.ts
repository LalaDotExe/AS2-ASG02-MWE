import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  searchTerm: string = '';

  clubsAndEvents = [
    { name: 'Esport Convo Event', imageUrl: 'assets/img/PestaConvo.jpg' },
    { name: 'Esport Club', imageUrl: 'assets/img/EsportClub.jpg' },
    { name: 'Golden Night Event', imageUrl: 'assets/img/GoldenNight.jpg' },
    { name: 'Handball Club', imageUrl: 'assets/img/handball.jpg' },
  ];

  filteredClubsAndEvents = this.clubsAndEvents;

  filterClubsAndEvents() {
    this.filteredClubsAndEvents = this.clubsAndEvents.filter((item) => {
      return item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
