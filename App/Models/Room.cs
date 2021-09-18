using MongoDB.Bson.Serialization.Attributes;
using System;

namespace App.Models
{
    public class Room
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonRequired]
        public string Title { get; set; }

        public string Description { get; set; }
        public string CreatedById { get; set; }
        public string OrganizationId { get; set; }

        public DateTime DateCreated { get; } = DateTime.Now;
    }
}
