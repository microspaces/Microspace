using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microspace.Models;

namespace Microspace.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<App> Apps { get; set; }
        public DbSet<AppContainer> AppContainers { get; set; }
        public DbSet<Background> Backgrounds { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure App entity
            modelBuilder.Entity<App>()
                .HasKey(a => a.Id);

            // Configure Background entity
            modelBuilder.Entity<Background>()
                .HasKey(b => new { b.Type, b.Value });

            // Configure AppContainer entity
            modelBuilder.Entity<AppContainer>()
                .HasKey(ac => new { ac.Name });
        }
    }
}
