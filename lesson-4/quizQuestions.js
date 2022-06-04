let question = {
    one() {
        console.log("1. Какого цвета солнце?");
        console.log("a. Жёлтого");
        console.log("b. Голубого");
        console.log("c. Белого");
        console.log("d. Красного");

        const availableAnswers = ["a", "b", "c", "d"];

        while (true) {
            let ans = prompt('Ваш ответ?');

            if (ans === null) {
                return "stop"
            }

            if (!availableAnswers.includes(ans)) {
                alert('Для ответа необходимо ввести однин из символов "a, b, c или d');
                continue;
            }



            if (ans == "c") {
                return true
            } else {
                return false
            }
        }


    },


    two() {
        console.log("2. Когда началась вторая мировая война?");
        console.log("a. Что?");
        console.log("b. 1 сентября 1939");
        console.log("c. 1941");
        console.log("d. Волынская резня была...");

        const availableAnswers = ["a", "b", "c", "d"];

        while (true) {
            let ans = prompt('Ваш ответ?');

            if (ans === null) {
                return "stop"
            }

            if (!availableAnswers.includes(ans)) {
                alert('Для ответа необходимо ввести однин из символов "a, b, c или d');
                continue;
            }

            if (ans == "b") {
                return true
            } else {
                return false
            }
        }
    },

    three() {
        console.log('3. Кому принадлежат эти слова? "Люди в мире разделяются на 2 категории: одни сидят на трубах, а другим нужны деньги"');
        console.log("a. Виктор Сухоруков к/ф Жмурки");
        console.log("b. Сергей Бодров к/ф Брат");
        console.log("c. Сергей Безруков м/ф Бригада");
        console.log("d. Виктор Цой к/ф Игла");

        const availableAnswers = ["a", "b", "c", "d"];

        while (true) {
            let ans = prompt('Ваш ответ?');

            if (ans === null) {
                return "stop"
            }

            if (!availableAnswers.includes(ans)) {
                alert('Для ответа необходимо ввести однин из символов "a, b, c или d');
                continue;
            }

            if (ans == "d") {
                return true
            } else {
                return false
            }
        }
    },

    four() {
        console.log("4. Зимой и летом одинм цветом");
        console.log("a. Ёлка");
        console.log("b. Кастрюля");
        console.log("c. Папин парик");
        console.log("d. Машина");

        const availableAnswers = ["a", "b", "c", "d"];

        while (true) {
            let ans = prompt('Ваш ответ?');

            if (ans === null) {
                return "stop"
            }

            if (!availableAnswers.includes(ans)) {
                alert('Для ответа необходимо ввести однин из символов "a, b, c или d');
                continue;
            }

            if (ans == "a") {
                return true
            } else {
                return false
            }
        }
    },

    five() {
        console.log("5. Какой продукт в разных странах называют папиной бородой и бабушкиными волосами?");
        console.log("a. Шаль");
        console.log("b. Сахарную вату");
        console.log("c. Хворост");
        console.log("d. Метла");

        const availableAnswers = ["a", "b", "c", "d"];

        while (true) {
            let ans = prompt('Ваш ответ?');

            if (ans === null) {
                return "stop"
            }

            if (!availableAnswers.includes(ans)) {
                alert('Для ответа необходимо ввести однин из символов "a, b, c или d');
                continue;
            }

            if (ans == "b") {
                return true
            } else {
                return false
            }
        }
    },

}