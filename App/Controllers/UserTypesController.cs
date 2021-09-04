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
        private static IMongoCollection<UserTypes> _shiftCollection;

        public UserTypesController(IMongoClient client)
        {
            var database = client.GetDatabase("zuri_tracker");
            _shiftCollection = database.GetCollection<UserTypes>("userstypes");
        }
        // GET: api/<UserTypesController>
        [HttpGet]
        public IEnumerable<UserTypes> Get()
        {
            return _shiftCollection.Find(_ => true).ToList();
        }

        // GET api/<UserTypesController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UserTypesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<UserTypesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserTypesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
