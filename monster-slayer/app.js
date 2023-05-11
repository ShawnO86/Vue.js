function calcDmg(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
    data() {
        return {
            userHP: 100,
            monsterHP: 100,
            round: 0,
            winner: null,
            logMessages: []
        }
    },
    computed: {
        monsterHpBar() {
            if (this.monsterHP < 0) {
                return { width: '0%' }
            } else {
                return { width: this.monsterHP + '%' }
            }

        },
        userHpBar() {
            if (this.userHP < 0) {
                return { width: '0%' }
            } else {
                return { width: this.userHP + '%' }
            }

        },
        specialAttackAvailable() {
            return this.round % 3 !== 0;
        }
    },
    watch: {
        userHP(value) {
            if (value <= 0 && this.monsterHP <= 0) {
                // draw
                this.winner = 'Draw';
            } else if (value <= 0) {
                //player lose
                this.winner = 'Monster';
            }
        },
        monsterHP(value) {
            if (value <= 0 && this.userHP <= 0) {
                // draw
                this.winner = 'Draw';
            } else if (value <= 0) {
                //monster lose
                this.winner = 'Player';
            }
        }
    },
    methods: {
        attack() {
            const dmg = calcDmg(2, 10);
            this.monsterHP -= dmg;
            this.monsterCounter();
            this.logMessagesOut('Player', 'Attack', dmg)
        },
        monsterCounter() {
            const dmg = calcDmg(5, 15);
            this.userHP -= dmg;
            this.round++;
            this.logMessagesOut('Monster', 'Counter Attack', dmg)
        },
        specialAttack() {
            const dmg = calcDmg(10, 20);
            this.monsterHP -= dmg;
            this.monsterCounter();
            this.logMessagesOut('Player', 'Special Attack', dmg)
        },
        heal() {
            const dmg = calcDmg(10, 20);
            if (this.userHP + dmg > 100) {
                this.userHP = 100;
            } else {
                this.userHP += dmg;
            }
            this.monsterCounter();
            this.logMessagesOut('Player', 'Heal', dmg)
        },
        reset() {
            this.userHP = 100;
            this.monsterHP = 100;
            this.round = 0;
            this.winner = null;
            this.logMessages = [];
        },
        surrender() {
            this.winner = 'Monster'
        },
        logMessagesOut(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
});
app.mount('#game');