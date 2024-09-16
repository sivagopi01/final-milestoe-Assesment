using System.ComponentModel.DataAnnotations;

namespace SmartHomeAPI.Models
{
    public class Device
    {
        [Key]
        public int DeviceID { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Type { get; set; }

        public string Status { get; set; }

        public DateTime LastUpdated { get; set; }
    }
}
