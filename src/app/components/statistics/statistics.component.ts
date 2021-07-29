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
  public finalRoundData: any[] = [];
  public SeriesData: any[] = [];

  constructor(private admService: AdministrationService) { }

  ngOnInit(): void {
    this.getTournamentData();
    this.getSeriesData();
    this.getFinalRoundData();
  }

  getTournamentData(): void {

  }

  getSeriesData(): void {
    this.admService.getAllTeams().subscribe(
      (resp: any) => {
        this.teamsData = resp;
      },
      (e: any) => {
        console.error(e);
        alert("Se produjo un error al obtener los datos del servidor.");
      }
    )
  }

  getFinalRoundData(): void {

  }

}
