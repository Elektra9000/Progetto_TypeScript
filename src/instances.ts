import { Startup } from "./classes.js";
import { Incentivo } from "./classes.js";
import { Cittadino } from "./classes.js";

const startup1 = new Startup('Bounce', 'App per il Fitness', 'Applicazione per allenamenti personalizzati', 'Servizi');

const incentivo1 = new Incentivo(489305, 'Bonus per incentivare l\'attività sportiva', 500, 'Esclusivo per nuove aziende');

const cittadino1 = new Cittadino('Paolo', 'Rossi', 39, 'Corsa e Ciclismo');

startup1.riceviIncentivo(incentivo1);
incentivo1.assegnaAStartup(startup1);
cittadino1.partecipaAttivita(startup1);
