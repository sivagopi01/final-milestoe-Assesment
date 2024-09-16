using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SmartHomeAPI.Models
{
    public class Monitoring
    {
        [Key]
        public int MonitoringID { get; set; }       // Primary Key

        [Required]
        public int DeviceID { get; set; }           // Foreign Key for Device

        [Required]
        public int UserID { get; set; }             // Foreign Key for User

        [Required]
        public string Status { get; set; }          // Status of the device (e.g., On, Off)

        [Required]
        public DateTime Timestamp { get; set; }     // Timestamp of the monitoring entry

        // Navigation Property for Device
        [ForeignKey(nameof(DeviceID))]
        public Device Device { get; set; }          // Navigation property to Device

        // Navigation Property for User
        [ForeignKey(nameof(UserID))]
        public User User { get; set; }              // Navigation property to User

    }
}
