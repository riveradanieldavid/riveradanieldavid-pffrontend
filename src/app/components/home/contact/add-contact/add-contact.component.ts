import { Component } from '@angular/core';
import { Contact } from 'src/app/_models/contact.model';
import { ContactService } from 'src/app/_services/contact.service';
// ADDED
import { ActivatedRoute, Router } from '@angular/router';
// ADDED /

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})

export class AddContactComponent {
  // ATTRIBUTES
  contact: Contact = {
    title: '',
    description: ''
  };
  submitted = false;
  // CONSTRUCTOR
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router) { }
  // SAVE DATA
  saveContact(): void {
    const data = {
      title: this.contact.title,
      description: this.contact.description
    };
    // SERVICE
    this.contactService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          this.router.navigate(['/contacts']);
          // ADDED /
          // this.submitted = true; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }

  newContact(): void {
    this.submitted = false;
    this.contact = {
      title: '',
      description: ''
    };
  }

}

