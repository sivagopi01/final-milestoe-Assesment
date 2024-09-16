using System.ComponentModel.DataAnnotations;

namespace SmartHomeAPI.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; } // Passwords should be hashed in practice

        [Required]
        public string Email { get; set; }

        [Required]
        public string Role { get; set; }
    }
}
