import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() showForm!:boolean;
  @Output() showFormChange = new EventEmitter<boolean>();

  constructor( private accessService: AccessService,
               private router: Router
    ) {
   }

  ngOnInit(): void {
  }

  public toggleDisplay(): void {
    this.showForm = !this.showForm;
    console.log('reiksme isShow:', this.showForm);
    this.showFormChange.emit(this.showForm)
  }

  public get isLogged(): boolean {
    return this.accessService.isLoggedIn;
  }

  public clearSesion(): void {
    this.accessService.clearSesion();
  //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  //  this.router.navigate(['/home']));
    // this.router.navigate(['/login']);
  }
}
