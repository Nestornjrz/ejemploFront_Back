using Ejemplo.Dominio.Db;
using Ejemplo.Dominio.Dto;
using Ejemplo.Dominio.Dto.Auxiliares;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace Ejemplo.Dominio.Managers {
    public class ClientesManagers {
        public async Task<MensajeDto> RecuperarClientes() {
            using (var context = new EjemploDbEntities()) {
                var clientes = await context.Clientes
                    .Select(s => new ClienteDto() {
                        ClienteID = s.ClienteID,
                        Nombres = s.Nombres,
                        Apellidos = s.Apellidos,
                        FechaNacimiento = s.FechaNacimiento
                    })
                    .ToListAsync();
                return new MensajeDto() {
                    Error = false,
                    MensajeDelProceso = "Se recupero el listado de clientes",
                    ObjetoDto = clientes
                };
            }
        }
    }
}
