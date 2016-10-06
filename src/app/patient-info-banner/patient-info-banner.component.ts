import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../shared/patient-dashboard/patients';

@Component({
  selector: 'patient-info-banner',
  templateUrl: './patient-info-banner.component.html',
  styleUrls: ['./patient-info-banner.component.css']
})
export class PatientInfoBannerComponent implements OnInit {

  @Input()
  patient :Patient;
  constructor() { }

  ngOnInit() {
  }

}
