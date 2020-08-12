using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Entities
{
    public class Order
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "varchar(255)")]
        public string DeliveryAdress { get; set; }

        [Column(TypeName = "varchar(255)")]
        public string Notes { get; set; }

        public DateTime DateCreated { get; set; }

        public bool Processed { get; set; }

        public ICollection<Product> Products { get; set; }
        public User User { get; set; }

    }
}