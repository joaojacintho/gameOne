let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },

    resetPlayer: function (classType) {
        switch (classType) {
            case "Hunter":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;

            case "Knight":
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;

            case "Mage":
                player = new Player(classType, 80, 0, 50, 200, 50);
                break;

            case "Viking":
                player = new Player(classType, 200, 0, 50, 200, 100);
                break;

        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="../assets/img/Character/' + classType.toLowerCase() + '.png" class="img-avatar"><div class="class-Status"><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
    },

    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<div class="box-actions"><a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy</a></div>';
        getArena.style.visibility = "visible";
    },

    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        //Criando o Inimigo
        let enemy00 = new Enemy("Dragon", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Dragon2", 300, 0, 150, 100, 100);
        let enemy02 = new Enemy("Werewolf", 200, 0, 110, 80, 280);

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));

        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;

            case 1:
                enemy = enemy01;
                break;

            case 2:
                enemy = enemy02;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>';
        getActions.innerHTML = '<div class="box-actions"><a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a></div>';

        getEnemy.innerHTML = '<div class="class-Status"><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health:' + enemy.health + '</p><p>Mana:' + enemy.mana + '</p><p>strength:' + enemy.strength + '</p><p>Agility:' + enemy.agility + '</p><p>Speed:' + enemy.speed + '</p><img src="../assets/img/Character/Enemy/' + enemy.enemyType.toLowerCase() + '.png" class="img-avatar"></div>';

    }
}