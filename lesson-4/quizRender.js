let result = {
    getResult() {
        let count = 0;
        let answer1 = question.one();
        console.clear()
        if (answer1 == "stop") {
            return
        }
        if (answer1 == true) {
            count += 1;
        }

        let answer2 = question.two();
        console.clear()
        if (answer2 == "stop") {
            return
        }
        if (answer2 == true) {
            count += 1;
        }

        let answer3 = question.three();
        console.clear()
        if (answer3 == "stop") {
            return
        }
        if (answer3 == true) {
            count += 1;
        }

        let answer4 = question.four();
        console.clear()
        if (answer4 == "stop") {
            return
        }
        if (answer4 == true) {
            count += 1;
        }

        let answer5 = question.five();
        console.clear()
        if (answer5 == "stop") {
            return
        }
        if (answer5 == true) {
            count += 1;
        }

        console.log("Правильных ответов " + count);

    }
}