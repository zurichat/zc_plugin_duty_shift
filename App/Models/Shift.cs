using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace App.Models
{
    public class Shift
    {
        public long Id { get; set; }
        [Required]
        public string ShiftTitle { get; set; }
        [Required]
        public string TimeStart { get; set; }
        [Required]
        public string TimeEnd { get; set; }
        [Required]
        public int LeadById { get; set; }
        [Required]
        public int CreatedById { get; set; }
        [Required]
        public DateTime DateCreated { get; set; }
    }
}
