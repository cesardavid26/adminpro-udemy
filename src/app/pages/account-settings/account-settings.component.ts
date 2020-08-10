import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/services.index';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';




@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( 
  public _AJUSTES: SettingsService) { }

  ngOnInit(): void {
    this.colocarCheck();
  }
  cambiarColor(tema: string, link:any){
    this.aplicarCheck(link);
    this._AJUSTES.aplicarTema(tema);

  }

  aplicarCheck(link:any){

    let selectores: any = document.getElementsByClassName('selector');

    for (let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');

  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._AJUSTES.ajustes.tema;
    for (let ref of selectores){
     if( ref.getAttribute('data-theme') == tema ){
       ref.classList.add('working');
       break;
     }
    }
  }
}
