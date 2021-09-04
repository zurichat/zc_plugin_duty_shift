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
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }
        public string ZuriUserId { get; set; }
        [BsonRequired]
        public string UserType { get; set; } // super admin, user, guest
        
        public string InvitedById { get; set; }
        [BsonRequired]
        public DateTime TimeJoined { get; set; }
    }
}
