import { Component, OnInit } from '@angular/core';
import { EntryService } from 'src/app/sevices/entry.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  entries: any;
  currentEntry:any;
  currentIndex = -1;

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.getAllEntries();
  }

  // Get list
  getAllEntries(): void {
    this.entryService.list()
      .subscribe(
        (entries: any) => {
          this.entries = entries;
        },
        (error: any) => {
          console.log(error);
        });
  }

  // Delete action
  deleteEntry(id:number){
    this.entryService.delete(id)
    .subscribe(
      response => {
        this.getAllEntries();
      },
      error => {
        console.log(error);
      });
  }
}
