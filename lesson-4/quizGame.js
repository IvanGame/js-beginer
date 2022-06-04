let game = {

    run() {


        while (true) {
            result.getResult();
            let playAgain = prompt('Сыграть ещё раз? y/n')
            if (playAgain == "y") {
                continue
            } else {
                console.log("Игра окончена.");
                return;
            }
        }
    },

    init() {
        console.log('Добро пожаловать на шоу "Кто хочет стать миллионерм?"');
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();