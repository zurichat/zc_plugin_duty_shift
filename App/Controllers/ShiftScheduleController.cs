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
        private static IMongoCollection<ShiftSchedule> _shiftCollection;

        public ShiftScheduleController(IMongoClient client)
        {
            var database = client.GetDatabase("zuri_tracker");
            _shiftCollection = database.GetCollection<ShiftSchedule>("ShiftSchedule");
        }

        // GET: api/<ShiftScheduleController>
        [HttpGet]
        public IEnumerable<ShiftSchedule> Get()
        {
            return _shiftCollection.Find(_ => true).ToList();
        }

        // GET api/<ShiftScheduleController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ShiftScheduleController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ShiftScheduleController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ShiftScheduleController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
