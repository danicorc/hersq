import {Component, NgModule, OnInit} from '@angular/core';
import {Payload} from './payload';
import {MedicalConceptService} from './medical-concept.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  areas = [
    {
      value: 'ADMINISTRATIVA',
      viewValue: 'Administrativa'
    },
    {
      value: 'OPERATIVA',
      viewValue: 'Operativa'
    }
  ];
  exams = [
    {
      value: 'INGRESO',
      viewValue: 'Ingreso'
    },
    {
      value: 'PERIODICO',
      viewValue: 'Periódico'
    },
    {
      value: 'EGRESO',
      viewValue: 'Egreso'
    },
    {
      value: 'INCAPACIDAD',
      viewValue: 'Post incapacidad'
    },
    {
      value: 'REINTEGRO',
      viewValue: 'Reintegro'
    },
    {
      value: 'REUBICACION',
      viewValue: 'Reubicación laboral'
    }
  ];
  aptitudes = [
    {
      value: 'APTO',
      viewValue: 'Apto'
    },
    {
      value: 'NO_APTO',
      viewValue: 'No apto'
    },
    {
      value: 'NA',
      viewValue: 'N/A'
    }
  ];
  answers = [
    {
      value: 'Y',
      viewValue: 'Si'
    },
    {
      value: 'N',
      viewValue: 'No'
    },
    {
      value: 'NA',
      viewValue: 'N/A'
    }
  ];
  yesNoQuestions = this.answers.slice(0, 2);
  startDate: any;
  payload: Payload;

  constructor(private medicalConceptService: MedicalConceptService) {}

  ngOnInit(): void {
    this.startDate = new Date();
    this.payload = new Payload();
  }

  save(): void {
    this.payload.date = this.startDate;
    this.payload.date.setHours(this.payload.hour, this.payload.min);
    delete this.payload.hour;
    delete this.payload.min;
    this.payload.date = this.payload.date.toString();
    this.medicalConceptService.create(this.payload).then((response) => {
      this.startDate = new Date();
      this.payload = new Payload();
      alert('Se ha guardado exitosamente');
    });
  }
}
