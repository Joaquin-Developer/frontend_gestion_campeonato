import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../../services/administration/administration.service';
import { Team } from '../../models/Team'
// import { NgForm } from '@angular/forms'
// import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public teamsData: Team[] = [];
  public tournamentName: string = "";
  public matchesOfAllSeries: any[] = []
  public matchesOfFinalRound: any[] = []
  
  public accordionProperties: Object = {
    getCollapse: (i: number): string => {
      return `collapse${i}`
    },

    getHeading: (i: number): string => {
      return `heading${i}`
    }
  }

  constructor(private admService: AdministrationService) { }

  ngOnInit(): void {
    this.getAllMatchesOfAllSeries();
    // this.getAllFinalRoundMatches();
  }

  getAllMatchesOfAllSeries(): void {
    this.admService.getAllMatchesOfAllSeries().subscribe(
      (resp: any) => {
        this.matchesOfAllSeries = resp;
        console.log(this.matchesOfAllSeries);
      },
      (e: any) => this.showErrorMessage(e)
    )
  }

  getTournamentData(): void { }

  getSeriesData(): void {
    this.admService.getAllTeams().subscribe(
      (resp: any) => {
        this.teamsData = resp;
      },
      (e: any) => this.showErrorMessage(e)
    )
  }

  getAllFinalRoundMatches(): void {
    this.admService.getAllFinalRoundMatches().subscribe(
      (resp: any) => {
        this.matchesOfFinalRound = resp;
      },
      (e: any) => this.showErrorMessage(e)
    )
  }

  getFinalRoundData(): void { }

  showErrorMessage(e = null): void {
    console.error(e);
    alert("Se produjo un error al obtener los datos del servidor.");
  }


}
