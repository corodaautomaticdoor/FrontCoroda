import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {

// myForm: FormGroup;

  constructor(
  // public fb: FormBuilder
  )  { 
   /*  this.myForm= this.fb.group({
    name: ['', [Validators.required]],
    email:['', [Validators.email]],
    company: ['', [Validators.required]], 
  });
  */ 
}

  ngOnInit(): void {
  }

  saveData(){
   // console.log(this.myForm.value);
  }
  

}
