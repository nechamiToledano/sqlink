using Bank.Core.Entities;


using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bank.Data.Repositories;

namespace Bank.Service
{
    public class TicketService 
    {
        readonly TicketsRepository _ticketRepository;
        readonly EmailService emailService;

        public TicketService(TicketsRepository ticketRepository, EmailService emailService)
        {
            _ticketRepository = ticketRepository;
            this.emailService = emailService;

        }

        public Ticket AddTicket(Ticket ticket)
        {
            var res= _ticketRepository.AddAsync(ticket);
            if (res != null)
            {
                emailService.SendEmail(ticket.email, "add ticket", $"you have added a new ticket {res.description}");
            }
            return _ticketRepository.AddAsync(ticket);
        }

        public bool DeleteTicket(int id)
        {
            return _ticketRepository.DeleteAsync(id);
        }

        public Ticket GetTicket(int id)
        {
            return _ticketRepository.GetByIdAsync(id);
        }

        public IEnumerable<Ticket> GetAllTickets()
        {
            return _ticketRepository.GetAllAsync();
        }

        public Ticket UpdateTicket(int id, Ticket ticket)
        {
            var res= _ticketRepository.UpdateAsync(id, ticket);
            if (res != null)
            {
                emailService.SendEmail(ticket.email, "change status", $"your status changed to {res.statusId}");
            }
            return res;
        }
    }
}
