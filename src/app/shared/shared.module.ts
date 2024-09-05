import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './components/chart/chart.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogService } from './services/mat-dialog.service';
import { CustomIconColorComponent } from './components/custom-icon-color/custom-icon-color.component';
import { FormsModule } from '@angular/forms';
import { LangSelectorComponent } from './components/langSelector/langSelector.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NoDataComponent } from './components/no-data/no-data.component';

@NgModule({
  declarations: [
    ChartComponent,
    CustomIconColorComponent,
    LangSelectorComponent,
    LoaderComponent,
    NoDataComponent,
  ],
  imports: [CommonModule, MaterialModule, TranslateModule],
  providers: [MatDialogService],
  exports: [
    MaterialModule,
    ChartComponent,
    ReactiveFormsModule,
    CustomIconColorComponent,
    FormsModule,
    LangSelectorComponent,
    LoaderComponent,
    NoDataComponent,
  ],
})
export class SharedModule {}
