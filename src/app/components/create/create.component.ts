import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EntryService } from 'src/app/sevices/entry.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})



export class CreateComponent implements OnInit {



  entry = {
    firstname:"",
lastname:"",
email:"",
contact:0,
address:"",
occupation:"",
employername:"",
maritalstatus:"",
gender:"",
pancardno:"",
aadhaarno:0,
status:""
 
  };
  isEntryAdded = false;

  constructor(private entryService: EntryService) { }

  ngOnInit(): void { }
 /* applicationform = new FormGroup({
    firstname:new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
    lastname:new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
    email:new FormControl('',[Validators.required,Validators.email]),
    contact:new FormControl('',[Validators.required,Validators.pattern("^[789][0-9]{9}$")]),
    address:new FormControl('',[Validators.required,Validators.pattern("^[A-Z a-z]{50}$")]),
    occupation:new FormControl('',[Validators.required,Validators.pattern("^[A-Z a-z]+$")]),
    employername:new FormControl('',[Validators.required,Validators.pattern("^[A-Z a-z]+$")]),
    maritalstatus:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    pancardno: new FormControl('',[Validators.required, Validators.pattern("^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$")]),
    aadhaarno:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{12}$")])

  });*/

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  // Add New
  addEntry(data:any): void {
  
   /* const data = {
      firstname:this.entry.firstname,
      lastname:this.entry.lastname,
      email:this.entry.email,
      contact:this.entry.contact,
      address:this.entry.address,
      occupation:this.entry.occupation,
      employername:this.entry.employername,
      maritalstatus:this.entry.maritalstatus,
      gender:this.entry.gender,
      pancardno:this.entry.pancardno,
      aadhaarno:this.entry.aadhaarno,
      status:this.entry.status,
    };*/
    console.log(data);
  //  if (!data.firstname) {
    //  alert('Enter correct info');
      //return;
 //   }

    this.entryService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isEntryAdded = true;
        },
        error => {
          console.log(error);
        });
  }

  // Reset on adding new
  newEntry(): void {
    this.isEntryAdded = false;
    this.entry = {
      firstname:"",
      lastname:"",
      email:"",
      contact:0,
      address:"",
      occupation:"",
      employername:"",
      maritalstatus:"",
      gender:"",
      pancardno:"",
      aadhaarno:0,
      status:""
    };
  }

}
