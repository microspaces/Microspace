using System.Text.Json;
using Microspace.Models;
using Microsoft.EntityFrameworkCore;

namespace Microspace.Data
{
    public class MicrospaceSeeder
    {
        private readonly ApplicationDbContext _context;

        public MicrospaceSeeder(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task SeedAsync()
        {
            if (!_context.Apps.Any())
            {
                var apps = new List<App>
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
                            }
                        }
                    },
                    new App
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
                            },
                            new AppContainer
                            {
                                Name = "Reports Container",
                                ContainedApp = new App
                                {
                                    Id = "b5d5d21c-1a7c-4d2e-a9c4-c3c6b1d63044",
                                    Name = "Report Generator",
                                    Type = "reporting"
                                }
                            }
                        }
                    }
                };

                foreach (var app in apps)
                {
                    _context.Apps.Add(app);
                }

                await _context.SaveChangesAsync();
            }
        }
    }
}
