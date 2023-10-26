import { DetailEquipe } from "./detailEquipe";
import { Etudiant } from "./etudiant";
import { Niveau } from "./Niveau";


export class Equip {
    constructor(init?: Partial<Equip>){
        Object.assign(this, init);
    }
    idEquipe?:number;
    nomEquipe:string;
    niveau:Niveau;
    detailEquipe:DetailEquipe;
    etudiants:Etudiant[]
}