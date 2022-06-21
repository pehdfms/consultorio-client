import { Especialidade } from "./especialidade.model";
import { Pessoa } from "./pessoa.model";

export class Medico extends Pessoa{
  consultorio! : string
  crm! : string
  porcentagem_participacao : Number
  valor_consulta : Number
  especialidade : Especialidade
}
