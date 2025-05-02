export interface IStartup {
  nome: string;
  settore: 'Tecnologia Wearable' | 'App per il Fitness' | 'Attrezzature Sportive';
  descrizione: string;
  offerte: 'Prodotti' | 'Servizi' | 'Pacchetti'

  riceviIncentivo(incentivo: IIncentivo): void;
}

export interface IIncentivo {
  codiceIdentificativo: number;
  descrizione: string;
  valoreIncentivo: number;
  criterioEleggibilita: string;

  assegnaAStartup(startup: IStartup): void;
}

export interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string;

  partecipaAttivita(startup: IStartup): void;
}