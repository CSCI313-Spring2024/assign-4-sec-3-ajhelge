import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent {
  @Input() contact: any = null;
  @Output() save = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<void>();

  editedContact: any = {};

  ngOnInit(){
    if(this.contact){
      this.editedContact = { ...this.contact };
    }
  }

  submit() {
    this.save.emit(this.editedContact);
    this.close();
  }
  close(){
    this.closeModal.emit();
  }
}
