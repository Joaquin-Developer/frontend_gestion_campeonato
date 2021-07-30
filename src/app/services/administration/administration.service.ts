import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../models/Team';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  //private API_URL = "http://localhost:5000/api";
  private API_URL = "http://192.168.1.7:5000/api";

  constructor(private http: HttpClient) { }

  getMatchesData(): any {
    return null;
  }

  getAllTeams(): any {
    return this.http.get<Team[]>(`${this.API_URL}/teams/getAll`);
  }

  getAllMatchesOfAllSeries(): any {
    return this.http.get<[]>(`${this.API_URL}/matches/getAllMatchesOfAllSeries`);
  }

  getAllFinalRoundMatches(): any {
    
  }

  getTournamentData(): any {

  }

  getSeriesData(): any {
    
  }

}
