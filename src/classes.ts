import { ICittadino, IIncentivo, IStartup } from "./interfaces";

export class Startup implements IStartup {
  nome: string;
  settore:
    | "Tecnologia Wearable"
    | "App per il Fitness"
    | "Attrezzature Sportive";
  descrizione: string;
  offerte: "Prodotti" | "Servizi" | "Pacchetti";

  constructor(
    nome: string,
    settore: IStartup["settore"],
    descrizione: string,
    offerte: IStartup["offerte"]
  ) {
    this.nome = nome;
    this.settore = settore;
    this.descrizione = descrizione;
    this.offerte = offerte;
  }

  riceviIncentivo(incentivo: IIncentivo): void {
    console.log(
      `${this.nome} può erogare l'incentivo di valore ${incentivo.valoreIncentivo}`
    );
  }
}

export class Incentivo implements IIncentivo {
  codiceIdentificativo: number;
  descrizione: string;
  valoreIncentivo: number;
  criterioEleggibilita: string;

  constructor(
    codiceIdentificativo: number,
    descrizione: string,
    valoreIncentivo: number,
    criterioEleggibilita: string
  ) {
    this.codiceIdentificativo = codiceIdentificativo;
    this.descrizione = descrizione;
    this.valoreIncentivo = valoreIncentivo;
    this.criterioEleggibilita = criterioEleggibilita;
  }

  assegnaAStartup(startup: IStartup): void {
    console.log(
      `L'incentivo ${this.codiceIdentificativo} (${this.descrizione}) è stato assegnato alla startup ${startup}`
    );
  }
}

export class Cittadino implements ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string;

  constructor(
    nome: string,
    cognome: string,
    eta: number,
    interessiSportivi: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.interessiSportivi = interessiSportivi;
  }

  partecipaAttivita(startup: IStartup): void {
    console.log(
      `${this.nome} ${this.cognome}, di ${this.eta} anni, partecipa alle attività offerte da ${startup.nome} nel settore ${startup.settore}.`
    );
  }
}
