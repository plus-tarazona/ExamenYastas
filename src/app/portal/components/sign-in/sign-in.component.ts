import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { YtsSweetAlertService } from 'src/app/commons/services';
import { IUserGet } from  '../../commons/interfaces/user-get.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  get formValid(): boolean {
    return this.form.pristine || this.form.invalid;
  }

  get usernameControl(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private sweetAlertService: YtsSweetAlertService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  signIn(): void {
    if (this.form.valid) {
      this.validateCredentials();
    }
  }

  validateCredentials(): void {
    this.sweetAlertService.showLoading();
    if (this.usernameControl.value === 'user' && this.passwordControl.value === 'root') {
      setTimeout(() => {
        this.sweetAlertService.closeLoading();
        this.goToHome();
      }, 2000);
    }
  }

  initializeUser(): void {
    const user: IUserGet = {
      nombres: 'Wilder Jonas',
      apellidos: 'Tarazona Campomanes',
      dni: '46437246',
      celular: '967735519'
    };
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  goToHome(): void {
    this.router.navigateByUrl('/admin');
  }

}
