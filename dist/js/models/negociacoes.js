export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Um de cada forma, para aprendizado
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // Preferi a primeira
        return this.negociacoes;
    }
}
