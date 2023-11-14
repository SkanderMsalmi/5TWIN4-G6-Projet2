import { Departement } from "./departement"
import { fileHandler } from "./file"

export class Etudiant{
    idEtudiant: number
    prenomE: String
    nomE: String
    opt: "GAMIX"|"SE"|"SIM"|"NIDS"
    departement: Departement
    image: fileHandler
    profileImage: String
  }
