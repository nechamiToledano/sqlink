import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../models/ticket.model';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-ticket-details',
  imports: [],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.scss'
})
export class TicketDetailsComponent implements OnInit {
  ticket: Ticket | null = null;
  error: string | null = null;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
     private store: Store<AppState>,
         private apiService:ApiService
     
  ) {}

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.apiService.getTicket(+id).subscribe((data: any) => {
        this.ticket = data
          });
        } else {
      this.error = 'Ticket ID is required.';
      this.loading = false;
    }
  }}