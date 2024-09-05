import { Component, OnInit } from '@angular/core';

import { IncomeEmployee } from '../../interfaces/Iip-employee-income-card';
import { IpCardEmployeeIncomeService } from '../../services/ip-card-employee-income.service';

@Component({
  selector: 'app-ip-income-card',
  templateUrl: './ip-income-card.component.html',
  styleUrls: ['./ip-income-card.component.scss'],
})
export class IpIncomeCardComponent implements OnInit {
  incomeEmployee!: IncomeEmployee;

  constructor(private ipCardEmployeeIncome: IpCardEmployeeIncomeService) { }

  ngOnInit() {
    this.ipCardEmployeeIncome.getData().subscribe((data) => {
      this.incomeEmployee = data;
    });
  }
}
