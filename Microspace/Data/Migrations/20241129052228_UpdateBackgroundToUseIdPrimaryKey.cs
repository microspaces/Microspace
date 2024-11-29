using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Microspace.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateBackgroundToUseIdPrimaryKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Apps_Backgrounds_BackgroundType_BackgroundValue",
                table: "Apps");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Backgrounds",
                table: "Backgrounds");

            migrationBuilder.DropIndex(
                name: "IX_Apps_BackgroundType_BackgroundValue",
                table: "Apps");

            migrationBuilder.DropColumn(
                name: "BackgroundType",
                table: "Apps");

            migrationBuilder.DropColumn(
                name: "BackgroundValue",
                table: "Apps");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Backgrounds",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddColumn<int>(
                name: "BackgroundId",
                table: "Apps",
                type: "int",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Backgrounds",
                table: "Backgrounds",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Backgrounds_Type_Value",
                table: "Backgrounds",
                columns: new[] { "Type", "Value" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Apps_BackgroundId",
                table: "Apps",
                column: "BackgroundId");

            migrationBuilder.AddForeignKey(
                name: "FK_Apps_Backgrounds_BackgroundId",
                table: "Apps",
                column: "BackgroundId",
                principalTable: "Backgrounds",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Apps_Backgrounds_BackgroundId",
                table: "Apps");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Backgrounds",
                table: "Backgrounds");

            migrationBuilder.DropIndex(
                name: "IX_Backgrounds_Type_Value",
                table: "Backgrounds");

            migrationBuilder.DropIndex(
                name: "IX_Apps_BackgroundId",
                table: "Apps");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Backgrounds");

            migrationBuilder.DropColumn(
                name: "BackgroundId",
                table: "Apps");

            migrationBuilder.AddColumn<string>(
                name: "BackgroundType",
                table: "Apps",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "BackgroundValue",
                table: "Apps",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Backgrounds",
                table: "Backgrounds",
                columns: new[] { "Type", "Value" });

            migrationBuilder.CreateIndex(
                name: "IX_Apps_BackgroundType_BackgroundValue",
                table: "Apps",
                columns: new[] { "BackgroundType", "BackgroundValue" });

            migrationBuilder.AddForeignKey(
                name: "FK_Apps_Backgrounds_BackgroundType_BackgroundValue",
                table: "Apps",
                columns: new[] { "BackgroundType", "BackgroundValue" },
                principalTable: "Backgrounds",
                principalColumns: new[] { "Type", "Value" });
        }
    }
}
