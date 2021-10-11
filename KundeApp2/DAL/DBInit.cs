using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KundeApp2.Model
{
    public static class DBInit
    {
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
               var context = serviceScope.ServiceProvider.GetService<KundeContext>();

                // må slette og opprette databasen hver gang når den skalinitieres (seed`es)
              
            }
        }
    }
       
}
