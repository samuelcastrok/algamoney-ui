import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CepServiceService } from '../cep-service.service';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  endereco = {
    cep : '',
    logradouro: '',
    bairro: '',
    cidade: '',
    uf: ''
  }

  constructor(private cepService: CepServiceService) { }

  consultaCEP(valor: String) {
    if ((valor != "_____-___") && (valor != "")) {
      this.cepService.buscar(valor).subscribe((dados) => this.carregaEndereco(dados));
    }
  }

  carregaEndereco(dados: any) {
    this.endereco.cep = dados.cep;
    this.endereco.logradouro = dados.logradouro;
    this.endereco.bairro = dados.bairro;
    this.endereco.cidade = dados.localidade;
    this.endereco.uf = dados.uf;
  }

  salvar(dados: NgForm){

  }

  ngOnInit(): void {
  }

}
