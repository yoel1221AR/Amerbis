import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { IpRoleService } from '../../services/ip-role.service';

@Component({
  selector: 'app-ip-header',
  templateUrl: './ip-header.component.html',
  styleUrls: ['./ip-header.component.scss'],
})
export class IpHeaderComponent implements OnInit {
  @Input() Title: string = '';
  userName: string = '';
  role: string = '';

  constructor(
    private cookieService: CookieService,
    private location: Location,
    private roleService: IpRoleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    /** Verificar el tema de las cookies */
    this.role = this.roleService.getTypeManager();
    this.userName = this.cookieService.get('username');
    
  } 

  showTitleButton(): boolean {
    const desiredRoutes = [
      '/invopay/bill/details',
      '/invopay/new-invoice',
      '/invopay/new-invoice',
      '/invopay/payment-details',
    ];

    const currentRoute = this.router.url;

    return desiredRoutes.some(route => currentRoute.includes(route));
  }

  goBack() {
    this.location.back();
  }
}
