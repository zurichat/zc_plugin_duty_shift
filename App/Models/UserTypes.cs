using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace App.Models
{
    public class UserTypes
    {
        [BsonId]
        public ObjectId Id { get; set; }
        [BsonRequired]
        public string Types {get; set;}
    }
}