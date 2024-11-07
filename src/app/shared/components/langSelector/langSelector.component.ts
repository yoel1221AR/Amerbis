import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Lang } from '../../models/Lang';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-langSelector',
  templateUrl: './langSelector.component.html',
  styleUrls: ['./langSelector.component.scss'],
})
export class LangSelectorComponent implements OnInit {
  langs: Lang[] = [];
  selectedLang!: Lang; // Propiedad para el idioma seleccionado

  constructor(
    public translate: TranslateService,
    public langService: LangService
  ) {}

  ngOnInit() {
    this.langs = this.langService.getAllLanguages();
    this.selectedLang = this.langService.getCurrentLanguage(); // Inicializar el idioma seleccionado
  }

  selectLang(langCode: string) {
    this.langService.setCurrentLanguage(langCode);
    this.selectedLang = this.langs.find(lang => lang.code === langCode) || this.selectedLang;
  }
}
