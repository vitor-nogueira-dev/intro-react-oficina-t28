const STATES_OF_BRASIL = [
  {
    nome: "Acre",
    bandeira:
      "https://s2.static.brasilescola.uol.com.br/img/2019/08/bandeira-acre.jpg",
    curiosidade:
      "Estado com maior crescimento acumulado do PIB, segundo o IBGE",
    sigla: "AC",
    capital: "Rio Branco",
    populacao: "906.876",
    economia: ["extração da castanha, agricultura e pecuária"],
    region: "N",
  },
  {
    nome: "Amapá",
    bandeira:
      "https://static.todamateria.com.br/upload/am/ap/amapa-cke.jpg?auto_optimize=low",
    curiosidade: "",
    sigla: "AP",
    capital: "Macapá",
    populacao: "877.713",
    economia:
      "extrativismo vegetal (castanha-do-pará, mandioca e arroz), criação de bovinos e comércio",
    region: "N",
  },
  {
    nome: "Amazonas",
    bandeira:
      "https://static.todamateria.com.br/upload/am/az/amazonas-cke.jpg?auto_optimize=low",
    curiosidade:
      "O estado do Amazonas é coberto em sua totalidade pela maior floresta tropical do mundo, a Floresta Amazônica, e também abrange a maior bacia hidrográfica do mundo, a Bacia Amazônica.",
    sigla: "AM",
    capital: "Manaus",
    populacao: "4.269.995",
    economia: "agricultura, pecuária, extrativismo vegetal",
    region: "N",
  },
  {
    nome: "Pará",
    bandeira:
      "https://static.todamateria.com.br/upload/ba/nd/bandeiradopara-cke.jpg?auto_optimize=low",
    curiosidade: "Segundo maior estado em extensão territorial do Brasil",
    sigla: "PA",
    capital: "Bélem",
    populacao: " 8.777.124",
    economia:
      "agricultura, pecuária, extrativismo mineral e vegetal, indústria e turismo",
    region: "N",
  },
  {
    nome: "Rondônia",
    bandeira:
      "https://static.todamateria.com.br/upload/ro/nd/rondonia-cke.jpg?auto_optimize=low",
    curiosidade:
      "Rondônia é o único estado brasileiro que possui seu nome em homenagem a uma figura histórica nacional, nesse caso: o Marechal Rondon.",
    sigla: "RO",
    capital: "Porto Velho",
    populacao: "1.815.278",
    economia: "pecuária de corte, agricultura, extrativismo mineral e vegetal",
    region: "N",
  },
  {
    nome: "Roraima",
    bandeira:
      "https://static.todamateria.com.br/upload/ro/ra/roraima-cke.jpg?auto_optimize=low",
    curiosidade:
      "Estado menos populoso do país, segundo o IBGE, e apresenta o menor PIB entre os estados.",
    sigla: "RR",
    capital: "Boa Vista",
    populacao: "652.713",
    economia: "agricultura (produção de arroz), extrativismo mineral",
    region: "N",
  },
  {
    nome: "Tocantins",
    bandeira:
      "https://static.todamateria.com.br/upload/to/ca/tocantins-cke.jpg?auto_optimize=low",
    curiosidade:
      "O estado abriga várias unidades de conservação, como o Parque Estadual do Jalapão e o Parque Estadual do Cantão.",
    sigla: "TO",
    capital: "Palmas",
    populacao: "1.607.363",
    economia: "agricultura, pecuária e comércio",
    region: "N",
  },
  {
    nome: "Maranhão",
    bandeira:
      "https://static.todamateria.com.br/upload/ma/ra/maranhao-cke.jpg?auto_optimize=low",
    curiosidade:
      "Segundo estado com maior litoral do Brasil e possui um grande destino turístico, o Parque Nacional dos Lençóis Maranhenses",
    sigla: "MA",
    capital: "São Luiz",
    populacao: "7.153.262",
    economia:
      "agricultura, pecuária, indústria, extrativismo vegetal e serviços",
    region: "NE",
  },
  {
    nome: "Piauí",
    bandeira:
      "https://s4.static.brasilescola.uol.com.br/img/2019/08/bandeira-piaui.jpg",
    curiosidade:
      "Segundo o IBGE, o Piauí é o estado com o menor número de protestantes e maior proporção de católicos do Brasil.",
    sigla: "PI",
    capital: "Teresina",
    populacao: "3.289.290",
    economia: "agricultura, pecuária, serviços e indústria",
    region: "NE",
  },
  {
    nome: "Ceará",
    bandeira:
      "https://static.todamateria.com.br/upload/ce/ar/ceara-cke.jpg?auto_optimize=low",
    curiosidade:
      "o estado é conhecido por ser o berço dos maiores humoristas do Brasil, como Renato Aragão, Tom Cavalcante e Chico Anysio, e também é a terra de diversos escritores, como Rachel de Queiroz, José de Alencar e Juvenal Galeno.",
    sigla: "CE",
    capital: "Fortaleza",
    populacao: "9.240.580",
    economia: "agropecuária, comércio, serviços, extrativismo mineral, turismo",
    region: "NE",
  },
  {
    nome: "Rio Grande do Norte",
    bandeira:
      "https://static.todamateria.com.br/upload/ri/og/riograndedonorte-cke.jpg?auto_optimize=low",
    curiosidade:
      "Segundo o Ministério do Trabalho e Emprego, o estado do Rio Grande do Norte é campeão em investimentos estrangeiros, devido a sua localização geográfica.",
    sigla: "RN",
    capital: "Natal",
    populacao: "3.560.903",
    economia:
      "turismo, agropecuária, fruticultura, extração de sal, indústria e comércio",
    region: "NE",
  },
  {
    nome: "Paraíba",
    bandeira:
      "https://static.todamateria.com.br/upload/pa/ra/paraiba-cke.jpg?auto_optimize=low",
    curiosidade:
      "No ano de 2013, a Paraíba foi eleita como melhor destino nacional.",
    sigla: "PB",
    capital: "João Pessoa",
    populacao: "4.059.905",
    economia:
      "agropecuária, indústria (tecidos, calçados, alimentos, bebidas), comércio, turismo",
    region: "NE",
  },
  {
    nome: "Pernambuco",
    bandeira:
      "https://static.todamateria.com.br/upload/pe/rn/pernambuco-cke.jpg?auto_optimize=low",
    curiosidade:
      "Pernambuco é o estado de diversas manifestações culturais, como o frevo e o maracatu.",
    sigla: "PE",
    capital: "Recife",
    populacao: "9.674.793",
    economia:
      "agricultura, pecuária, turismo, indústria (alimentícia, metalúrgica, naval, automobilística, eletroeletrônica, química, têxtil)",
    region: "NE",
  },
  {
    nome: "Alagoas",
    bandeira:
      "https://static.todamateria.com.br/upload/al/ag/alagoas-cke.jpg?auto_optimize=low",
    curiosidade:
      "Alagoas é considerado a segunda rota de turismo no Nordeste, ficando atrás apenas do estado da Bahia.",
    sigla: "AL",
    capital: "Maceió",
    populacao: "3.365.351",
    economia: "agropecuária, produzindo cana-de-açúcar e coco-da-baía.",
    region: "NE",
  },
  {
    nome: "Sergipe",
    bandeira:
      "https://static.todamateria.com.br/upload/se/rg/sergipe-cke.jpg?auto_optimize=low",
    curiosidade: "",
    sigla: "SE",
    capital: "Aracaju",
    populacao: "2.338.474",
    economia:
      "agricultura (cana-de-açúcar, laranja e coco) e extrativismo mineral.",
    region: "NE",
  },
  {
    nome: "Bahia",
    bandeira:
      "https://static.todamateria.com.br/upload/ba/hi/bahia-cke.jpg?auto_optimize=low",
    curiosidade: "",
    sigla: "BA",
    capital: "Salvador",
    populacao: "14.812.617",
    economia:
      "indústria (petroquímica, química, automobilística), agropecuária, mineração e turismo.",
    region: "NE",
  },
  {
    nome: "Góias",
    bandeira:
      "https://static.todamateria.com.br/upload/ba/nd/bandeiradegoias-cke.jpg?auto_optimize=low",
    curiosidade:
      "Goiás destaca-se no ramo musical, sendo berço de inúmeros cantores sertanejos, como Zezé Di Camargo e Luciano, Leandro e Leonardo, Bruno e Marrone, Cristiano Araújo, entre outros",
    sigla: "GO",
    capital: "Goiânia",
    populacao: "7.206.589",
    economia:
      "agropecuária, comércio, indústria (metalúrgica, mineração, alimentos, confecções) e turismo",
    region: "CO",
  },
  {
    nome: "Mato Grosso",
    bandeira:
      "https://static.todamateria.com.br/upload/ba/nd/bandeiradomatogrosso-cke.jpg?auto_optimize=low",
    curiosidade:
      "um dos principais atrativos do estado é o ecoturismo em locais como o Pantanal e a Chapada dos Guimarães.",
    sigla: "MT",
    capital: "Cuiabá",
    populacao: "3.567.234",
    economia:
      "agropecuária, agronegócio, extrativismo mineral, vegetal e turismo",
    region: "CO",
  },
  {
    nome: "Mato Grosso do Sul",
    bandeira:
      "https://static.todamateria.com.br/upload/ma/to/matogrossodosul-cke.jpg?auto_optimize=low",
    curiosidade:
      "considerado o estado mais receptivo do Brasil, segundo o Ministério do Turismo.",
    sigla: "MS",
    capital: "Campo Grande",
    populacao: "2.839.188",
    economia:
      "agricultura, pecuária, extrativismo mineral, vegetal, indústria e turismo",
    region: "CO",
  },
  {
    nome: "Distrito Federal",
    bandeira:
      "https://static.todamateria.com.br/upload/do/st/dostritofederal-cke.jpg?auto_optimize=low",
    curiosidade:
      "o Distrito Federal é a unidade federativa diferente das demais, pois não é um estado, tampouco um município, e sim uma região autônoma",
    sigla: "DF",
    capital: "Brasília",
    populacao: "3.094.325",
    economia:
      "agricultura, pecuária, comércio, serviços e indústria (extrativista, transformação, transporte, pesqueira e alimentícia)",
    region: "CO",
  },
  {
    nome: "Espírito Santo",
    bandeira:
      "https://static.todamateria.com.br/upload/es/pi/espiritosanto-cke.jpg?auto_optimize=low",
    curiosidade: "O estado possui 73 ilhas localizadas em sua costa",
    sigla: "ES",
    capital: "Vitória",
    populacao: "4.108.508",
    economia:
      "mineração (ferro) e agricultura (café, cacau, cana-de-açúcar, feijão, frutas), indústria (siderurgia, têxtil, madeira, celulose) e turismo.",
    region: "SE",
  },
  {
    nome: "Minas Gerais",
    bandeira:
      "https://static.todamateria.com.br/upload/mi/na/minasgerais-cke.jpg?auto_optimize=low",
    curiosidade:
      "Minas Gerais é o estado com o maior número de municípios do Brasil.",
    sigla: "MG",
    capital: "Belo Horizonte",
    populacao: "21.411.923",
    economia:
      "agropecuária, indústria (metalurgia, siderurgia, minerais metálicos, alimentos e automotiva), serviços e turismo",
    region: "SE",
  },
  {
    nome: "Rio de Janeiro",
    bandeira:
      "https://static.todamateria.com.br/upload/ri/od/riodejaneiro-cke.jpg?auto_optimize=low",
    curiosidade:
      "Há cerca de 365 ilhas na costa do estado, no município de Angra dos Reis.",
    sigla: "RJ",
    capital: "Rio de Janeiro",
    populacao: "17.463.349",
    economia:
      "indústria (alimentícia, petroquímica, siderúrgica, metalúrgica, farmacêutica, naval, automobilística, mecânica, audiovisual, têxtil), extração mineral, comércio, serviços e turismo",
    region: "SE",
  },
  {
    nome: "São Paulo",
    bandeira:
      "https://static.todamateria.com.br/upload/ba/nd/bandeiradoestadodesaopaulosvg-cke.jpg?auto_optimize=low",
    curiosidade:
      "São Paulo é o estado com o maior Produto Interno Bruto do país.",
    sigla: "SP",
    capital: "São Paulo",
    populacao: "46.649.132",
    economia:
      "agricultura, pecuária, indústrias (mecânica, têxtil, açúcar, álcool, automobilística, aviação), serviços e turismo",
    region: "SE",
  },
  {
    nome: "Paraná",
    bandeira:
      "https://static.todamateria.com.br/upload/pa/ra/parana-cke.jpg?auto_optimize=low",
    curiosidade:
      "Curitiba é conhecida por suas muitas áreas verdes. Há cerca de 50m2 de área verde para cada habitante.",
    sigla: "PR",
    capital: "Curitiba",
    populacao: " 11.597.484",
    economia:
      "agricultura (cana-de-açúcar, milho, soja, trigo), indústria (agroindústria, automobilística) e extrativismo vegetal.",
    region: "S",
  },
  {
    nome: "Santa Catarina",
    bandeira:
      "https://static.todamateria.com.br/upload/sa/nt/santacatarina-cke.jpg?auto_optimize=low",
    curiosidade:
      "Os índices sociais do estado estão entre os mais altos do Brasil e também da América do Sul.",
    sigla: "SC",
    capital: "Florianópolis",
    populacao: "7.338.473",
    economia:
      "agricultura, pecuária, pesca, extrativismo mineral, indústria (agroindústria, têxtil, alimentos, cerâmica, automóveis, eletrodomésticos) e turismo",
    region: "S",
  },
  {
    nome: "Rio Grande do Sul",
    bandeira:
      "https://static.todamateria.com.br/upload/ri/og/riograndedosul-cke.jpg?auto_optimize=low",
    curiosidade:
      "A população do Rio Grande do Sul representa uma mistura de povos. Sua formação representa as descendências italiana, alemã, portuguesa, africana, libanesa, francesa, polonesa espanhola e indígena.",
    sigla: "RS",
    capital: "Porto Alegre",
    populacao: "11.466.630",
    economia:
      "agricultura, pecuária, indústria (química, metalúrgica, automóveis, naval, têxtil, alimentos, couro, tabaco, calçados, madeira) e turismo",
    region: "S",
  },
];

export default STATES_OF_BRASIL;
