import { AbstractEntity } from "./abstract-entity.model";
import { Medico } from "./medico.model";
import { Paciente } from "./paciente.model";
import { Secretaria } from "./secretaria.model";
import { StatusAgenda } from "./status_agenda.enum";

export class Agenda extends AbstractEntity{
  status   : StatusAgenda
  data_de   : Date
  data_ate  : Date
  encaixe  : boolean
  paciente : Paciente
  medico   : Medico
  secretaria : Secretaria
}
