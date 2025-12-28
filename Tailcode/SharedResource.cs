namespace Tailcode
{
    /// <summary>
    /// Marker class for shared localization resources.
    /// The resource files (SharedResource.tr.resx, SharedResource.en.resx, etc.)
    /// are located in the Resources folder.
    /// 
    /// Supported Languages:
    /// - tr-TR: Türkçe (Default)
    /// - en-US: English
    /// 
    /// To add a new language:
    /// 1. Create SharedResource.{culture}.resx (e.g., SharedResource.fr.resx)
    /// 2. Add CultureInfo to Program.cs supportedCultures array
    /// 3. Add language option to _Layout.cshtml language switcher
    /// </summary>
    public class SharedResource
    {
    }
}
