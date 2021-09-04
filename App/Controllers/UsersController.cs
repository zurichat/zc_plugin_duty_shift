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
    public class UsersController : ControllerBase
    {
        private static IMongoCollection<Users> _usersCollection;

        public UsersController(IMongoClient client)
        {
            var database = client.GetDatabase("zuri_tracker");
            //database.DropCollection("Users");
            _usersCollection = database.GetCollection<Users>("Users");
        }
        // GET: api/<UsersController>
        [HttpGet]
        public IEnumerable<Users> Get()
        {
            return _usersCollection.Find(_ => true).ToList();
        }

        // GET api/<UsersController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UsersController>
        [HttpPost]
        public async void Post([FromForm] Users user)
        {
            await _usersCollection.InsertOneAsync(user);
        }

        // PUT api/<UsersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var deleted = await _usersCollection.DeleteOneAsync(s => s.Id == id);
            if (deleted.IsAcknowledged && deleted.DeletedCount > 0)
            {
                return Ok("Deleted");
            }
            else
            {
                return NotFound();
            }
        }
    }
}
