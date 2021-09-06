using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;


namespace App.Models
{
    public class ShiftSchedule
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]//lets us use id as string
        public string Id { get; set; }
        [BsonRequired]
        public string InvitedById { get; set; }
        [BsonRequired]
        
        public string UserId { get; set; }
        [BsonRequired]
       
        public string ShiftId { get; set; }
        [BsonRequired]
        public string AssignedById { get; set; }
        [BsonRequired]
        public bool AcknowledgedByUser { get; set; }
        [BsonRequired]
        public DateTime DateAssigned { get; set; }
    }
}
