using System.Collections.Generic;
using Newtonsoft.Json;

namespace App
{

    public class ResponseModel
    {
        [JsonProperty("status")]
        public int Status { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("data")]
        public DataCount Data { get; set; }
    }

    public class DataCount
    {
        [JsonProperty("matched_documents")]
        public int MatchedDocument { get; set; }

        [JsonProperty("modified_documents")]
        public int ModifiedDocument { get; set; }
    }
}