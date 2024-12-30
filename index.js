function Ranqueada(vitorias, derrotas){
    saldoVitorias = vitorias - derrotas;
    let nivel;
    if(saldoVitorias < 10){
        nivel = 'Ferro'
    }else if(saldoVitorias >= 11 && saldoVitorias < 20){
        nivel = 'Bronze'
    }else if(saldoVitorias >= 21 && saldoVitorias < 50){
        nivel = 'Prata'
    }else if(saldoVitorias >= 51 && saldoVitorias < 80){
        nivel = 'Ouro'
    }else if(saldoVitorias >= 81 && saldoVitorias < 90){
        nivel = 'Diamante'
    }else if(saldoVitorias >= 91 && saldoVitorias < 99){
        nivel = 'Lendário'
    }else if(saldoVitorias >= 100){
        nivel = 'Imortal'
    }
    return console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)
}

console.log(Ranqueada(90, 50));