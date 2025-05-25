import { Component, type OnInit } from "@angular/core"
import { AsyncPipe } from "@angular/common"
import {  FormBuilder,  FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import  { ActivatedRoute, Router } from "@angular/router"
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"

import { ApiService } from "../../../core/services/api.service"
import { Ticket } from "../../models/ticket.model"

@Component({
  selector: "app-ticket-form",
  standalone: true,
  imports: [
  
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: "./ticket-form.component.html",
  styleUrls: ["./ticket-form.component.scss"],
})
export class TicketFormComponent implements OnInit {
  ticketForm!: FormGroup
      imageUrl: string =''
       ticket:Ticket|null=null;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService:ApiService
  ) {
 
  }

  ngOnInit(): void {
    this.initForm()  
  }

  initForm(): void {
    this.ticketForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      description: ["", [Validators.required]],
      imageUrl: ["", [Validators.required]],
      fullName: ["", [Validators.required]],

    })
  }

  onSubmit(): void {
    
    if (this.ticketForm.invalid) {
        this.apiService.addTicket(this.ticket).subscribe((data: any) => {
          this.router.navigate([`/tickets/${data.ticketId}`])
            });
    }
}

  onCancel(): void {
    this.router.navigate(["/tickets"])
  }
   onFileSelected(event: any) {
        const file: File = event.target.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onload = (e: any) => {
            this.imageUrl = e.target.result;
          };

          reader.readAsDataURL(file);
        }
}
}
