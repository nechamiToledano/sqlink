using System.Linq;
using System.Net.Sockets;
using System.Text.Json;
using Bank.Core.Entities;

namespace Bank.Data.Repositories
{

    public class TicketsRepository
    {
        readonly DataContext _dataContext;

        public TicketsRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public List<Ticket> GetAllAsync()
        {


            var Tickets = _dataContext.LoadData();
            return Tickets;

        }

        public Ticket GetByIdAsync(int id)
        {
            var tickets = _dataContext.LoadData();

            return tickets.Where(c => c.ticketId == id).FirstOrDefault();






        }



      


        public Ticket UpdateAsync(int id, Ticket entity)
        {
            var tickets = _dataContext.LoadData();
            var ticket = GetByIdAsync(id);
            ticket.summary = entity.summary;
            ticket.description = entity.description;
            ticket.fullName = entity.fullName;
            ticket.email = entity.email;
            ticket.imageUrl = entity.imageUrl;
            ticket.statusId=entity.statusId;
            bool res = _dataContext.SaveData(tickets);
            return GetByIdAsync(id);
        }

        public bool DeleteAsync(int id)
        {
            var tickets = _dataContext.LoadData();
            var ticket =GetByIdAsync(id);
            tickets.Remove(ticket);
           bool res= _dataContext.SaveData(tickets);
            return res;
        }

        public Ticket  AddAsync(Ticket ticket)
        {
            var tickets = _dataContext.LoadData();
            tickets.Add(ticket);
            _dataContext.SaveData(tickets);
            return ticket;
        }
    }
}
