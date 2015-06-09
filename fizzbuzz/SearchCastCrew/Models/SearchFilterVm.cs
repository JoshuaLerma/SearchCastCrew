using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SearchCastCrew.Models
{
    public class SearchFilterVm
    {
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Title { get; set; }
        public int Zip { get; set; }
        [Display(Name = "Height")]
        public int? HeightInInches { get; set; }
        public string HeightConverted { get; set; }
        public int? Weight { get; set; }
        public int? HairColorId { get; set; }
        public SelectList HairColorList { get; set; }
        public int? EyeColorId { get; set; }
        public SelectList EyeColorList { get; set; }
        public int? AgeRangeId { get; set; } // new SelectList(db.AgeRanges, "AgeRangeId", "Name");
        public SelectList AgeRangeList { get; set; }
        public int? GenderId { get; set; }
        public SelectList GenderList { get; set; }
        public int? BodyTypeId { get; set; }
        public SelectList BodyTypeList { get; set; }
        public int? EthnicityId { get; set; }
        public SelectList EthnicityList { get; set; }
        public int? AvailabilityId { get; set; }
        public SelectList AvailabilityList { get; set; }

        public List<UserVm> UserList { get; set; }
        public int CurrPage { get; set; }
    }
}