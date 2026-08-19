using Childrens_Social_Care_CPD.Configuration;
using Microsoft.AspNetCore.Mvc;

namespace Childrens_Social_Care_CPD.Controllers
{
    public class SecurityTextController(IApplicationConfiguration applicationConfiguration) : Controller
    {
        [HttpGet("security.txt")]
        [HttpGet(".well-known/security.txt")]
        public IActionResult GetSecurityText()
        {         
           
            var url = applicationConfiguration.SecurityTxtUrl;
            if (string.IsNullOrEmpty(url))
            {
                return NotFound("Security file was not found");
            }

            return Redirect(url);
        }
    }
}
