import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-general',
  templateUrl: './modal-general.component.html',
  styleUrls: ['./modal-general.component.css'],
})
export class ModalGeneralComponent implements OnInit {
  @Input() target: String = '';
  @Input() titulo: String = '';
  @Input() cerrarButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
