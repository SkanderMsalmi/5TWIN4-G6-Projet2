import { Etudiant } from "./etudiant";

export class contrat{
    idContrat:number;
    dateDebutContrat:Date;
    dateFinContrat:Date;
    specialite:String;
    archive:boolean;
    montantContrat:number;
    etudiant:Etudiant;
}