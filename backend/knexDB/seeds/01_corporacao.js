
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Corporacao').del()
    .then(function () {
      // Inserts seed entries
      return knex('Corporacao').insert([{"id_corporacao":1,"nome_corporacao":"Mertz, Bogan and Crist","sede_corporacao":"China","nfuncionarios_corporacao":12559,"ativos_corporacao":"$769491634.53"},
      {"id_corporacao":2,"nome_corporacao":"Roberts, Beier and Bayer","sede_corporacao":"United States","nfuncionarios_corporacao":13080,"ativos_corporacao":"$535584757.10"},
      {"id_corporacao":3,"nome_corporacao":"Rempel, Wiegand and Cronin","sede_corporacao":"China","nfuncionarios_corporacao":3352,"ativos_corporacao":"$601326685.91"},
      {"id_corporacao":4,"nome_corporacao":"Hayes Group","sede_corporacao":"Latvia","nfuncionarios_corporacao":8119,"ativos_corporacao":"$573856232.41"},
      {"id_corporacao":5,"nome_corporacao":"Connelly, Rohan and Waelchi","sede_corporacao":"China","nfuncionarios_corporacao":10338,"ativos_corporacao":"$269730765.57"},
      {"id_corporacao":6,"nome_corporacao":"Ortiz and Sons","sede_corporacao":"United Kingdom","nfuncionarios_corporacao":13875,"ativos_corporacao":"$290267484.43"},
      {"id_corporacao":7,"nome_corporacao":"Fahey-Schmidt","sede_corporacao":"Mexico","nfuncionarios_corporacao":1074,"ativos_corporacao":"$819137265.87"},
      {"id_corporacao":8,"nome_corporacao":"Shields, Goyette and Moore","sede_corporacao":"Philippines","nfuncionarios_corporacao":14505,"ativos_corporacao":"$954710732.13"},
      {"id_corporacao":9,"nome_corporacao":"Mann-Collier","sede_corporacao":"China","nfuncionarios_corporacao":4325,"ativos_corporacao":"$738837528.86"},
      {"id_corporacao":10,"nome_corporacao":"Johnston, Reinger and Murazik","sede_corporacao":"Ukraine","nfuncionarios_corporacao":7660,"ativos_corporacao":"$71452379.86"},
      {"id_corporacao":11,"nome_corporacao":"Beahan, Luettgen and Ernser","sede_corporacao":"Senegal","nfuncionarios_corporacao":7140,"ativos_corporacao":"$623857532.91"},
      {"id_corporacao":12,"nome_corporacao":"Jerde, Hammes and Wiegand","sede_corporacao":"China","nfuncionarios_corporacao":5283,"ativos_corporacao":"$364593812.17"},
      {"id_corporacao":13,"nome_corporacao":"Kuphal-Hills","sede_corporacao":"Brazil","nfuncionarios_corporacao":4805,"ativos_corporacao":"$696577667.89"},
      {"id_corporacao":14,"nome_corporacao":"Medhurst-Bergnaum","sede_corporacao":"Indonesia","nfuncionarios_corporacao":6165,"ativos_corporacao":"$442882295.77"},
      {"id_corporacao":15,"nome_corporacao":"Vandervort Group","sede_corporacao":"Slovenia","nfuncionarios_corporacao":2430,"ativos_corporacao":"$453652321.45"},
      {"id_corporacao":16,"nome_corporacao":"Schmidt Group","sede_corporacao":"Mongolia","nfuncionarios_corporacao":14814,"ativos_corporacao":"$563801987.27"},
      {"id_corporacao":17,"nome_corporacao":"Rutherford LLC","sede_corporacao":"China","nfuncionarios_corporacao":8685,"ativos_corporacao":"$563240283.16"},
      {"id_corporacao":18,"nome_corporacao":"Tillman-Gottlieb","sede_corporacao":"Sweden","nfuncionarios_corporacao":3548,"ativos_corporacao":"$456110183.78"},
      {"id_corporacao":19,"nome_corporacao":"Powlowski-Wunsch","sede_corporacao":"Philippines","nfuncionarios_corporacao":8548,"ativos_corporacao":"$41271800.32"},
      {"id_corporacao":20,"nome_corporacao":"Schuppe LLC","sede_corporacao":"Ireland","nfuncionarios_corporacao":12110,"ativos_corporacao":"$54089259.61"}]);
    });
};
