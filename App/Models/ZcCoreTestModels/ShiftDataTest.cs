using System.Runtime.Serialization;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System;

namespace App.Models.ZcCoreTestModels
{
    public class ShiftDataTest
    {
        [JsonProperty("_id")]
        public string Id { get; set; }

        [JsonProperty("shiftTitle")]
        public string ShiftTitle { get; set; }

        [JsonProperty("timeStart")]
        public string TimeStart { get; set; }

        [JsonProperty("timeEnd")]
        public string TimeEnd { get; set; }

        [JsonProperty("leadById")]
        public string LeadById { get; set; }

        [JsonProperty("createdById")]
        public string CreatedById { get; set; }

        [JsonProperty("status")]
        public bool Status { get; set; }
        
        [JsonProperty("datecreated")]
        [DataType(DataType.DateTime)]
        public DateTime DateCreated { get; set; }
    }
}