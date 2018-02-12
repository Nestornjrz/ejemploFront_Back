using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Ejemplo.Presentacion.Web.Startup))]
namespace Ejemplo.Presentacion.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
