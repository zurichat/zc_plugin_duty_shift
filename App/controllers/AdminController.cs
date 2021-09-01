using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using App.Entities;

namespace App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
<<<<<<< Updated upstream:App/controllers/AdminController.cs
    public class AdminController : ControllerBase
=======
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
>>>>>>> Stashed changes:App/Controllers/WeatherForecastController.cs
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<AdminController> _logger;

        public AdminController(ILogger<AdminController> logger)
        {
            _logger = logger;
        }

        //GET /api/weatherforecast
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet("{id}")]
        public IEnumerable<Egg> Some(int name)
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Egg
            {
                Name = Summaries[rng.Next(Summaries.Length)],
                Id = Guid.NewGuid()
            }).ToArray();
        }
    }
}