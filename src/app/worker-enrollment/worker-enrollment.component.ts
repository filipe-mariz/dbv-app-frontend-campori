import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
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
  ],
  templateUrl: './worker-enrollment.component.html',
  styleUrl: './worker-enrollment.component.scss'
})
export class WorkerEnrollmentComponent {
  public data: IFormaData = formData;
  public teams: ITeamsGroup = teamsGroup;

  public async sendLoginData() {
    try {
      const response: AxiosResponse = await axios.post('http://localhost:3000/health', {
        ...this.data
      });

      return response;
    } catch (error) {
      throw new Error('AxiosError')
    }
  }
}
