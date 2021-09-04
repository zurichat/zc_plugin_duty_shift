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
    public class UserTypesController : ControllerBase
    {
        private static IMongoCollection<UserTypes> _userTypesCollection;

        public UserTypesController(IMongoClient client)
        {
            var database = client.GetDatabase("zuri_tracker");
            //database.DropCollection("userstypes");
            _userTypesCollection = database.GetCollection<UserTypes>("userstypes");
        }
        // GET: api/<UserTypesController>
        [HttpGet]
        public IEnumerable<UserTypes> Get()
        {
            return _userTypesCollection.Find(_ => true).ToList();
        }

        

        // POST api/<UserTypesController>
        [HttpPost]
        public async void Post([FromBody] UserTypes types)
        {
            await _userTypesCollection.InsertOneAsync(types);
        }

        // PUT api/<UserTypesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserTypesController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var deleted = await _userTypesCollection.DeleteOneAsync(s => s.Id == id);
            if (deleted.IsAcknowledged && deleted.DeletedCount > 0)
            {
                return Ok("Deleted");
            }
            else
            {
                return NotFound();
            }
        }


        public void Add([FromForm] string value)
        {
            //var newType = _userTypesCollection.InsertOne(new UserTypes { Types = value});
        }
    }
}
