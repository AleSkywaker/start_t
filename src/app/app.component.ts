import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  abrirSidebar() {
    $('#sidebar').toggleClass('active');
    $('#sidebarCollapse').toggleClass('active');
    $(this).toggleClass('active');
  }
}
