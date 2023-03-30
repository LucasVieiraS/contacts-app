import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContactsList } from '../interfaces/ContactsList';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage implements OnInit {

  public contacts: ContactsList[] = [
    {
      id: '(81) 9962-1252',
      name: 'Juan',
      image: 'https://media.istockphoto.com/id/813145828/pt/foto/serious-young-man.jpg?b=1&s=170667a&w=0&k=20&c=pudtVvuzWb_BRkj9lKTyzzpiv3kVzRXkWW8ImL8rO3A=',
      email: 'juan@gmail.com',
    },
    {
      id: '(81) 9876-5432',
      name: 'Maria',
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      email: 'maria@hotmail.com',
    },
    {
      id: '(11) 1234-5678',
      name: 'Pedro',
      image: 'https://media.istockphoto.com/photos/portrait-of-handsome-man-picture-id1245419427',
      email: 'pedro@yahoo.com',
    },
    {
      id: '(21) 9999-8888',
      name: 'Juliana',
      image: 'https://media.istockphoto.com/photos/happy-woman-laughing-outdoors-picture-id1154090429',
      email: 'juliana@gmail.com',
    },
    {
      id: '(31) 5555-4444',
      name: 'Carlos',
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      email: 'carlos@outlook.com',
    },
  ];

  public results = [...this.contacts];
  public ordered = [];

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.contacts.filter(d => d.name.toLowerCase().indexOf(query) > -1);
    this.resortList();
  }

  constructor(private dataService: DataService, private route: Router) {}

  showInfoModal(contact: ContactsList) {
    this.dataService.setData('contact', contact);
    this.route.navigateByUrl('/contact-data');
  }

  resortList() {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.ordered.forEach((letter: string) => {

    })
  }

  ngOnInit(): void {
    this.resortList();
  }
}
