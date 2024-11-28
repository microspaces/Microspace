namespace Microspace.Models
{
    public class AppResponse
    {
        public List<App> Apps { get; set; } = new List<App>();
    }

    public class App
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
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
        public string Type { get; set; } = string.Empty;
        public string Value { get; set; } = string.Empty;
    }
}
