using Bank.Core.Entities;
using Bank.Data;

using System.Text.Json;

public class DataContext 
{
    public List<Ticket> Tickets { get; set; }
    public List<Ticket> LoadData()
    {
        string path = Path.Combine(AppContext.BaseDirectory,  "data.json");



        string jsonString = File.ReadAllText(path);
        var AllTickets = System.Text.Json.JsonSerializer.Deserialize<DataTickets>(jsonString);// typeof(DataTickets)); ;

        return AllTickets.tickets;
    }

    public bool SaveData(List<Ticket> tickets)
    {
        try
        {

            string path = Path.Combine(AppContext.BaseDirectory, "data.json");


            DataTickets dataTickets = new DataTickets();
            dataTickets.tickets = tickets;
            string jsonString = System.Text.Json.JsonSerializer.Serialize<DataTickets>(dataTickets);
            if (File.Exists(path))
            {
                File.Delete(path);
            }
            File.WriteAllText(path, jsonString);
            return true;
        }
        catch
        {
            return false;
        }
    }


}