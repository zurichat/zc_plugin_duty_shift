using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;


namespace App.Models
{
    public class ShiftSchedule
    {
        [BsonId]
        public ObjectId Id { get; set; }
        [BsonRequired]
        public ObjectId InvitedById { get; set; }
        [BsonRequired]
        public ObjectId UserId { get; set; }
        [BsonRequired]
        public ObjectId ShiftId { get; set; }
        [BsonRequired]
        public ObjectId AssignedById { get; set; }
        [BsonRequired]
        public DateTime DateAssigned { get; set; }
    }
}
