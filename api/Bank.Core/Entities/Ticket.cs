
using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Bank.Core.Entities
{
   
    public class Ticket
    {
        static  int id ;

        static Ticket()
        {
            id = 1;
        }
      
        public int ticketId { get; } = id++;
        public string fullName { get; set; }
        public string email { get; set; }
        public int statusId { get; set; }
        public string description { get; set; }
        public string? summary { get; set; }
        public string imageUrl { get; set; }
        public string solution { get; set; }
    }
}
