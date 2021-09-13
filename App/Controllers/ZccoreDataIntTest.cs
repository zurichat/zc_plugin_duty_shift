using System;
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
        private readonly IDataService _dbService;
        private string collectionName = "TestShift";
        private string organizationId = "613e32346fae611c5d34faaf";

        public ZccoreDataIntTest(IDataService dbService)
        {
            _dbService = dbService;
        }

        [HttpGet("create")]
        public async Task<ActionResult> Create()
        {
            var shift = new ShiftDataTest 
            {
                ShiftTitle = "Data",
                TimeEnd = "1 pm",
                TimeStart = "6 am",
                LeadById = "James",
                CreatedById = "56",
                Status = true,
                DateCreated = DateTime.Now
            };
            var response = await _dbService.CreateRecord<ShiftDataTest>(collectionName,organizationId, shift);
            return Ok(response);
        }

        [HttpGet("bulkcreate")]
        public async Task<ActionResult> BulkCreate()
        {
            var shift = new List<ShiftDataTest>() 
            { new ShiftDataTest{
                ShiftTitle = "Data",
                TimeEnd = "8 pm",
                TimeStart = "6 am",
                LeadById = "Eyimofe",
                CreatedById = "56",
                Status = true,
                DateCreated = DateTime.Now},

                new ShiftDataTest{
                ShiftTitle = "Data",
                TimeEnd = "5 pm",
                TimeStart = "6 am",
                LeadById = "Osaze",
                CreatedById = "56",
                Status = false,
                DateCreated = DateTime.Now},

                new ShiftDataTest{
                ShiftTitle = "Data",
                TimeEnd = "5 pm",
                TimeStart = "6 am",
                LeadById = "Benard",
                CreatedById = "56",
                Status = true,
                DateCreated = DateTime.Now}
            };
            var response = await _dbService.CreateRecord<ShiftDataTest>(collectionName,organizationId, shift);
            return Ok(response);
        }

        [HttpGet("read")]
        public async Task<ActionResult> Read()
        {
            var response = await _dbService.ReadRecord<ShiftDataTest>(collectionName,organizationId);
            return Ok(response);
        }

        [HttpGet("readwquery")]
        public async Task<ActionResult> ReadByQuery()
        {
            var response = await _dbService.ReadRecord<ShiftDataTest>(collectionName,organizationId, "leadById", "Eyimofe");
            return Ok(response);
        }

        [HttpGet("update")]
        public async Task<ActionResult> Update()
        {
            var shift = new ShiftDataTest{
                ShiftTitle = "Data",
                TimeEnd = "8 pm",
                TimeStart = "6 am",
                LeadById = "Eyimofe",
                CreatedById = "560",
                Status = true
            };
            var response = await _dbService.UpdateRecord<ShiftDataTest>(collectionName,organizationId, shift, "613fcdd56173056af01b4b46");
            return Ok(response);
        }

        [HttpGet("bulkupdate")]
        public async Task<ActionResult> UpdateBulk()
        {
            var shift = new ShiftDataTest{
                ShiftTitle = "Data",
                TimeEnd = "11:30 pm",
                TimeStart = "1 am",
                CreatedById = "56",
                Status = true
            };
            var response = await _dbService.UpdateRecord<ShiftDataTest>(collectionName,organizationId, shift, "timeEnd", "5 pm");
            return Ok(response);
        }

        [HttpGet("delete")]
        public async Task<ActionResult> Delete()
        {
            var response = await _dbService.DeleteRecord(collectionName,organizationId, "613fcd676173056af01b4b45");
            return Ok(response);
        }

        [HttpGet("bulkdelete")]
        public async Task<ActionResult> DeleteBulk()
        {
            var response = await _dbService.DeleteRecord(collectionName,organizationId, "leadById", "Eyimofe");
            return Ok(response);
        }
    }
}