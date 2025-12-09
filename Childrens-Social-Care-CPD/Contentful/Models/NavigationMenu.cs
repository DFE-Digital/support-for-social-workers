using System.Runtime.CompilerServices;
using Contentful.Core.Models;

namespace Childrens_Social_Care_CPD.Contentful.Models;

public class NavigationMenu: IContent
{
    public string Name { get; set; }
    public List<ContentLink> Items { get; set; }
    public string Header { get; set; }
    public int HeaderLevel { get; set; }

    //Accessibility fix to make the default Header Level tag a H2 (not H0)
    public int HeaderLevelFix => HeaderLevel == 0 ? 2 : HeaderLevel;
}
