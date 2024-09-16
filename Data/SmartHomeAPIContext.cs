using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SmartHomeAPI.Models;

namespace SmartHomeAPI.Data
{
    public class SmartHomeAPIContext : DbContext
    {
        public SmartHomeAPIContext (DbContextOptions<SmartHomeAPIContext> options)
            : base(options)
        {
        }

        public DbSet<SmartHomeAPI.Models.User> User { get; set; } = default!;
        public DbSet<SmartHomeAPI.Models.Monitoring> Monitoring { get; set; } = default!;
        public DbSet<SmartHomeAPI.Models.Device> Device { get; set; } = default!;
    }
}
