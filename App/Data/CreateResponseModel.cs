using System.Collections.Generic;
using Newtonsoft.Json;

namespace App
{

    public class CreateResponseModel
    {
        [JsonProperty("status")]
        public int Status { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("data")]
        public CreatedDataCount Data { get; set; }
    }

    public class CreatedDataCount
    {
        [JsonProperty("insert_count")]
        public int NumberOfObjectCreated { get; set; }

        [JsonProperty("object_id")]
        public string Id { get; set; }

        [JsonProperty("object_ids")]
        public List<string> Ids { get; set; }
    }
}