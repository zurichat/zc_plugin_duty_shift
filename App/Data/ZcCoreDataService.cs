using System.Net;
using System.Text;
using System.Collections;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace App
{
    public class ZcCoreDataService
    {
        public HttpClient Client { get; }
        private const string pluginId = "6131f73d569dbbb7ce5b4fc5"; //This is only for the test server. Plugin ID will be different after registration on prod. server

        public ZcCoreDataService(HttpClient client)
        {
            //client.BaseAddress = new Uri("https://api.zuri.chat/data/"); //Prod
            client.BaseAddress = new Uri("https://zccore.herokuapp.com/data/"); //Test

            Client = client;
        }

        //Get all data from zc_core without filter from a collection
        public async Task<JsonResponse<TOutputModel>> ReadData<TOutputModel>(string collectionName, string organizationId)
        {
            //GET - db url 
            var dataUrl = $"read/{pluginId}/{collectionName}/{organizationId}";

            var response = await Client.GetAsync(dataUrl);

            var responseStream = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<JsonResponse<TOutputModel>>(responseStream);
        }

        public async Task<string> PostData<TDataModel>(string collectionName, string organizationId, TDataModel dataModel)
        {
            var body = new DataWriteModel<TDataModel>
            {
                plugin_id = pluginId,
                organization_id = organizationId,
                collection_name = collectionName,
                bulk_write = false,
                payload = dataModel
            };

            var jsonObj = JsonConvert.SerializeObject(body);
            var payloadData = new StringContent(jsonObj, Encoding.UTF8, "application/json");

            try
            {
                using var response = await Client.PostAsync("write", payloadData);
                response.EnsureSuccessStatusCode();
                return response.StatusCode.ToString();
            }
            catch (HttpRequestException)
            {
                return "failed to save data";
            }
            
        }
    }
}