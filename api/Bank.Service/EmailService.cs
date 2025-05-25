using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bank.Service
{
    using System.Net.Mail;
    using System.Net;

    public class EmailService
    {
        public void SendEmail(string toEmail, string subject, string body)
        {
            using (var client = new SmtpClient())
            {
                client.Host = "smtp.gmail.com";
                client.Port = 587;
                client.EnableSsl = true;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential("nechami3142@gmail.com", "16303142");

                using (var message = new MailMessage("nechami3142@gmail.com", toEmail, subject, body))
                {
                    client.Send(message);
                }
            }
        }
    }
}
