export class Startup {
    constructor(nome, settore, descrizione, offerte) {
        this.nome = nome;
        this.settore = settore;
        this.descrizione = descrizione;
        this.offerte = offerte;
    }
    riceviIncentivo(incentivo) {
        console.log(`${this.nome} può erogare l'incentivo di valore ${incentivo.valoreIncentivo}`);
    }
}
export class Incentivo {
    constructor(codiceIdentificativo, descrizione, valoreIncentivo, criterioEleggibilita) {
        this.codiceIdentificativo = codiceIdentificativo;
        this.descrizione = descrizione;
        this.valoreIncentivo = valoreIncentivo;
        this.criterioEleggibilita = criterioEleggibilita;
    }
    assegnaAStartup(startup) {
        console.log(`L'incentivo ${this.codiceIdentificativo} (${this.descrizione}) è stato assegnato alla startup ${startup}`);
    }
}
export class Cittadino {
    constructor(nome, cognome, eta, interessiSportivi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }
    partecipaAttivita(startup) {
        console.log(`${this.nome} ${this.cognome}, di ${this.eta} anni, partecipa alle attività offerte da ${startup.nome} nel settore ${startup.settore}.`);
    }
}
