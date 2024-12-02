class Hotel {
   constructor(id, nome, categoria, endereco, telefone) {
      this.id = id;
      this.nome = nome;
      this.categoria = categoria;
      this.endereco = endereco;
      this.telefone = telefone;
   }
}

class Reserva {
   constructor(id, idDoHotel, nomeResponsavel, diaEntrada, diaSaida) {
      this.id = id;
      this.idDoHotel = idDoHotel;
      this.nomeResponsavel = nomeResponsavel;
      this.diaEntrada = diaEntrada;
      this.diaSaida = diaSaida;
   }
}

let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

function cadastrarHotel() {
   let nome = prompt("Qual o nome do hotel?");
   let categoria = prompt("Qual a categoria do hotel?");
   let endereco = prompt("Qual o endereço do hotel?");
   let telefone = prompt("Qual o telefone do hotel?");
   let hotel = new Hotel(idHotel++, nome, categoria, endereco, telefone);
   hoteis.push(hotel);
   console.log("Hotel cadastrado com sucesso!");
}

function cadastrarReserva() {
   let idDoHotel = parseInt(prompt("Digite o ID do hotel:"));
   let hotelEncontrado = hoteis.find(hotel => hotel.id === idDoHotel);

   if (!hotelEncontrado) {
      console.log("Hotel não encontrado!");
      return;
   }

   let nomeResponsavel = prompt("Qual o nome do responsável pela reserva?");
   let diaEntrada = parseInt(prompt("Qual o dia de entrada? (Formato: número)"));
   let diaSaida = parseInt(prompt("Qual o dia de saída? (Formato: número)"));

   if (diaSaida <= diaEntrada) {
      console.log("Erro: O dia de saída deve ser maior que o dia de entrada!");
      return;
   }

   let reserva = new Reserva(idReserva++, idDoHotel, nomeResponsavel, diaEntrada, diaSaida);
   reservas.push(reserva);
   console.log("Reserva cadastrada com sucesso!");
}

function procurarReservasPorHotel(idDoHotel) {
   let reservasDoHotel = reservas.filter(reserva => reserva.idDoHotel === idDoHotel);
   if (reservasDoHotel.length === 0) {
      console.log("Nenhuma reserva encontrada para este hotel.");
      return;
   }

   console.log(`Reservas para o hotel ${hoteis.find(hotel => hotel.id === idDoHotel).nome}:`);
   reservasDoHotel.forEach(reserva => {
      console.log(`- Reserva ID: ${reserva.id}, Responsável: ${reserva.nomeResponsavel}, Entrada: ${reserva.diaEntrada}, Saída: ${reserva.diaSaida}`);
   });
}

function procurarHotelPorReserva(idReserva) {
   let reservaEncontrada = reservas.find(reserva => reserva.id === idReserva);

   if (!reservaEncontrada) {
      console.log("Reserva não encontrada!");
      return;
   }

   let hotel = hoteis.find(hotel => hotel.id === reservaEncontrada.idDoHotel);
   console.log(`Hotel: ${hotel.nome}`);
   console.log(`Endereço: ${hotel.endereco}`);
   console.log(`Entrada: ${reservaEncontrada.diaEntrada}`);
   console.log(`Saída: ${reservaEncontrada.diaSaida}`);
}

function procurarReservasPorResponsavel(nomeResponsavel) {
   let reservasDoResponsavel = reservas.filter(reserva => reserva.nomeResponsavel === nomeResponsavel);
   if (reservasDoResponsavel.length === 0) {
      console.log("Nenhuma reserva encontrada para este responsável.");
      return;
   }

   reservasDoResponsavel.forEach(reserva => {
      let hotel = hoteis.find(hotel => hotel.id === reserva.idDoHotel);
      console.log(`- Reserva ID: ${reserva.id}, Hotel: ${hotel.nome}, Entrada: ${reserva.diaEntrada}, Saída: ${reserva.diaSaida}`);
   });
}

function procurarHoteisPorCategoria(categoria) {
   let hoteisDaCategoria = hoteis.filter(hotel => hotel.categoria === categoria);
   if (hoteisDaCategoria.length === 0) {
      console.log("Nenhum hotel encontrado nesta categoria.");
      return;
   }

   console.log("Hotéis encontrados:");
   hoteisDaCategoria.forEach(hotel => {
      console.log(`- ${hotel.nome} (ID: ${hotel.id})`);
   });
}

function atualizarTelefone(idHotel, novoTelefone) {
   let hotel = hoteis.find(hotel => hotel.id === idHotel);
   if (!hotel) {
      console.log("Hotel não encontrado!");
      return;
   }

   hotel.telefone = novoTelefone;
   console.log("Telefone atualizado com sucesso!");
}

// Menu principal
function menu() {
   let continuar = true;
   while (continuar) {
      let opcao = prompt(`Escolha uma opção:
      1. Cadastrar Hotel
      2. Cadastrar Reserva
      3. Procurar Reservas por Hotel
      4. Procurar Hotel por Reserva
      5. Procurar Reservas por Responsável
      6. Procurar Hotéis por Categoria
      7. Atualizar Telefone de Hotel
      8. Sair`);

      switch (opcao) {
         case "1":
            cadastrarHotel();
            break;
         case "2":
            cadastrarReserva();
            break;
         case "3":
            let idHotel = parseInt(prompt("Digite o ID do hotel:"));
            procurarReservasPorHotel(idHotel);
            break;
         case "4":
            let idReserva = parseInt(prompt("Digite o ID da reserva:"));
            procurarHotelPorReserva(idReserva);
            break;
         case "5":
            let nome = prompt("Digite o nome do responsável:");
            procurarReservasPorResponsavel(nome);
            break;
         case "6":
            let categoria = prompt("Digite a categoria:");
            procurarHoteisPorCategoria(categoria);
            break;
         case "7":
            let idAtualizar = parseInt(prompt("Digite o ID do hotel:"));
            let novoTelefone = prompt("Digite o novo telefone:");
            atualizarTelefone(idAtualizar, novoTelefone);
            break;
         case "8":
            continuar = false;
            console.log("Saindo...");
            break;
         default:
            console.log("Opção inválida!");
      }
   }
}

menu();
