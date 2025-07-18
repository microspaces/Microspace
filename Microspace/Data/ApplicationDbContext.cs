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
        public DbSet<UserPreference> UserPreferences { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure App entity
            modelBuilder.Entity<App>()
                .HasKey(a => a.Id);

            // Configure Background entity
            modelBuilder.Entity<Background>()
                .HasKey(b => b.Id);

            // Add unique constraint on Type and Value
            modelBuilder.Entity<Background>()
                .HasIndex(b => new { b.Type, b.Value })
                .IsUnique();

            // Configure AppContainer entity
            modelBuilder.Entity<AppContainer>()
                .HasKey(ac => new { ac.Name });

            // Configure UserPreference entity
            modelBuilder.Entity<UserPreference>()
                .HasKey(u => u.Id);

            modelBuilder.Entity<UserPreference>()
                .HasIndex(u => u.UserId)
                .IsUnique();
        }
    }
}
