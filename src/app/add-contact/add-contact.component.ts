import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  @Output() add = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<void>();

  newContact = {
    first: '',
    last: '',
    email: '',
    phone: ''
  };

  submit() {
    this.add.emit(this.newContact);
    this.close();
  }

  close() {
    this.closeModal.emit();
  }
}
