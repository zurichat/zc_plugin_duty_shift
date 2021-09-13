using System.Collections.Generic;
using System.Threading.Tasks;

namespace App
{
    public interface IDataService
    {

        Task<CreateResponseModel> CreateRecord<TDataModel>(string collectionName, string organizationId, TDataModel data);

        Task<CreateResponseModel> CreateRecord<TDataModel>(string collectionName, string organizationId, IEnumerable<TDataModel> data);

        Task<ReadResponseModel<TOutputModel>> ReadRecord<TOutputModel>(string collectionName, string organizationId);

        Task<ReadResponseModel<TOutputModel>> ReadRecord<TOutputModel>(string collectionName, string organizationId, string queryKey, string queryValue);

        Task<ResponseModel> UpdateRecord<TDataModel>(string collectionName, string organizationId, TDataModel data, string objectId);

        Task<ResponseModel> UpdateRecord<TDataModel>(string collectionName, string organizationId, TDataModel data, string filterKey, string filterValue);

        Task<DeleteResponseModel> DeleteRecord(string collectionName, string organizationId, string objectId);

        Task<DeleteResponseModel> DeleteRecord(string collectionName, string organizationId, string filterKey, string filterValue);

    }
}