using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string ZuriUserId { get; set; }
        public UserTypes UserTypeId { get; set; }
        public DateTime TimeJoined { get; set; }
    }
}
