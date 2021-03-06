import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  dataVencimento!: Date;
  dataRecebimento!: Date;

  pt_BR: any;

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  categorias = [
    { label: 'Alimentação', value: 1 },
    { label: 'Transporte', value: 2 }
  ];

  pessoas = [
    { label: 'João das Neves', value: 1 },
    { label: 'Sebastião de Souza', value: 2 },
    { label: 'Maria Abadia', value: 3 }
  ];

  constructor() {

  };

  ngOnInit() {


      this.pt_BR = {
        firstDayOfWeek: 0,
        dayNames: [ "Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado" ],
        dayNamesShort: [ "dom","seg","ter","qua","qui","sex","sáb" ],
        dayNamesMin: [ "D","S","T","Q","Q","S","S" ],
        monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
        monthNamesShort: [ "Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez" ]
      };
  }

  salvar(dados: NgForm) {
    console.log(dados.value);
  }
}
