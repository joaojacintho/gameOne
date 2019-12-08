let player;

// Criando os atributos dos player que serão passados pela função
function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

// Criando os movimentos do player
let PlayerMoves = {

    calcAttack: function () {
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        let getStatus = document.querySelector('.stats');

        //Player Attacks
        let playerAttack = function () {
            let calcBaseDamage;

            // Verificando a quantidade de mana do Player
            if (player.mana > 0) {
                // Fazendo o calculo de quanto dano o Player vai dar
                // Baseando se no Strenght e na mana do Player
                calcBaseDamage = player.strength * player.mana / 1000;
            } else {
                // Caso a mana sejá menor que zero o calculo será baseado
                // no Strenght e no Agility do Player
                calcBaseDamage = player.strength * player.agility / 1000;
            }


            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutPutDamage = calcBaseDamage + offsetDamage;

            // Numero de HITS que o Player pode dar
            // Calculo para saber a quantidade de hit que o Player pode dar
            // Baseado na Agility do Player
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;

            // Passando os valores para um Array
            let attackValues = [calcOutPutDamage, numberOfHits];
            return attackValues;
        }

        //Enemy Attacks
        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.mana > 0) {
                calcBaseDamage = enemy.strength * enemy.mana / 1000;
            } else {
                calcBaseDamage = enemy.strength * enemy.agility / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutPutDamage = calcBaseDamage + offsetDamage;

            //Numero de HITS
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;

            let attackValues = [calcOutPutDamage, numberOfHits];
            return attackValues;
        }

        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        // Decidindo quem vai atacar primeiro,
        // Se a velocidade do Player for maior que a do Enemy
        // Player deve começar atacando
        if (getPlayerSpeed >= getEnemySpeed) {

            // Pegando os valores de dano do Player
            let playerAttackValues = playerAttack();

            // Vendo o total de dano que aquele Player pode dar
            // Pegando a posição 0 que foi passado * a quantidade de HITS
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            
            // Tirando a vida de acordo com o dano sofrido
            enemy.health = enemy.health - totalDamage;


            getStatus.innerHTML = `You hit ${playerAttackValues[0]} damage ${playerAttackValues[1]} times.`

            // Caso a vidade o Enemy for menor que zero o Player vence a partida
            if (enemy.health <= 0) {

                getStatus.innerHTML += "<br>You win! Refresh browser to play again."

                getPlayerHealth.innerHTML = 'Health:' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
                let getButton = document.querySelector('.btn-prefight').style.display = "none";
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                let enemyAttackValues = enemyAttack();

                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];

                player.health = player.health - totalDamage;

                getStatus.innerHTML = `Enemy hit ${enemyAttackValues[0]} damage ${enemyAttackValues[1]} times.`

                if (player.health <= 0) {
                    getStatus.innerHTML += "<br>You loose! Refresh browser to play again. ";
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                    let getButton = document.querySelector('.btn-prefight').style.display = "none";

                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        } else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;


            getStatus.innerHTML = `Enemy hit ${enemyAttackValues[0]} damage ${enemyAttackValues[1]} times.`

            if (player.health <= 0) {

                getStatus.innerHTML += "<br>You loose! Refresh browser to play again."

                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
                let getButton = document.querySelector('.btn-prefight').style.display = "none";
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                let playerAttackValues = playerAttack();

                let totalDamage = playerAttackValues[0] * playerAttackValues[1];

                enemy.health = enemy.health - totalDamage;

                getStatus.innerHTML = `You hit ${playerAttackValues[0]} damage ${playerAttackValues[1]} times.`

                if (enemy.health <= 0) {
                    getStatus.innerHTML += "<br>You win! Refresh browser to play again. ";
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    getEnemyHealth.innerHTML = 'Health: 0';

                    let getButton = document.querySelector('.btn-prefight').style.display = "none";

                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
            }
        }
    }

}