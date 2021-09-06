using System.Xml.Schema;
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

        

        // POST: ShiftController/Create
        [HttpPost]
        public async void Create([FromBody]Shift shift)
        {
            await _shiftCollection.InsertOneAsync(shift);
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

                //To check this Update One action use /api/Shift/Put/id,Form Records        
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody]Shift shift)
        {
            var shiftRecord =  _shiftCollection.Find(s=>s.Id==id).FirstOrDefault();
            if(shiftRecord != null){
                shiftRecord.ShiftTitle = shift.ShiftTitle;
                shiftRecord.TimeStart =shift.TimeStart;
                shiftRecord.TimeEnd = shift.TimeEnd;
                shiftRecord.LeadById = shift.LeadById;

                FilterDefinition<Shift> s = new ExpressionFilterDefinition<Shift>(s => s.Id == id);

                await _shiftCollection.UpdateOneAsync(s, new ObjectUpdateDefinition<Shift>(shiftRecord));
                return Ok("Record updated Successfully");

            }else{
                return NotFound("No such record exists");
            }

        
        }
            

        }
}
