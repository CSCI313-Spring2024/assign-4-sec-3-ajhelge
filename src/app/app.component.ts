import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactCardComponent } from "./contact-card/contact-card.component";
import { CommonModule } from '@angular/common';
import { AddContactComponent } from "./add-contact/add-contact.component";
import { EditContactComponent } from "./edit-contact/edit-contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactCardComponent, CommonModule, AddContactComponent, EditContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-four';
  editContactData: any = null;
  showModal = false;
  showEditModal = false;
  startEditContact(contact: any) {
    this.editContactData = { ...contact };
    this.showEditModal = true;
  }
  saveEditedContact(updated: any){
    this.contacts = this.contacts.map(c => c.phone === updated.phone ? updated : c);
    this.showEditModal = false;
  }
  addContact(contact: any) {
    this.contacts.push(contact);
    this.showModal = false;
  }
  deleteContact(phone: string){
    this.contacts = this.contacts.filter(contact => contact.phone !== phone);
  }
  contacts = [
    { first: 'Alice', last: 'Helgeson', email: 'alice@example.com', phone: '123-456-7890' },
    { first: 'Bob', last: 'Helgeson', email: 'bob@example.com', phone: '987-654-3210' }
  ];
}
export interface Contact{
  first: string;
  last: string;
  phone: string;
  email: string;
}
