class Player {
  constructor() {
    this.name = null; //esse nome é vazio (null) inicialmente
    this.index = null; //esse indice (a quantia de jogadores registrada
    this.positionX = 0; //a posiçãp x do jogador é zerada inicialmente
    this.positionY = 0; //a posição y do jogador é zerada inicialmente
  }

   addPlayer() { //adiciona o jogador
    var playerIndex = "players/player" + this.index; //cria o indice/posição a partir das informações que temos
      if (this.index === 1) { //se for o primeiro jogador a posição x será metade da largura subtraindo 100
      this.positionX = width / 2 - 100;
    } else { //se for o segundo jogador a posição x será metade no formulário e na função anterior
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      //no banco de dados irá trocar as informações conforme adicionadas no formulario e na funçao anterior
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }
 
  getDistance() { //serve para obter/pegar a distância do bancp de dados e repassar aos jogadores
   
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }
 
  //Bp
  getCount() { //serve para obter/pegar a contagem total de jogadores registrados no banco de dados 
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  //Bp
  updateCount(count) { //atualiza a contagem
    database.ref("/").update({
      playerCount: count
    });
  }}
  update() { //atualiza as informações  no banco de dados sobre o jogador AULA 39
   var playerIndex = "players /player" = this.index;
    database.ref(playerInder).update({
      name: this.name, 
      positionX: this.posittionX,
      positionY: this.positionY,
    });
  }
//As funções estáticas nao sao anexadas a nenhum objeto da classe. Estamos tentando obter todas as informações dos jogadores
//- e isso envolve nenhum objeto em particular. AULA C39
 static getPlayersInfo() {
   var playerInfoRef = database.ref(players");
  playerInfoRef.on("value", data => {
        allPlayers = data.val();
    });
}
}
      
