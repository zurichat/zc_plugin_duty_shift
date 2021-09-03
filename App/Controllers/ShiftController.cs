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
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ShiftController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ShiftController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ShiftController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ShiftController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
