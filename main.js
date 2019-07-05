new Vue({
    el: '#app',
    data: {
        gameRunning: false,
        gameTitle: 'Infinity War',
        characters: [
            {
                name: 'Iron Man',
                avatarUrl: './images/ironman.png',
                role: 'player',
                heal: 100
            },
            {
                name: 'Thanos',
                avatarUrl: './images/thanos.png',
                role: 'enemy',
                heal: 100
            }
        ]
    },
    method: {
        
    }
});