using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace WebAPI.Entities
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(31)")]
        public string Name { get; set; }

        [Column(TypeName = "nvarchar(31)")]
        public string Category { get; set; }

        public string Description { get; set; }

        [Column(TypeName = "nvarchar(31)")]
        public string Size { get; set; }

        [Column(TypeName = "nvarchar(31)")]
        public string Length { get; set; }

        public double Price { get; set; }

        [Column(TypeName = "nvarchar(31)")]
        public string TypeForPrice { get; set; }

        public int Stock { get; set; }

        public string Photo { get; set; }

        public ICollection<OrderProduct> OrderProduct { get; set; }

    }
}
