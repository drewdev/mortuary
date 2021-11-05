import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  copyClickBoard() {
    navigator.clipboard.writeText('funerariascaminodeluz@gmail.com');
    alert("Correo electrónico funerariascaminodeluz@gmail.com copiado en el portapapeles");
  }
}
