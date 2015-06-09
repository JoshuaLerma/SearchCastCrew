using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SearchCastCrew.Data.Models
{
    public class Link
    {
        [Key]
        public int LinkId { get; set; }
        public string LinkUrl { get; set; }
        public string LinkType { get; set; }
        public string LinkDesc { get; set; }
        public bool IsDeleted { get; set; }
        // FK to User table
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
