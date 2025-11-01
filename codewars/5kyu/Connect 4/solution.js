// Перед решением этой каты я бы обновил информацию о том, как работать с классами
// Наверное сделаю шаблон поля матрицей и буду подставлять:
// 0 - пусто
// 1 - первый игрок
// 2 - второй игрок

// Думаю сама игра играется так:
// 1. поместили фишку на поле (или вывели текст если поле заполнено. Если заполнено, то не переворачивая ход завершаем).
// Можно еще считать сколько ходов прошло, чтобы не проверять переполнение столбца.
// 2. проверяем, не случилась ли победа (если да, сообщаем о победе).
// 3. делаем переход хода.

// Написав метод, который проверяет все поле на победные ряды, пришел к тому, что надо проверять только то, что вокруг
// последнего хода, а не все поле =/

// Проверки заполненности линии я сделал не очень корректно. Сперва понял, что проверяю только "вперед" от поставленной
// фишки. Написал реализацию для проверки "назад". И тут понял главное. Наша фишка вполне может оказаться в середине
// выигрышного ряда. Значит нам нужно проверять иначе. Идти в каждом направлении и суммировать количество непрерывных
// фишек игрока.
// (мой код не работал если игрок заполнит ноль при таком поле 1 1 0 1)
// удалось починить и даже сделать более компактно

// метод #showField оставил, чтобы в консоли можно было видеть поле после каждого хода

// Player n wins!
// Column full!
// Game has finished!
// Player n has a turn


class Connect4 {
    constructor(rows = 6, columns = 7) {
        this.rows = rows;
        this.columns = columns;
        this.field = Array.from({ length: rows }, () => Array(columns).fill(0));
        this.isGameOver = false;
        this.isStepP1 = true;
    }

    #checkVictory(r, c) {
        const directions = [
            [1, 0],
            [0, 1],
            [1, 1],
            [1, -1],
        ]
        for (let [dr, dc] of directions) {
            if (this.#checkLine(r,c,dr,dc)) return true;
        }
        return false;
    }

    #checkLine(r, c, dr, dc) {
        const token = this.field[r][c];
        const lineDirection = [1, -1];
        let count = 1;
        for (let ld of lineDirection) {
            for (let i = 1; i < 4 && count < 4; i++) {
                let row = r + i * dr * ld
                let col = c + i * dc * ld
                if (!(this.field[row]?.[col] && this.field[row][col] === token)) break;
                count++;
            }
        }

        return (count >= 4);
    }

    #placeChip(c) {
        for (let r = this.rows-1; r >= 0; r--) {
            if (this.field[r][c] === 0) return {r, c};
        }
        return null;
    }

    #showField() {
        console.log('R\\C', Array.from({ length: this.columns }, (_, i) => `[${i}]`).join(' '));
        for (let r = 0; r < this.rows; r++) {
            console.log(`[${r}] `, this.field[r].join('   '));
        }
        return this.field;

    }

    play(column = 0) {
        let player = this.isStepP1 ? 1 : 2;
        if (this.isGameOver) return 'Game has finished!';
        let stepResult = this.#placeChip(column);
        if (!stepResult) return `Column full!`;
        this.field[stepResult.r][stepResult.c] = this.isStepP1 ? 1 : 2;

        this.#showField();

        if (this.#checkVictory(stepResult.r, stepResult.c)) {
            this.isGameOver = true;
            return `Player ${player} wins!`;
        }

        this.isStepP1 = !this.isStepP1;
        return `Player ${player} has a turn`;
    }

}


let game = new Connect4();
console.log(game.play(1));
console.log(game.play(1));
console.log(game.play(2));
console.log(game.play(2));
console.log(game.play(3));
console.log(game.play(3));
console.log(game.play(4));
console.log(game.play(4));

