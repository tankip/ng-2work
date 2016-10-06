import { Component, OnInit } from '@angular/core';

import { Patient } from '../shared/patient-dashboard/patients';
import { PatientService } from '../shared/patient-dashboard/patient.service';

@Component({
  selector: 'patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
  providers: [PatientService]
})
export class PatientDashboardComponent implements OnInit {

  title = 'Patients Dashboard';
  patients : Patient[];
  selectedPatient: Patient;

  constructor(private patientService: PatientService) { }

  getPatients(): void {
    this.patientService.getPatients().then(patients => this.patients = patients);
  }

  ngOnInit(): void {
    this.getPatients();
  }

  selectPatient(patient): void {
    this.selectedPatient = patient;
  }

}
