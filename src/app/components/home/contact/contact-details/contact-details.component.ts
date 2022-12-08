import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from 'src/app/_services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/_models/contact.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})

export class ContactDetailsComponent implements OnInit {
  // ATTRIBUTES
  @Input() viewMode = false;
  @Input() currentContact: Contact = {
    title: '',
    description: ''
  };
  message = '';
  // CONSTRUCTOR
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router) { }
  // DATA AVAILABLE
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getContact(this.route.snapshot.params["id"]);
    }
  }
  // GET DATA FROM DB
  getContact(id: string): void {
    this.contactService.get(id)
      .subscribe({
        next: (data) => {
          this.currentContact = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  // UPDATE DATA AND PUT IN DB
  updateContact(): void {
    this.message = '';
    this.contactService.update(this.currentContact.id, this.currentContact)
      .subscribe({
        next: (res) => {
          console.log(res);
          // ADDED
          this.router.navigate(['/contacts']);
          // ADDED /
          // this.message = res.message ? res.message : 'This contact was updated successfully!'; // ORIGINAL
        },
        error: (e) => console.error(e)
      });
  }
  // DELETE DATA FROM DB
  deleteContact(): void {
    this.contactService.delete(this.currentContact.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/contacts']);
        },
        error: (e) => console.error(e)
      });
  }

}