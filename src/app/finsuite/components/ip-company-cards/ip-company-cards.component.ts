import { Component } from '@angular/core';

import { InvoicesDataResponse } from '../../interfaces/Iip-invoices-data-response';
import { IpStatisticsService } from '../../services/ip-statistics.service';
import { CompanySummaryCards } from '../../interfaces/Iip-company-summary-cards';

@Component({
  selector: 'app-ip-company-cards',
  templateUrl: './ip-company-cards.component.html',
  styleUrls: ['./ip-company-cards.component.scss']
})
export class IpCompanyCardsComponent {
  data: CompanySummaryCards = {
    expired: -1,
    pending: -1,
  };
  fallbackData = {
    expired: '...',
    pending: '...',
  };
  invoicePayments!: number;
  invoicePaymentsFallback: string = '...';
  remainingPayments!: number;
  remainingPaymentsFallback: string = '...';

  constructor(private ipStatisticsService: IpStatisticsService) { }

  ngOnInit() {
    // Make calls
    this.ipStatisticsService.getTotalInvoices('overdue').subscribe(
      this.generateObserver('expired')
    );
    this.ipStatisticsService.getTotalInvoices('pending').subscribe(
      this.generateObserver('pending')
    );
    this.ipStatisticsService.getInvoicePayments().subscribe({
      next: invoicesDataResponse => {
        this.invoicePayments = invoicesDataResponse.amount;
      },
      error: error => {
        console.log(error);
        this.invoicePaymentsFallback = 'N/A';
      },
    });
    this.ipStatisticsService.getRemainingPayments().subscribe({
      next: invoicesDataResponse => {
        this.remainingPayments = invoicesDataResponse.amount;
      },
      error: error => {
        console.log(error);
        this.remainingPaymentsFallback = 'N/A';
      },
    });
  }

  generateObserver(status: 'expired' | 'pending') {
    return {
      next: (response: InvoicesDataResponse) => {
        this.data[status] = response.amount;
      },
      error: (error: Error) => {
        console.log(error);
        this.fallbackData[status] = 'N/A';
      },
    };
  }
}
