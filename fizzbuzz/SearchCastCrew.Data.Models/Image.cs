using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SearchCastCrew.Data.Models
{
    public class Image
    {
        [Key]
        public int ImageId { get; set; }
        public string ImageUrl { get; set; }
        public string ImageDesc { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsProfile { get; set; }
        // FK to User table
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
