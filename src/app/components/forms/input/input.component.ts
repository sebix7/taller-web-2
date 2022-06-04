import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() condicionError: boolean = false;
  @Input() mensajeError: string = '';
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() value: string = '';

  constructor() {}

  ngOnInit(): void {}
}
