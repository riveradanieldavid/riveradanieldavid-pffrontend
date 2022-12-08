import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/_models/contact.model';
import { ContactService } from 'src/app/_services/contact.service';
// ADDED
import { TokenStorageService } from 'src/app/_services/token-storage.service';
// ADDED /

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // ATTRIBUTES
  contact?: Contact[];
  ccccurrentContact: Contact = {};
  currentIndex = -1;
  title = '';
  // ADDED
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  // ADDED /

  // CONSTRUCTOR
  constructor(private contactService: ContactService,
    // ADDED
    private tokenStorageService: TokenStorageService
    // ADDED /
  ) { }

  // DATA AVAILABLE
  ngOnInit(): void {
    this.retrieveContact();
    // ADDED
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
    // ADDED /
  }
  // GET DATA FROM SERVICES TO BE AVAILABLE IN THE HTML FILE
  retrieveContact(): void {
    this.contactService.getAll()
      .subscribe({
        next: (data) => {
          this.contact = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveContact();
    this.ccccurrentContact = {};
    this.currentIndex = -1;
  }
  // SHOW ARTICE TO EDIT
  setActiveContact(contact: Contact, index: number): void {
    this.ccccurrentContact = contact;
    this.currentIndex = index;
  }

}
