using System.ComponentModel.DataAnnotations;

namespace Tailcode.Models
{
    public class ContactViewModel
    {
        [Required(ErrorMessage = "Ad Soyad alanı zorunludur.")]
        [Display(Name = "Ad Soyad")]
        public string Ad { get; set; } = string.Empty;

        [Required(ErrorMessage = "E-posta adresi zorunludur.")]
        [EmailAddress(ErrorMessage = "Geçerli bir e-posta adresi giriniz.")]
        [Display(Name = "E-posta")]
        public string Email { get; set; } = string.Empty;

        [Display(Name = "Konu")]
        public string? Konu { get; set; }

        [Display(Name = "Proje Vizyonunuz")]
        public string? Vizyon { get; set; }

        [Required(ErrorMessage = "Mesaj alanı zorunludur.")]
        [Display(Name = "Mesaj")]
        public string Mesaj { get; set; } = string.Empty;
    }
}
