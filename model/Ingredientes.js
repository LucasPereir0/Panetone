function arredondar(valor){
 let arrendondado = Math.round(valor);
    if (arredondar === 0){
        return 1;
    }

    return arrendondado
}
    export default class Ingredientes {
    constructor (quantidade,tamanho){

        this.quantidade = quantidade
        this.tamanho = tamanho
    }

    calcularIngrediente () {
        this.farinha =((250/440) * this.tamanho).toFixed(2);
        this.fermento =((5/440) * this.tamanho).toFixed(2);
        this.leite = Math.round((60/440) * this.tamanho);
        this.ovo = arredondar((2/440) * this.tamanho);
        this.manteiga =((50/440) * this.tamanho).toFixed(2);
        this.acucar =((70/440) * this.tamanho).toFixed(2);
        this.baunilha = Math.round((5/440) * this.tamanho);
        this.chocolate =((80/440) * this.tamanho).toFixed(2);
        this.avela =((50/440) * this.tamanho).toFixed(2);
        this.brigadeiro =((50/440) * this.tamanho).toFixed(2);
        this.doceleite =((50/440) * this.tamanho).toFixed(2);
        this.sal =((2/440) * this.tamanho).toFixed(2);

        return this;
    }

    calcularIngredienteQuantidade (){
        this.farinhaTotal = this.farinha * this.quantidade;
        this.fermentoTotal = this.farinha * this.quantidade;
        this.leiteTotal = this.farinha * this.quantidade;
        this.ovoTotal = this.farinha * this.quantidade;
        this.manteigaTotal = this.farinha * this.quantidade;
        this.acucarTotal = this.farinha * this.quantidade;
        this.baunilhaTotal = this.farinha * this.quantidade;
        this.chocolateTotal = this.farinha * this.quantidade;
        this.avelaTotal = this.farinha * this.quantidade;
        this.brigadeiroTotal = this.farinha * this.quantidade;
        this.doceleiteTotal = this.farinha * this.quantidade;
        this.salTotal = this.farinha * this.quantidade;

        return this;
    }

    calcularPreco(){
        this.precoFarinha = this.farinha * (17.99 / 5000)
        this.precoFermento = this.fermento * (70.22 / 1000)
        this.precoLeite = this.leite * (4,69 / 1000)
        this.precoOvo = this.ovo * (27.99 / 30)
        this.precoManteiga = this.manteiga * (13.99 / 200)
        this.precoAcucar = this.acucar * (16.79 / 5000)
        this.precoBaunilha = this.baunilha * (17.29 / 1000)
        this.precoChocolate = this.chocolate * (133.90 / 2050)
        this.precoAvela = this.avela * (229.90 / 3000)
        this.precoBrigadeiro = this.brigadeiro * (138 / 2570)
        this.precoDoceleite = this.doceleite * (112 / 4750)
        this.precoSal = this.sal * (3.89 / 1000)

        return(this.precoFarinha + this.precoFermento + this.precoLeite + this.precoOvo + this.precoManteiga + this.precoAcucar + this.precoBaunilha + this.precoChocolate + this.precoBrigadeiro + this.precoAvela + this.precoDoceleite + this.precoSal)
    }
    
    calcularPrecoTotal() {
        return (this.calcularPreco()) * this.quantidade
    }
    
    calcularVolume() {
        this.volume = Math.PI * Math.pow(this.raio, 2) * this.altura
        if (0.6 >= (this.tamanho / volume) <= 0.8) {
            return this.volume
        } else {
            return false
        }
        // Caso retorne "false" significa que a densidade é muito baixa, logo, teria que alterar ou a medida do panetona ou o raio e a altura
    }
    calcularVolumeTotal() {
        if((this.calcularVolume()) != false){
            return (this.calcularVolume()) * this.quantidade
        }
    }
    }
