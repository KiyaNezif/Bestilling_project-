﻿using System;
namespace KundeApp2.Model
{
     public class Kunde
     {
        public int Id { get; set; }  // med Id som variabel blir dette en autoincrement i databasen (pr. default).
        public string Fornavn { get; set; }
        public string Etternavn { get; set; }
        public string Adresse { get; set; }
        public string Postnr { get; set; }
        public string Poststed { get; set; }
        public string Telefonnr { get; set; }

        public string Epost { get; set; }

        public string Utreise { get; set; }
        public string Hjemreise { get; set; }

    

       
     }
}
