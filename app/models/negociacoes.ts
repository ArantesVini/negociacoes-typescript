import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = []; // Um de cada forma, para aprendizado

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }
  lista(): readonly Negociacao[] {
    // Preferi a primeira
    return this.negociacoes;
  }
}
