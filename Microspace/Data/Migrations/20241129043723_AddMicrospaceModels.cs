using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Microspace.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddMicrospaceModels : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Backgrounds",
                columns: table => new
                {
                    Type = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Backgrounds", x => new { x.Type, x.Value });
                });

            migrationBuilder.CreateTable(
                name: "Apps",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BackgroundType = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    BackgroundValue = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Apps", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Apps_Backgrounds_BackgroundType_BackgroundValue",
                        columns: x => new { x.BackgroundType, x.BackgroundValue },
                        principalTable: "Backgrounds",
                        principalColumns: new[] { "Type", "Value" });
                });

            migrationBuilder.CreateTable(
                name: "AppContainers",
                columns: table => new
                {
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ContainedAppId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppContainers", x => x.Name);
                    table.ForeignKey(
                        name: "FK_AppContainers_Apps_ContainedAppId",
                        column: x => x.ContainedAppId,
                        principalTable: "Apps",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppContainers_ContainedAppId",
                table: "AppContainers",
                column: "ContainedAppId");

            migrationBuilder.CreateIndex(
                name: "IX_Apps_BackgroundType_BackgroundValue",
                table: "Apps",
                columns: new[] { "BackgroundType", "BackgroundValue" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AppContainers");

            migrationBuilder.DropTable(
                name: "Apps");

            migrationBuilder.DropTable(
                name: "Backgrounds");
        }
    }
}
