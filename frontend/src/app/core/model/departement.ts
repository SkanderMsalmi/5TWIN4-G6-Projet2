import { Enseignant } from "./Enseignant";
import { Universite } from "./universite";

export class    Departement {
   idDepartement:number; 
	nomDepart:string;
	codeInterne:string; 
	bloc:string;
	enseignants:Enseignant[];
	universite?:Universite;


	isselected : boolean;
}
