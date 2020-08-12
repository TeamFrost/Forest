using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Entities
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string FullName { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string PhoneNumber { get; set; }

        [Column(TypeName = "nvarchar(255)")]
        public string Company { get; set; }

        [Column(TypeName = "nvarchar(31)")]
        public string Password { get; set; }

        public bool Role { get; set; }

    }
}
