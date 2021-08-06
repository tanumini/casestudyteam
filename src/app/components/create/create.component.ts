import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/sevices/entry.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})



export class CreateComponent implements OnInit {

  // maxDate = new Date();

  entry = {
    date: new Date(),
    name: '',
    hours: 0,
    remarks: ''
  };
  isEntryAdded = false;

  constructor(private entryService: EntryService) { }

  ngOnInit(): void { }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  // Add New
  addEntry(): void {
    const data = {
      date: this.entry.date,
      name: this.entry.name,
      hours: this.entry.hours,
      remarks: this.entry.remarks
    };
    if (!data.name) {
      alert('Please enter Project Name!');
      return;
    }

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
      date: new Date(),
      name: '',
      hours: 0,
      remarks: ''
    };
  }

}
