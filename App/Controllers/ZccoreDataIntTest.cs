using System.Collections.Generic;
using System.Threading.Tasks;
using App.Models.ZcCoreTestModels;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
    [ApiController]
    [Route("dataint")]
    public class ZccoreDataIntTest : ControllerBase
    {
        private readonly ZcCoreDataService _dbService;
        private string collectionName = "IntegrationTest";
        private string organizationId = "612a3a914acf115e685df8e3";

        public ZccoreDataIntTest(ZcCoreDataService dbService)
        {
            _dbService = dbService;
        }

        [HttpGet]
        public async Task<List<GetTest>> Get()
        {
            var response = await _dbService.ReadData<GetTest>(collectionName,organizationId);
            return response.Data;
        }
    }
}