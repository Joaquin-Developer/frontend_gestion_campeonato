import { Component, OnInit } from '@angular/core';
import { AdministrationService } from '../../services/administration/administration.service';
import { Team } from '../../models/Team'
import { NgForm } from '@angular/forms'
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  public teamsData: Team[] = [];

  constructor(private admService: AdministrationService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.admService.getAllTeams().subscribe(
      (resp: any) => {
        this.teamsData = resp;
      },
      (e: any) => console.error(e)
    )
  }

}
