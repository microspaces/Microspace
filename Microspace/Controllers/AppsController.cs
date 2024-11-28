using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microspace.Models;

namespace Microspace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppsController : ControllerBase
    {
        private readonly ILogger<AppsController> _logger;

        public AppsController(ILogger<AppsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetApps()
        {
            try
            {
                // TODO: Replace with actual data source
                var apps = GetMockApps();
                _logger.LogInformation("Returning apps: {Apps}", System.Text.Json.JsonSerializer.Serialize(apps));
                return Ok(apps);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching apps");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAppById(string id)
        {
            try
            {
                // TODO: Replace with actual data source
                var apps = GetMockApps();
                var app = apps.Apps.FirstOrDefault(a => a.Id == id);
                
                if (app == null)
                {
                    return NotFound();
                }

                return Ok(app);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching app by id");
                return StatusCode(500, "Internal server error");
            }
        }

        // Temporary mock data method - will be replaced with actual data source
        private AppResponse GetMockApps()
        {
            return new AppResponse
            {
                Apps = new List<App>
                {
                    new App
                    {
                        Id = "550e8400-e29b-41d4-a716-446655440000",
                        Name = "App 1",
                        Type = "microspace",
                        Background = new Background 
                        { 
                            Type = "color", 
                            Value = "#f0f8ff" 
                        },
                        AppContainers = new List<AppContainer>
                        {
                            new AppContainer
                            {
                                Name = "Container 1.1",
                                ContainedApp = new App
                                {
                                    Id = "67e55044-10b1-426f-9247-bb680e5fe0c8",
                                    Name = "Contained App 3",
                                    Type = "utility"
                                }
                            },
                            new AppContainer
                            {
                                Name = "Container 1.2",
                                ContainedApp = new App
                                {
                                    Id = "8c805a93-0725-4f1e-8b14-8e875c96b456",
                                    Name = "Contained App 4",
                                    Type = "service"
                                }
                            },
                            new AppContainer
                            {
                                Name = "Nested Microspace Container",
                                ContainedApp = new App
                                {
                                    Id = "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                                    Name = "Dashboard App",
                                    Type = "microspace",
                                    Background = new Background
                                    {
                                        Type = "image",
                                        Value = "https://images.unsplash.com/photo-1557683316-973673baf926?w=600"
                                    },
                                    AppContainers = new List<AppContainer>
                                    {
                                        new AppContainer
                                        {
                                            Name = "Analytics Container",
                                            ContainedApp = new App
                                            {
                                                Id = "7c9e6679-7425-40de-944b-e07fc1f90ae7",
                                                Name = "Analytics Module",
                                                Type = "analytics"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
        }
    }
}
