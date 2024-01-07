import { Component } from '@angular/core';
import { User } from '../entities/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignupPageComponent {
  email: any;
  password: any;
  firstName: any;
  lastName: any;
  salary: any;
  dateSalary: any;
  amount: any;

  constructor(private router: Router, private httpService: UserService) {} // Inject Router in the constructor
  onSubmit() {
    const user: User = {
      id: 0,
      username: this.firstName,
      mail: this.email,
      password: this.password,
    };

    this.httpService.createUser(user).subscribe(
      (response) => {
        // Handle success response
        console.log('User added successfully:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        // Handle error response
        console.error('Error adding user:', error);
      }
    );
  }
}
