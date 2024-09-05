import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ICardDashboard } from '../../interfaces/Icard-dashboard';
import { IpCardDashboardService } from '../../services/ip-card-dashboard.service';

@Component({
  selector: 'app-ip-cards-dashboard',
  templateUrl: './ip-cards-dashboard.component.html',
  styleUrls: ['./ip-cards-dashboard.component.scss'],
})
export class IpCardsDashboardComponent implements OnInit, OnDestroy {
  cards!: ICardDashboard[];
  subscription !: Subscription;
  @Input() type: "business" | "provider" = "provider";

  constructor(private CardDashboardService: IpCardDashboardService) { }

  ngOnInit() {
    this.loading();
  }
  loading() {
    let observer: Observable<ICardDashboard[]> = this.type == "business" ? this.CardDashboardService.infoData() : this.CardDashboardService.infoDataProvider();
    this.subscription = observer.subscribe(res => {
      this.cards = res;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
