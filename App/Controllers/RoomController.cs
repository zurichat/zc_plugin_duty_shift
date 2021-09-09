using App.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class RoomController : ControllerBase
    {
        private static IMongoCollection<Room> _roomCollection;
        public RoomController(IMongoClient client)
        {
            var database = client.GetDatabase("zuri_tracker");
            _roomCollection = database.GetCollection<Room>("room");
        }

        // POST: RoomController/Create
        [HttpPost]
        
        public async Task<IActionResult> Create([FromBody] Room room)
        {
            await _roomCollection.InsertOneAsync(room);
            return Ok("Room created successfully");
        }
    }
}
