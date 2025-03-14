export default class Panetone{
    constructor(raio, altura, massa){
        this.raio = raio
        this.altura = altura
        this.massa = massa
    }
    calcularVolume(){
        this.densidade = (this.raio / this.altura)
        if(0.6 <= this.densidade >= 0.8){
            console.log("Valor inválido, densidade muito alta ou muito baixa!!!!")
        }else{
            this.volume = this.massa / this.densidade
        }
        return this.volume
    }
}