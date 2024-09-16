using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartHomeAPI.Data;
using SmartHomeAPI.Models;

namespace SmartHomeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCorsPolicy")]
    public class MonitoringsController : ControllerBase
    {
        private readonly SmartHomeAPIContext _context;

        public MonitoringsController(SmartHomeAPIContext context)
        {
            _context = context;
        }

        // GET: api/Monitorings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Monitoring>>> GetMonitoring()
        {
            return await _context.Monitoring.ToListAsync();
        }

        // GET: api/Monitorings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Monitoring>> GetMonitoring(int id)
        {
            var monitoring = await _context.Monitoring.FindAsync(id);

            if (monitoring == null)
            {
                return NotFound();
            }

            return monitoring;
        }

        // PUT: api/Monitorings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMonitoring(int id, Monitoring monitoring)
        {
            if (id != monitoring.MonitoringID)
            {
                return BadRequest();
            }

            _context.Entry(monitoring).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MonitoringExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Monitorings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Monitoring>> PostMonitoring(Monitoring monitoring)
        {
            _context.Monitoring.Add(monitoring);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMonitoring", new { id = monitoring.MonitoringID }, monitoring);
        }

        // DELETE: api/Monitorings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMonitoring(int id)
        {
            var monitoring = await _context.Monitoring.FindAsync(id);
            if (monitoring == null)
            {
                return NotFound();
            }

            _context.Monitoring.Remove(monitoring);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MonitoringExists(int id)
        {
            return _context.Monitoring.Any(e => e.MonitoringID == id);
        }
    }
}
