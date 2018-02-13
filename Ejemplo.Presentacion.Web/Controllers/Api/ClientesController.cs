using Ejemplo.Dominio.Managers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Ejemplo.Presentacion.Web.Controllers.Api {
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ClientesController : ApiController {
        public async Task<IHttpActionResult> GetClientes() {
            var cm = new ClientesManagers();
            var mensajeDto = await cm.RecuperarClientes();
            if (mensajeDto == null) {
                return NotFound();
            }
            return Ok(mensajeDto);
        }
    }
}
