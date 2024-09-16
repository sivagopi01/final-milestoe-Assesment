using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SmartHomeAPI.Data;
using SmartHomeAPI.Models;

namespace SmartHomeAPI.Repositories
{
    public class MonitoringRepository : IMonitoringRepository
    {
        private readonly SmartHomeAPIContext _context;

        public MonitoringRepository(SmartHomeAPIContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Monitoring>> GetMonitoringsAsync()
        {
            return await _context.Monitoring
                                 .Include(m => m.Device)  // Include Device for navigation property
                                 .Include(m => m.User)    // Include User for navigation property
                                 .ToListAsync();
        }

        public async Task<Monitoring> GetMonitoringByIdAsync(int id)
        {
            return await _context.Monitoring
                                 .Include(m => m.Device)  // Include Device for navigation property
                                 .Include(m => m.User)    // Include User for navigation property
                                 .FirstOrDefaultAsync(m => m.MonitoringID == id);
        }

        public async Task AddMonitoringAsync(Monitoring monitoring)
        {
            _context.Monitoring.Add(monitoring);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateMonitoringAsync(Monitoring monitoring)
        {
            _context.Entry(monitoring).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteMonitoringAsync(int id)
        {
            var monitoring = await _context.Monitoring.FindAsync(id);
            if (monitoring != null)
            {
                _context.Monitoring.Remove(monitoring);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> MonitoringExistsAsync(int id)
        {
            return await _context.Monitoring.AnyAsync(e => e.MonitoringID == id);
        }
    }
}