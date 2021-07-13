import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {chooseImageFromTextAndNight} from "./image-utils"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clear Sky';
  public data: any;
  public city: any;

  ngOnInit(): void{

    this.clima()

    this.imageChange()
  }

/*   getCity(city: any){
    console.log($event);
  } */
  clima() {
    const apiKey = '8de24b65852e6b354d3e60e84a5a209b';
    let city = this.city

    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=sp&appid=${apiKey}&units=metric`)
    .subscribe(data => {
      console.log(data);
      
      this.data = data
    });
  }

  imageChange(){
    if(this.data.weather[0].description  === "clear sky"){
      let showImage = document.querySelector(".sun");
      showImage?.classList.remove("d-none") 
    }
    else if(this.data.weather[0].description  == 'overcast clouds'){
      let showImage = document.querySelector('.cloudy');
      showImage?.classList.remove('d-none');
    }
  } 
  
  showWeather(){
    const show = document.querySelector(".card");
    show?.classList.remove('d-none');
    const noShow = document.querySelector('.title');
    noShow?.classList.add('d-none');
    this.clima();
    this.imageChange();
  }

  chooseImageFromText = chooseImageFromTextAndNight
  


  constructor(public http: HttpClient){}

}


