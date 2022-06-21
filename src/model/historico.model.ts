import { AbstractEntity } from "./abstract-entity.model";
import { Agenda } from "./agenda.model";
import { Paciente } from "./paciente.model";
import { Secretaria } from "./secretaria.model";
import { StatusAgenda } from "./status_agenda.enum";

export class Historico extends AbstractEntity{
  status_agenda : StatusAgenda
  observacao : string
  secretaria : Secretaria
  paciente : Paciente
  agenda : Agenda
  data : Date
}
