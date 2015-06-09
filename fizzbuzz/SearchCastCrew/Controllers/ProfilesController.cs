using SearchCastCrew.Adapters;
using SearchCastCrew.Data;
using SearchCastCrew.Data.Models;
using SearchCastCrew.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace SearchCastCrew.Controllers
{
    public class ProfilesController : Controller
    {
        //Move to adapter...
        private ApplicationDbContext db = new ApplicationDbContext();
        IUserAdapter _adapter;

        public ProfilesController()
        {
            _adapter = new UserDataAdapter();
        }

        public ProfilesController(IUserAdapter adp)
        {
            _adapter = adp;
        }

       
        [HttpGet]
        public ActionResult Search()
        {
            SearchFilterVm svm = new SearchFilterVm();

            svm.UserList = _adapter.GetAllUsers();


            //svm.FirstName = "David";
            //svm.LastName = "Graham";
            //svm.City = "houston";
            //svm.State = "TX";
            //svm.Title = "Producer";
            svm.AgeRangeList = new SelectList(db.AgeRanges, "AgeRangeId", "Name");
            svm.AvailabilityList = new SelectList(db.Availability, "AvailabilityId", "Name");
            svm.BodyTypeList = new SelectList(db.BodyTypes, "BodyTypeId", "Name");
            svm.EthnicityList = new SelectList(db.Ethnicities, "EthnicityId", "Name");
            svm.EyeColorList = new SelectList(db.EyeColors, "EyeColorId", "Color");
            svm.GenderList = new SelectList(db.Genders, "GenderId", "Name");
            svm.HairColorList = new SelectList(db.HairColors, "HairColorId", "Color");
            return View(svm);
        }

        /////

        [HttpPost]
        public ActionResult Search(SearchFilterVm svm)
        {
           
            SearchFilterVm srvm = new SearchFilterVm();

            srvm.UserList = _adapter.FilteredUsers(svm);

            srvm.AgeRangeList = new SelectList(db.AgeRanges.ToList(), "AgeRangeId", "Name", svm.AgeRangeId);
            srvm.AvailabilityList = new SelectList(db.Availability.ToList(), "AvailabilityId", "Name", svm.AvailabilityId);
            srvm.BodyTypeList = new SelectList(db.BodyTypes.ToList(), "BodyTypeId", "Name", svm.BodyTypeId);
            srvm.EthnicityList = new SelectList(db.Ethnicities.ToList(), "EthnicityId", "Name", svm.EthnicityId);
            srvm.EyeColorList = new SelectList(db.EyeColors.ToList(), "EyeColorId", "Color", svm.EyeColorId);
            srvm.GenderList = new SelectList(db.Genders.ToList(), "GenderId", "Name", svm.GenderId);
            srvm.HairColorList = new SelectList(db.HairColors.ToList(), "HairColorId", "Color", svm.HairColorId);

            return View(srvm);

        }

        ///
    }
}