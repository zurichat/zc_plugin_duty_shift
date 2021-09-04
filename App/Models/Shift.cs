using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace App.Models
{
    public class Shift
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonRequired]
        public string ShiftTitle { get; set; }
        [BsonRequired]
        public string TimeStart { get; set; }
        [BsonRequired]
        public string TimeEnd { get; set; }
        [BsonRequired]
        public string LeadById { get; set; }
        [BsonRequired]
        public string CreatedById { get; set; }    
        [BsonRequired]
        public bool Status { get; set; }
        
        [BsonRequired]
        public DateTime DateCreated { get; set; }
    }
}
