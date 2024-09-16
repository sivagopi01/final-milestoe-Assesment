using System.Collections.Generic;
using System.Threading.Tasks;
using SmartHomeAPI.Models;

namespace SmartHomeAPI.Repositories
{
    public interface IMonitoringRepository
    {
        Task<IEnumerable<Monitoring>> GetMonitoringsAsync();
        Task<Monitoring> GetMonitoringByIdAsync(int id);
        Task AddMonitoringAsync(Monitoring monitoring);
        Task UpdateMonitoringAsync(Monitoring monitoring);
        Task DeleteMonitoringAsync(int id);
        Task<bool> MonitoringExistsAsync(int id);
    }
}