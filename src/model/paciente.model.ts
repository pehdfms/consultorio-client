import { Convenio } from "./convenio.model";
import { Pessoa } from "./pessoa.model";
import { TipoAtendimento } from "./tipo_atendimento.enum";

export class Paciente extends Pessoa{
  numero_cartao_convenio : string
  tipo_atendimento : TipoAtendimento
  data_vencimento : Date
  convenio : Convenio
}
