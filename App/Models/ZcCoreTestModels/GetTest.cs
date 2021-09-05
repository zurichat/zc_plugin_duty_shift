using Newtonsoft.Json;

namespace App.Models.ZcCoreTestModels
{
    public class GetTest
    {
         [JsonProperty("TeamName")]
        public string TeamName { get; set; }

        [JsonProperty("_id")]
        public string Id { get; set; }
    }
}