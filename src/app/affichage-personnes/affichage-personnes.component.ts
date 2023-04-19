import { Component, OnDestroy, OnInit } from "@angular/core";
import { Personne } from "../models/personne";
import { GestionPersonnesService } from "../services/gestion-personnes.service";

@Component({
  selector: "app-affichage-personnes",
  templateUrl: "./affichage-personnes.component.html",
  styleUrls: ["./affichage-personnes.component.css"]
})
export class AffichagePersonnesComponent implements OnInit, OnDestroy {
  personnes!: Personne[];

  constructor(private gestionpPersonne: GestionPersonnesService) {
  }

  ngOnInit() {
    this.gestionpPersonne.emeteurPersonnes.subscribe((value) => this.personnes = value);
  }

  ngOnDestroy() {
    this.gestionpPersonne.emeteurPersonnes.unsubscribe();
  }
}
