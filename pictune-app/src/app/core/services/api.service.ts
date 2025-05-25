import { Injectable } from "@angular/core"
import type { Observable } from "rxjs"
import { environment } from "../../../enviroments/enviroment"
import { HttpClient } from "@angular/common/http"
import { log } from "node:console"
import { Ticket } from "../../music-files/models/ticket.model"
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl


  // Auth endpoints
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signin`, { userName: username, password })
  }

  // User endpoints
  getUsers(): Observable<any[]> {
    console.log('getusers');
    
    return this.http.get<any[]>(`${this.apiUrl}/users`)
  }

  getUserProfile(id:string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${id}`)
    
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/signup`, user)
  }

  updateUser(id: string, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/users/${id}`, user)
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`)
  }

  // Music file endpoints
  getTickets(): Observable<any[]> {
    
    let url = `${this.apiUrl}/tickets`
    const params: any = {}

let res=this.http.get<any[]>(url)
console.log('gettickets'+res);

    return res

  }
  getTicket(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tickets/${id}`)
  }

  updateTicket(id: number, ticket: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/tickets/${id}`, ticket)
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/tickets/${id}`)
  }

  addTicket(ticket:Ticket): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/tickets`,ticket)
  }
  
  }

 
 
    





