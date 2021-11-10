import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User;

  constructor(
              private accessService: AccessService,
              private router: Router
  ) { 
    this.user = {
      username: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  public register(form: NgForm): void {
    console.log('registuojuosi');
    console.log(this.user);
    this.accessService.register(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    })
    form.form.reset();
  }
}
