import { EventEmitter, Injectable } from "@angular/core";
import { Personne } from "../models/personne";

@Injectable({
  providedIn: "root"
})
export class GestionPersonnesService {
  public emeteurPersonnes: EventEmitter<Personne[]> = new EventEmitter<Personne[]>();
  private personnes: Personne[] = [];

  constructor() {
  }

  public ajouter(p: Personne): boolean {
    if (p && p.nom != "" && p.prenom != "") {
      this.personnes.push(p);
      this.notifier();
      return true;
    } else {
      return false;
    }
  }

  public charger() {
    this.notifier();
  }

  private notifier() {
    this.emeteurPersonnes.emit(this.personnes.slice());
  }
}
