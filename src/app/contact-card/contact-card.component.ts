import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  @Input() contact: {first: string, last: string, phone: string, email: string} = {
    first: '',
    last: '',
    phone: '',
    email: ''
  };
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<any>();

  OnDelete() {
    this.delete.emit(this.contact.phone);
  }
  OnEdit(){
    this.edit.emit(this.contact);
  }
}
