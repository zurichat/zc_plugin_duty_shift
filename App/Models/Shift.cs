using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Models
{
    public class Shift
    {
        public long ID { get; set; }
        public string ShiftName { get; set; }
        public string TimeStart { get; set; }
        public string TimeEnd { get; set; }
        public int DepartmentID { get; set; }
        public DateTime DateCreated { get; set; }
    }
}
