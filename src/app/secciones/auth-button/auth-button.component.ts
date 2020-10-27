import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
templateUrl: './auth-button.component.html',
  styleUrls: []
})
export class AuthButtonComponent{

  constructor(public document: Document, public auth: AuthService) { }
}
