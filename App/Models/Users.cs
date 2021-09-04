using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace App.Models
{
    public class Users
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public ObjectId ZuriUserId { get; set; }
        [BsonRequired]
        public ObjectId UserTypeId { get; set; }
        [BsonRequired]
        public ObjectId InvitedById { get; set; }
        [BsonRequired]
        public DateTime TimeJoined { get; set; }
    }
}
