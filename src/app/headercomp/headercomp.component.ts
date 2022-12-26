import { Component } from '@angular/core';

@Component({
  selector: 'app-headercomp',
  templateUrl: './headercomp.component.html',
  styleUrls: ['./headercomp.component.css']
})
export class HeadercompComponent {
    menu(data:any){
      console.log('working fine', data)
      data.toggle();
    }
}
