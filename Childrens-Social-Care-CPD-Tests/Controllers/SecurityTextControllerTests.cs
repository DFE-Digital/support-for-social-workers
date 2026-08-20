using Childrens_Social_Care_CPD.Configuration;
using Childrens_Social_Care_CPD.Contentful.Renderers;
using Childrens_Social_Care_CPD.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;

namespace Childrens_Social_Care_CPD_Tests.Controllers
{

    public class SecurityTextControllerTests
    {
        private IApplicationConfiguration _applicationConfiguration;
        private SecurityTextController _controller;

        [SetUp]
        public void Setup()
        {
            _applicationConfiguration = Substitute.For<IApplicationConfiguration>();
            _controller = new SecurityTextController(_applicationConfiguration);            
        }

        private void SetUrl(string url)
        {            
            _applicationConfiguration.SecurityTxtUrl.Returns(url);
        }

        [Test]
        public void GetSecurityText_NoUrl_Returns404NotFound()
        {
            SetUrl(string.Empty); 

            var result = _controller.GetSecurityText();

            result.Should().BeOfType<NotFoundObjectResult>();
            var resultType = result as NotFoundObjectResult;
            resultType.Should().NotBeNull();
            resultType!.StatusCode.Should().Be(404);
            resultType.Value.Should().Be("Security file was not found");
        }

        [Test]
        public void GetSecurityText_GotUrl_RedirectsToUrl()
        {
            const string dummyUrl = "https://www.google.com";
            SetUrl(dummyUrl);

            var result = _controller.GetSecurityText();        

            result.Should().BeOfType<RedirectResult>();
            var resultType = result as RedirectResult;
            resultType.Should().NotBeNull();
            resultType!.Url.Should().Be(dummyUrl);
        }
    }
}
