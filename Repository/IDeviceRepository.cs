using System.Collections.Generic;
using System.Threading.Tasks;
using SmartHomeAPI.Models;

namespace SmartHomeAPI.Repositories
{
    public interface IDeviceRepository
    {
        Task<IEnumerable<Device>> GetDevicesAsync();
        Task<Device> GetDeviceByIdAsync(int id);
        Task AddDeviceAsync(Device device);
        Task UpdateDeviceAsync(Device device);
        Task DeleteDeviceAsync(int id);
        Task<bool> DeviceExistsAsync(int id);
    }
}