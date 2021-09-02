using System.ComponentModel.DataAnnotations;

namespace App.Models
{
    public class UserTypes
    {
        public int Id {get; set;}
        [Required]
        public string Types {get; set;}
    }
}