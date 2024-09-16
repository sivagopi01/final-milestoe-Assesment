using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SmartHomeAPI.Data;
using SmartHomeAPI.Models;

namespace SmartHomeAPI.Repositories
{
    public class DeviceRepository : IDeviceRepository
    {
        private readonly SmartHomeAPIContext _context;

        public DeviceRepository(SmartHomeAPIContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Device>> GetDevicesAsync()
        {
            return await _context.Device.ToListAsync();
        }

        public async Task<Device> GetDeviceByIdAsync(int id)
        {
            return await _context.Device.FindAsync(id);
        }

        public async Task AddDeviceAsync(Device device)
        {
            _context.Device.Add(device);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateDeviceAsync(Device device)
        {
            _context.Entry(device).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteDeviceAsync(int id)
        {
            var device = await _context.Device.FindAsync(id);
            if (device != null)
            {
                _context.Device.Remove(device);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<bool> DeviceExistsAsync(int id)
        {
            return await _context.Device.AnyAsync(e => e.DeviceID == id);
        }
    }
}