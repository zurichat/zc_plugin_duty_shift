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
        public ObjectId Id { get; set; }
        [BsonRequired]
        //[BsonElement("shift_ttitle")]
        public string ShiftTitle { get; set; }
        [BsonRequired]
        //[BsonElement("time_start")]
        public string TimeStart { get; set; }
        [BsonRequired]
        //[BsonElement("time_end")]
        public string TimeEnd { get; set; }
        [BsonRequired]
        //[BsonElement("lead_by_id")]
        public ObjectId LeadById { get; set; }
        [BsonRequired]
        //[BsonElement("created_by_id")]
        public ObjectId CreatedById { get; set; }
        [BsonRequired]
        //[BsonElement("date_created")]
        public DateTime DateCreated { get; set; }
    }
}
