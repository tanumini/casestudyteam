import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntryService } from 'src/app/sevices/entry.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentEntry: any;
  message = '';

  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEntry(this.route.snapshot.paramMap.get('id'));
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  getEntry(id: string | null): void {
    this.entryService.getItem(id)
      .subscribe(
        (entry: null) => {
          this.currentEntry = entry;
          console.log(entry);
        },
        (error: any) => {
          console.log(error);
        });
  }

  updateEntry(): void {
    this.entryService.update(this.currentEntry.id, this.currentEntry)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The entry was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteEntry(): void {
    this.entryService.delete(this.currentEntry.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/entries']);
        },
        error => {
          console.log(error);
        });
  }

}
