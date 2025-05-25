import { Component, type OnInit, ViewChild, AfterViewInit } from "@angular/core"
import { AsyncPipe, DatePipe } from "@angular/common"
import { RouterLink } from "@angular/router"
import { MatButtonModule } from "@angular/material/button"
import {  MatDialog, MatDialogModule } from "@angular/material/dialog"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatSort, MatSortModule } from "@angular/material/sort"
import { MatTableDataSource, MatTableModule } from "@angular/material/table"
import { MatTooltipModule } from "@angular/material/tooltip"
import { Store } from "@ngrx/store"
import type { Observable } from "rxjs"
import type { Ticket } from "../../models/ticket.model"
import { ConfirmDialogComponent } from "../../../shared/components/confirm-dialog/confirm-dialog.component"
import { AppState } from "../../../store/app.state"
import { ApiService } from "../../../core/services/api.service"

@Component({
  selector: "app-music-file-list",
  standalone: true,
  imports: [
  
    AsyncPipe,
    DatePipe,
    RouterLink,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.scss"],
})
export class TicketListComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ["id", "name", "uploadDate", "actions"]
  dataSource = new MatTableDataSource<Ticket>([])
  data:Ticket[]=[];
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog,
    private apiService:ApiService
  ) {
    
  }

  ngOnInit(): void {
    this.apiService.getTickets().subscribe((data: any[]) => {
      this.dataSource.data = data
        });
   
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }



  

}

