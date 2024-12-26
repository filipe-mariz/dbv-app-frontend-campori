import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { formData, teamsGroup } from './utils/data';
import { IFormaData, ITeamsGroup } from './utils/interfaces';
import axios, { AxiosResponse } from 'axios';

@Component({
  selector: 'app-worker-enrollment',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    CommonModule
  ],
  templateUrl: './worker-enrollment.component.html',
  styleUrl: './worker-enrollment.component.scss',
  // exports: [WorkerEnrollmentComponent]
})
export class WorkerEnrollmentComponent implements OnInit {
  public data: IFormaData = formData;
  public teams: ITeamsGroup = teamsGroup;
  public clubs: any;
  public units: any = null;

  async ngOnInit(): Promise<void> {
    const response: AxiosResponse = await axios.get('http://localhost:3000/clubs')
    this.clubs = response.data;
  }

  public async sendData() {
    try {
      console.log(this.data)
      const response: AxiosResponse = await axios.post('http://localhost:3000/unit', this.data)
      return response.data;
    } catch (error) {
      throw new Error('AxiosError')
    }
  }

  // async getUnitsByClub(clubId: Event) {
  //   const response: AxiosResponse = await axios.get(`http://localhost:3000/unit/${clubId}`)
  //   this.units = response.data;
  // }
}
