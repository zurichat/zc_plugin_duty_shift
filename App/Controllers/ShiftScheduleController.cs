using App.Models;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShiftScheduleController : ControllerBase
    {
        private static IMongoCollection<ShiftSchedule> _shiftScheduleCollection;

        public ShiftScheduleController(IMongoClient client)
        {
            var database = client.GetDatabase("zuri_tracker");
            _shiftScheduleCollection = database.GetCollection<ShiftSchedule>("testShiftSchedule");
        }

        // GET: api/<ShiftScheduleController>
        [HttpGet]
        public IEnumerable<ShiftSchedule> Get()
        {
            return _shiftScheduleCollection.Find(_ => true).ToList();
        }

        

        // POST api/<ShiftScheduleController>
        [HttpPost]
        public async void Post([FromForm] ShiftSchedule schedule)
        {
            await _shiftScheduleCollection.InsertOneAsync(schedule);
        }

        
        // PUT api/<ShiftScheduleController>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSchedule(string id, [FromForm] ShiftSchedule schedule)
        {
            schedule.Id = id; //  set the id field of the obtained object
            var updated = await _shiftScheduleCollection.ReplaceOneAsync(s => s.Id == id, schedule);
            if (updated.IsAcknowledged && updated.ModifiedCount > 0)
            {
                return Ok( "Updated" );
            }
            else
            {
                return NotFound();
            }
            //var update = Builders<ShiftSchedule>.Update.Set("AcknowledgedByUser", true);
            
        }

        // DELETE api/<ShiftScheduleController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
