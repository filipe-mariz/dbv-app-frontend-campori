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
  public file!: File;
  public fileContent!: ArrayBuffer;
  public data: IFormaData = formData;
  public teams: ITeamsGroup = teamsGroup;
  public clubs: any;
  public units: any = null;

  async ngOnInit(): Promise<void> {
    const response: AxiosResponse = await axios.get('http://localhost:3000/clubs')
    this.clubs = response.data;
  }

  // public async sendData() {
  //   try {
  //     console.log('file', this.file)
  //     // const response: AxiosResponse = await axios.post('http://localhost:3000/unit', this.data)

  //     console.log('file', this.file)
  //     const resp: AxiosResponse = await axios.post('http://localhost:3000/clubs/payment', {
  //       id: this.data.id,
  //       file: this.fileContent
  //     })

  //     // return response.data;
  //   } catch (error) {
  //     throw new Error('AxiosError')
  //   }
  // }

  public async sendData() {
    try {
      const formData = new FormData();
      formData.append('file', this.file); // Adiciona o arquivo
      formData.append('id', this.data.id); // Adiciona o ID ou outros dados

      const response: AxiosResponse = await axios.post('http://localhost:3000/clubs/payment', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Certifica que o formato é multipart
        },
      });

      console.log('Upload bem-sucedido:', response.data);
    } catch (error) {
      console.error('Erro no envio:', error);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      console.log('Arquivo selecionado:', this.file);

      // Usando FileReader para ler o conteúdo do arquivo
      const reader = new FileReader();
      reader.onload = () => {
        this.fileContent = reader.result as ArrayBuffer;
        console.log('Conteúdo do arquivo lido:', this.fileContent);
      };
      reader.readAsArrayBuffer(this.file);
    }
  }


  // async getUnitsByClub(clubId: Event) {
  //   const response: AxiosResponse = await axios.get(`http://localhost:3000/unit/${clubId}`)
  //   this.units = response.data;
  // }
}
