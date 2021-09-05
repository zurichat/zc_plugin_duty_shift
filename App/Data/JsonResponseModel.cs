using System.Collections.Generic;
using Newtonsoft.Json;

namespace App
{

    public class JsonResponse<TOutputModel>
    {
        [JsonProperty("status")]
        public int Status { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("data")]
        public List<TOutputModel> Data { get; set; }
    }


}