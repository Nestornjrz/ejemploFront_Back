using Ejemplo.Dominio.Managers;
using System.Threading.Tasks;
using System.Web.Http;

namespace Ejemplo.Presentacion.Web.Controllers.Api {
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
