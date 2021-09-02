using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using App.Models;

namespace App.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShiftController : Controller
    {
        private static Shift[] UserShifts = 
        {
           new Shift {
               ShiftTitle="Morning Shift",
               DateCreated = new DateTime(2021,09,02),
               LeadById = 1,
               TimeStart = "12:00 hr",
               TimeEnd = "18:00 hr"
           },
           new Shift {
               ShiftTitle="Morning Shift",
               DateCreated = new DateTime(2021,09,01),
               LeadById = 2,
               TimeStart = "12:00 hr",
               TimeEnd = "18:00 hr"
           },
           new Shift {
               ShiftTitle="Morning Shift",
               DateCreated = new DateTime(2021,08,02),
               LeadById = 3,
               TimeStart = "12:00 hr",
               TimeEnd = "18:00 hr"
           },
           new Shift {
               ShiftTitle="Afternoon Shift",
               DateCreated = new DateTime(2021,07,02),
               LeadById = 1,
               TimeStart = "12:00 hr",
               TimeEnd = "18:00 hr"
           },
           new Shift {
               ShiftTitle="Afternoon Shift",
               DateCreated = new DateTime(2021,09,02),
               LeadById = 2,
               TimeStart = "12:00 hr",
               TimeEnd = "18:00 hr"
           },
           new Shift {
               ShiftTitle="Afternoon Shift",
               DateCreated = new DateTime(2021,09,02),
               LeadById = 3,
               TimeStart = "12:00 hr",
               TimeEnd = "18:00 hr",
               CreatedById = 1
           }
        };

        private readonly ILogger<ShiftController> _logger;

        public ShiftController(ILogger<ShiftController> logger)
        {
            _logger = logger;
        }

        

        // GET: ShiftController
        [HttpGet]
        public IEnumerable<Shift> Get()
        {
            return UserShifts.ToList();
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
