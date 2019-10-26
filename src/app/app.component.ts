import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent   {
    private isAuth : boolean = false; 
    lastUpdate = new Date();
    appareils : any[];
    constructor( private appareilservice : AppareilService) {
     
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit(){
this.appareils = this.appareilservice.appareils;
  }
  
  public getIsAuth(): boolean{
    return this.isAuth;
  }
  public setIsAuth(value : boolean) : void{
    this.isAuth = value;
  }
onAllumer() {
    this.appareilservice.switchOnAll();
}
onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilservice.switchOffAll();
    } else {
      return null;
    }
}
}
