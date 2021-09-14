using System.Collections.Generic;
using Newtonsoft.Json;

namespace App
{

    public class DeleteResponseModel
    {
        [JsonProperty("status")]
        public int Status { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("data")]
        public DeletedDataCount Data { get; set; }
    }

    public class DeletedDataCount
    {
        [JsonProperty("deleted_count")]
        public int DeletedCount { get; set; }
    }
}