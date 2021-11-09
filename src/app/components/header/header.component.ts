import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() showForm!:boolean;
  @Output() showFormChange = new EventEmitter<boolean>();

  constructor() {
   }

  ngOnInit(): void {
  }

  public toggleDisplay(): void {
    this.showForm = !this.showForm;
    console.log('reiksme isShow:', this.showForm);
    this.showFormChange.emit(this.showForm)
  }

}
