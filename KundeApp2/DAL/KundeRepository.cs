using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KundeApp2.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace KundeApp2.DAL
{
    public class KundeRepository : IKundeRepository
    {
        private  KundeContext _db;
        private  ILogger<KundeRepository> _log;

        public KundeRepository(KundeContext db, ILogger<KundeRepository> log)
        {
            _db = db;
            _log = log;
        }

        public async Task<bool> Lagre(Kunde innKunde)
        {
            try
            {
                var nyKundeRad = new Kunder
                {
                    Fornavn = innKunde.Fornavn,
                    Etternavn = innKunde.Etternavn,
                    Adresse = innKunde.Adresse,
                    Hjemreise = innKunde.Hjemreise,
                    Utreise = innKunde.Utreise,
                    fra = innKunde.fra,
                    til=innKunde.til,
                    vei = innKunde.vei,
                    Telefonnr = innKunde.Telefonnr,
                    Epost=innKunde.Epost
                };

                var sjekkPostnr = await _db.Poststeder.FindAsync(innKunde.Postnr);
                if (sjekkPostnr == null)
                {
                    var poststedsRad = new Poststeder();
                    poststedsRad.Postnr = innKunde.Postnr;
                    poststedsRad.Poststed = innKunde.Poststed;
                    nyKundeRad.Poststed = poststedsRad;

                }
                else
                {
                    nyKundeRad.Poststed = sjekkPostnr;
                }
                _db.Kunder.Add(nyKundeRad);
                await _db.SaveChangesAsync();
                return true;
            }
            catch(Exception e)
            {
                _log.LogInformation(e.Message);
                return false;
            }
        }


        public async Task<List<Kunde>> HentAlle()
        {
            try
            {
                List<Kunde> alleKunder = await _db.Kunder.Select(k => new Kunde
                {
                    Id = k.Id,
                    Fornavn = k.Fornavn,
                    Etternavn = k.Etternavn,
                    Adresse = k.Adresse,
                    Postnr = k.Poststed.Postnr,
                    Poststed = k.Poststed.Poststed,
                    Hjemreise = k.Hjemreise,
                    Utreise = k.Utreise,
                    fra = k.fra,
                    til = k.til,
                    vei = k.vei,
                    Epost = k.Epost,
                    Telefonnr = k.Telefonnr

                }).ToListAsync();
                return alleKunder;
            }
            catch (Exception e)
            {
                _log.LogInformation(e.Message);
                return null;
            }
        }

      /*  public async Task<bool> Slett(int id)
        {
            try
            {
                Kunder enDBKunde = await _db.Kunder.FindAsync(id);
                _db.Kunder.Remove(enDBKunde);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }*/

       /* public async Task<bool> slettAlle(int id)
        {
            foreach (var entity in dbContext.MyEntities)
                dbContext.MyEntities.Remove(entity);
            dbContext.SaveChanges();
        }*/

        public async Task<Kunde> HentEn(int id)
        {
            var k = await _db.Kunder.FindAsync(id);
            if (k == null) return null;
            var hentetKunde = new Kunde()
            {
                Id = k.Id,
                Fornavn = k.Fornavn,
                Etternavn = k.Etternavn,
                Adresse = k.Adresse,
                Postnr = k.Poststed.Postnr,
                Poststed = k.Poststed.Poststed,
                Hjemreise = k.Hjemreise,
                Utreise = k.Utreise,
                fra = k.fra,
                til = k.til,
                vei = k.vei,
                Epost = k.Epost,
                Telefonnr = k.Telefonnr
            };
            return hentetKunde;
        }

        public Task<bool> Endre(Kunde endreKunde)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Slett(int id)
        {
            throw new NotImplementedException();
        }
    }
}
