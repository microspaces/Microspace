using System.ComponentModel.DataAnnotations;

namespace Microspace.Models
{
    public class AppResponse
    {
        public List<App> Apps { get; set; } = new List<App>();
    }

    public class App
    {
        [Required]
        public string Id { get; set; } = string.Empty;
        
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;
        
        [Required]
        public string Type { get; set; } = string.Empty;
        
        [StringLength(500)]
        public string Description { get; set; } = string.Empty;
        
        public Background? Background { get; set; }
        public List<AppContainer>? AppContainers { get; set; }
    }

    public class AppContainer
    {
        public string Name { get; set; } = string.Empty;
        public App? ContainedApp { get; set; }
    }

    public class Background
    {
        public int Id { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Type { get; set; } = string.Empty;
        
        [Required]
        public string Value { get; set; } = string.Empty;
    }

    public class UserPreference
    {
        public int Id { get; set; }
        
        [Required]
        public string UserId { get; set; } = string.Empty;
        
        [Required]
        public string Theme { get; set; } = "Light";
        
        public bool NotificationsEnabled { get; set; } = true;
        
        public DateTime LastModified { get; set; } = DateTime.UtcNow;
    }
}
