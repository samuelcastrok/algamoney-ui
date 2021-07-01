import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-grid',
  templateUrl: './pessoa-grid.component.html',
  styleUrls: ['./pessoa-grid.component.css']
})
export class PessoaGridComponent implements OnInit {

  @Input() pessoas: any;

  constructor() { }

  ngOnInit(): void {
  }

}
