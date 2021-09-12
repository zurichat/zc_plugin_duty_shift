using System.Collections.Generic;
using System.Threading.Tasks;

namespace App
{
    public interface IDataService
    {

        Task<ResponseModel> CreateRecord<TDataModel>(string collectionName, string organizationId, TDataModel data);

        Task<ResponseModel> CreateRecord<TDataModel>(string collectionName, string organizationId, IEnumerable<TDataModel> data);

        Task<ReadResponseModel<TOutputModel>> ReadRecord<TOutputModel>(string collectionName, string organizationId);

        Task<ReadResponseModel<TOutputModel>> ReadRecord<TOutputModel>(string collectionName, string organizationId, string objectId);

        Task<ReadResponseModel<TOutputModel>> ReadRecord<TOutputModel>(string collectionName, string organizationId, string queryKey, string queryValue);

    }
}