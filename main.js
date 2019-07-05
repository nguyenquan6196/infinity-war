new Vue({
    el: '#app',
    data: {
        gameRunning: false,
        gameTitle: 'Infinity War',
        player: [
            {
                name: 'Iron Man',
                avatarUrl: './images/ironman.png',
                heal: 100
            }
        ],
        enemy: [
            {
                name: 'Thanos',
                avatarUrl: './images/thanos.png',
                heal: 100
            }
        ]
    },
    methods: {
        attack: function () {
            this.player.heal--;
        }
    }
});