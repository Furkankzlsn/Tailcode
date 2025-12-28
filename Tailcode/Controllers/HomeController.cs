using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Tailcode.Models;

namespace Tailcode.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Services()
        {
            return View();
        }

        public IActionResult Solutions()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Contact()
        {
            return View(new ContactViewModel());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                // TODO: İletişim formunu işle (e-posta gönder, veritabanına kaydet vb.)
                // Şimdilik sadece başarı mesajı gösteriyoruz
                
                TempData["SuccessMessage"] = "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.";
                return RedirectToAction(nameof(Contact));
            }
            
            return View(model);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
