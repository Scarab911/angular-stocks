import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User;

  constructor(private accessService: AccessService,
              private router: Router
              ) {
    this.user = {
      username: '',
      password: ''
    }
   }

  ngOnInit(): void {
  }
  public login(): void {
    this.accessService.login(this.user).subscribe((resp) => {
      this.accessService.getToken(resp.token);
      this.router.navigate(['/home']);
      console.log('Prisilogino', resp);
      
    })
  }
}
