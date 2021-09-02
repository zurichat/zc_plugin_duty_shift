using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace App.Models
{
    public class Users
    {
        public int Id { get; set; }
        [Required]
        public string ZuriUserId { get; set; }
        [Required]
        public UserTypes UserTypeId { get; set; }
        [Required]
        public int InvitedById { get; set; }
        [Required]
        public DateTime TimeJoined { get; set; }
    }
}
