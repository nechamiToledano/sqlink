
using Bank.Core.Entities;
using Bank.Service;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Bank.Api.Controllers
{
    [Route("api/tickets")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        readonly TicketService _ticketService;

        public TicketController(TicketService ticketService)
        {
            _ticketService = ticketService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Ticket>> Get() {
            var tickets = (List<Ticket>)_ticketService.GetAllTickets();
            return tickets == null ? NotFound() : tickets;
        }

        [HttpGet("{id}")]

        public ActionResult<Ticket> GetTicketById(int id)
        {
            var ticket = _ticketService.GetTicket(id);
            return ticket == null ? NotFound() : ticket;
        }

        // POST: /Bank/Ticket/NewTicket
        [HttpPost]
        public ActionResult<Ticket> AddTicket([FromBody] Ticket ticket)
        {
            Ticket newTicket = _ticketService.AddTicket(ticket);
            return newTicket != null ? newTicket : NotFound();
        }

        // PUT: /Bank/Ticket/MyTicket/{id}
        [HttpPut("{id}")]
   

        public ActionResult<Ticket> UpdateTicket(int id,[FromBody] Ticket updatedTicket)
        {
          Ticket ticket = _ticketService.UpdateTicket(id,updatedTicket);
            return ticket != null ? ticket: NotFound();
             
        }
        [HttpDelete]
        public ActionResult<bool> DeleteTicket(int id)
        {
           
            return _ticketService.DeleteTicket(id) ? true : NotFound();

        }
    }
}
