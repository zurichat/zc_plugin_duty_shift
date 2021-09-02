using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace App.Models
{
    public class ShiftSchedule
    {
        public int Id { get; set; }
        [Required]
        public int InvitedById { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public int ShiftId { get; set; }
        [Required]
        public int AssignedById { get; set; }
        [Required]
        public DateTime DateAssigned { get; set; }
    }
}
