import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  inputSenhaChamada: string = '';
  inputNovaSenha: string = '';
  constructor(public senhasService: SenhasService) {}

}
