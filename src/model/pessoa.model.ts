import { AbstractEntity } from "./abstract-entity.model";
import { Sexo } from "./sexo.enum";

export class Pessoa extends AbstractEntity{
  nacionalidade! : string
  telefone! : string
  celular! : string
  email! : string
  login! : string
  senha! : string
  nome!  : string
  cpf!   : string
  rg!    : string
  sexo!  : Sexo
}
