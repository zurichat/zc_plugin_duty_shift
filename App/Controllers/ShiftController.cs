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
    [ApiController]
    [Route("api/[controller]")]
    public class ShiftController : Controller
    {
        private  static IMongoCollection<Shift> _shiftCollection;

        public ShiftController(IMongoClient client)
        {
            var database = client.GetDatabase("zuri_tracker");
            //database.DropCollection("shift");
            _shiftCollection = database.GetCollection<Shift>("shift");
            
        }


        [HttpGet]
        // GET: ShiftController
        public IEnumerable<Shift> Get()
        {
            //return View();
            return _shiftCollection.Find(_=>true).ToList();
        }

        // GET: ShiftController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ShiftController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ShiftController/Create
        [HttpPost]
        public async void Create([FromForm]Shift shift)
        {
            await _shiftCollection.InsertOneAsync(shift);
        }

        // GET: ShiftController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }



        // GET: ShiftController/Delete/5

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var deleted = await _shiftCollection.DeleteOneAsync(s => s.Id == id);
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
