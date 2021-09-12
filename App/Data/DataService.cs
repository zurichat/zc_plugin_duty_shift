using System.Text;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace App
{
    public class DataService : IDataService
    {
        public HttpClient Client { get; }
        private const string pluginId = "6131f73d569dbbb7ce5b4fc5"; //This is only for the test server. Plugin ID will be different after registration on prod. server

        public DataService(HttpClient client)
        {
            //client.BaseAddress = new Uri("https://api.zuri.chat/data/"); //Prod
            client.BaseAddress = new Uri("https://zccore.herokuapp.com/data/"); //Test

            Client = client;
        }

        //Single object write
        public async Task<ResponseModel> CreateRecord<TDataModel>(string collectionName, string organizationId, TDataModel data)
        {
            var body = new WriteModel<TDataModel>
            {
                plugin_id = pluginId,
                organization_id = organizationId,
                collection_name = collectionName,
                bulk_write = false,
                payload = data
            };

            var jsonObj = JsonConvert.SerializeObject(body);
            var payloadData = new StringContent(jsonObj, Encoding.UTF8, "application/json");

            using var response = await Client.PostAsync("write", payloadData);

            try
            {
                response.EnsureSuccessStatusCode();
                var responseStream = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<ResponseModel>(responseStream);
            }
            catch (HttpRequestException)
            {
                return  new ResponseModel { Status = (int)response.StatusCode, Message = response.ReasonPhrase};
            }
            
        }

        //Bulk_Write
        public async Task<ResponseModel> CreateRecord<TDataModel>(string collectionName, string organizationId, IEnumerable<TDataModel> data)
        {
            var body = new BulkWriteModel<TDataModel>
            {
                plugin_id = pluginId,
                organization_id = organizationId,
                collection_name = collectionName,
                bulk_write = true,
                payload = data
            };

            var jsonObj = JsonConvert.SerializeObject(body);
            var payloadData = new StringContent(jsonObj, Encoding.UTF8, "application/json");

            using var response = await Client.PostAsync("write", payloadData);

            try
            {
                response.EnsureSuccessStatusCode();
                var responseStream = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<ResponseModel>(responseStream);
            }
            catch (HttpRequestException)
            {
                return  new ResponseModel { Status = (int)response.StatusCode, Message = response.ReasonPhrase};
            }
        }

        //Gets all data from zc_core without query option
        public async Task<ReadResponseModel<TOutputModel>> ReadRecord<TOutputModel>(string collectionName, string organizationId)
        {
            //GET - db url 
            var dataUrl = $"read/{pluginId}/{collectionName}/{organizationId}";

            var response = await Client.GetAsync(dataUrl);

            try
            {
                response.EnsureSuccessStatusCode();
                var responseStream = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<ReadResponseModel<TOutputModel>>(responseStream);
            }
            catch (HttpRequestException)
            {
               return new ReadResponseModel<TOutputModel> { Status = (int)response.StatusCode, Message = response.ReasonPhrase};
            }
            
        }


        //Get a single record using the id of the record
        public async Task<ReadResponseModel<TOutputModel>> ReadRecord<TOutputModel>(string collectionName, string organizationId, string objectId)
        {
            var dataUrl = $"read/{pluginId}/{collectionName}/{organizationId}/?id={objectId}";

            var response = await Client.GetAsync(dataUrl);

            try
            {
                response.EnsureSuccessStatusCode();
                var responseStream = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<ReadResponseModel<TOutputModel>>(responseStream);
            }
            catch (HttpRequestException)
            {
               return new ReadResponseModel<TOutputModel> { Status = (int)response.StatusCode, Message = response.ReasonPhrase};
            }
        }


        //Gets data from db endpoint and includes a simple mongodb query. 
        //The current config respects single parameter query.
        //In the case of multiple parameter query, a dictionary can be used.
        public async Task<ReadResponseModel<TOutputModel>> ReadRecord<TOutputModel>(string collectionName, string organizationId, string queryKey, string queryValue)
        {
            var dataUrl = $"read/{pluginId}/{collectionName}/{organizationId}/?{queryKey}={queryValue}";

            var response = await Client.GetAsync(dataUrl);

            try
            {
                response.EnsureSuccessStatusCode();
                var responseStream = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<ReadResponseModel<TOutputModel>>(responseStream);
            }
            catch (HttpRequestException)
            {
               return new ReadResponseModel<TOutputModel> { Status = (int)response.StatusCode, Message = response.ReasonPhrase};
            }
        }


        //Single record update
        public async Task<ResponseModel> UpdateRecord<TDataModel>(string collectionName, string organizationId, TDataModel data, string objectId)
        {
            var body = new WriteModel<TDataModel>
            {
                plugin_id = pluginId,
                organization_id = organizationId,
                collection_name = collectionName,
                bulk_write = false,
                object_id = objectId,
                payload = data
            };

            var jsonObj = JsonConvert.SerializeObject(body);
            var payloadData = new StringContent(jsonObj, Encoding.UTF8, "application/json");

            using var response = await Client.PostAsync("write", payloadData);

            try
            {
                response.EnsureSuccessStatusCode();
                var responseStream = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<ResponseModel>(responseStream);
            }
            catch (HttpRequestException)
            {
                return  new ResponseModel { Status = (int)response.StatusCode, Message = response.ReasonPhrase};
            }
            
        }


        //Bulk record update
        public async Task<ResponseModel> UpdateRecord<TDataModel>(string collectionName, string organizationId, IEnumerable<TDataModel> data, Filter filterQuery)
        {
            var body = new BulkWriteModel<TDataModel>
            {
                plugin_id = pluginId,
                organization_id = organizationId,
                collection_name = collectionName,
                bulk_write = true,
                filter = filterQuery,
                payload = data
            };

            var jsonObj = JsonConvert.SerializeObject(body);
            var payloadData = new StringContent(jsonObj, Encoding.UTF8, "application/json");

            using var response = await Client.PostAsync("write", payloadData);

            try
            {
                response.EnsureSuccessStatusCode();
                var responseStream = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<ResponseModel>(responseStream);
            }
            catch (HttpRequestException)
            {
                return  new ResponseModel { Status = (int)response.StatusCode, Message = response.ReasonPhrase};
            }
        }


        //Single record delete
        public async Task<ResponseModel> DeleteRecord<TDataModel>(string collectionName, string organizationId, TDataModel data, string objectId)
        {
            var body = new WriteModel<TDataModel>
            {
                plugin_id = pluginId,
                organization_id = organizationId,
                collection_name = collectionName,
                bulk_write = false,
                object_id = objectId,
                payload = data
            };

            var jsonObj = JsonConvert.SerializeObject(body);
            var payloadData = new StringContent(jsonObj, Encoding.UTF8, "application/json");

            using var response = await Client.PostAsync("delete", payloadData);

            try
            {
                response.EnsureSuccessStatusCode();
                var responseStream = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<ResponseModel>(responseStream);
            }
            catch (HttpRequestException)
            {
                return  new ResponseModel { Status = (int)response.StatusCode, Message = response.ReasonPhrase};
            }
            
        }


        //Bulk record delete
        public async Task<ResponseModel> DeleteRecord<TDataModel>(string collectionName, string organizationId, IEnumerable<TDataModel> data, Filter filterQuery)
        {
            var body = new BulkWriteModel<TDataModel>
            {
                plugin_id = pluginId,
                organization_id = organizationId,
                collection_name = collectionName,
                bulk_write = true,
                filter = filterQuery,
                payload = data
            };

            var jsonObj = JsonConvert.SerializeObject(body);
            var payloadData = new StringContent(jsonObj, Encoding.UTF8, "application/json");

            using var response = await Client.PostAsync("delete", payloadData);

            try
            {
                response.EnsureSuccessStatusCode();
                var responseStream = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<ResponseModel>(responseStream);
            }
            catch (HttpRequestException)
            {
                return  new ResponseModel { Status = (int)response.StatusCode, Message = response.ReasonPhrase};
            }
        }
    }
}