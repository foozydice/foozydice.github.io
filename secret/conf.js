settings = {
    outside : {
        structures : [
            { type: 'door', to: 'inside_trashnbugs', toX: -512, name: 'trashnbugs', x: 300, info: 'Welcome to Trash n\' Bugs! Hold "w" to enter!' },
            { type: 'door', to: 'outside_ice', toX: -512, name: 'portal', x: 2000, info: 'Hold "w" to use portal' },
            { type: 'structure', name: 'tree', x: -700, info: 'It\'s a tree!' },
            { type: 'structure', name: 'tree', x: 700, info: 'It\'s a tree!' },
        ],
        bgcolor: 0x1099bb,
        fcolor: 0x11CC55,
        minX: -1500,
        maxX: 2000,
    },
    inside_trashnbugs : {
        structures : [
            { type: 'door', to: 'outside', toX: -800, name: 'reddoor', x: 500, info: 'Hold "w" to exit' },
            { type: 'structure', name: 'clock', x: 0, info: '' },
            { type: 'structure', name: 'trashnbugs-menu', x: 1500, info: '' },
            { type: 'npc', name: 'conna', x: 1950, info: 'Press "t" to talk', givesItem: 'pan',
              dialog : [
                'Hello there! Today we are out of trash AND bugs, unfortunately...',
                'It seems to be those pesky penguins at it again. \nThey slip past me while I am napping and steal all our food!',
                'Please, I\'m begging you... go fight the penguins! Take back our trash! \nAnd I wouldn\'t mind if you could get some colder land for us polar bears...',
                'Travel east! And here, take this pan to beat up those penguins! It deals 10 damage!'
            ] },
        ],
        bgcolor: 0xFFFFFF,
        fcolor: 0xAAAAAA,
        minX: -500,
        maxX: 2000,
    },
    outside_ice : {
        structures : [
            { type: 'door', to: 'outside', toX: 1000, name: 'portal', x: 500, info: 'Hold "w" to use portal' },
            { type: 'enemy', numPenguins: 5, success: ['outside_ice2', 500], penguinType: 'penguin', name: 'outpost1', x: 1400, info: 'Fight these FOOLS! Hold "w"' },
            { type: 'structure', name: 'rock', x: -1000, info: '' },
        ],
        bgcolor: 0xd7f7f2,
        fcolor: 0x85f2e0,
        minX: -1500,
        maxX: 2000,
    },
    outside_ice2  : {
        structures : [
            { type: 'enemy', numPenguins: 20, penguinType: 'penguin', success: ['inside_hell', 500], name: 'outpost2', x: 1400, info: 'Fight these FOOLS! Hold "w"' },
            { type: 'structure', name: 'rock', x:  0, info: 'A very normal rock...' },
            { type: 'structure', name: 'rock', x: -1000, info: 'A very normal rock...' },
            { type: 'structure', name: 'rock', x: -2000, info: 'A very normal rock...' },
            { type: 'structure', name: 'rock', x: -3000, info: 'A very normal rock...' },
            { type: 'structure', name: 'rock', x: -4000, info: 'A very normal rock...' },
            { type: 'door', name: 'rock', x: -5000, info: 'A very peculiar rock...', to: 'inside_cave', toX: 500 },
            { type: 'structure', name: 'rock', x: -6000, info: 'A very normal rock...' },
            { type: 'structure', name: 'rock', x: -7000, info: 'A very normal rock...' },
        ],
        bgcolor: 0xd7f7f2,
        fcolor: 0x85f2e0,
        minX: -7500,
        maxX: 2000,
    },
    inside_hell  : {
        structures : [
            { type: 'enemy', numPenguins: 75, penguinType: 'firepenguin', success: ['win', -50], name: 'outpost3', x: 1400, info: 'Fight these FOOLS! Hold "w"' },
            { type: 'structure', name: 'fire', x: -1000, info: 'Hawt!!' },
            { type: 'structure', name: 'fire', x: 1000, info: 'Hawt!!' },
            { type: 'structure', name: 'fire', x: -100, info: 'Hawt!!' },
            { type: 'structure', name: 'fire', x: 2000, info: 'Hawt!!' },
            { type: 'npc', name: 'charlie', x: -600, info: 'Press "t" to talk', givesItem: 'rod',
              dialog : [
                'Oh, didn\'t expect to find YOU here Fuzzy...\nHow have you been my brother!?',
                'Glad to hear it! I have some news to share with you',
                'The penguins have captured our favorite fuzzy dice members. You gotta go save them!',
                'I\'m not much of a fighter so maybe you can do something with this fishing rod?',
                'I tried to sell it but people said that it only did 12 damage\nso it wasn\'t worth much',
            ] },
            { type: 'npc', name: 'lavalake', x: 2700, info: 'Press "t" to fish', requiresItem: 'rod', givesItem: 'lavashark',
              dialog : [
                '*plop*',
                '...',
                '*gurgle*',
                '...',
                '*wap*',
                '...',
                '*CHOMP*',
                '*reel*',
                'You caught a LAVA SHARK! Spam "r" to kill it!',
                'rRRRrrrRRRRrrrrRRRRrrr',
                'Haah did you actually spam "r" it does nothing haha i was messin with ya :)',
                'The shark snaps your rod, but in an attempt to get back into lava it\ndies on a nearby really sharp rock',
                'You pick up the shark. It deals 30 damage!',
            ] },
        ],
        bgcolor: 0xCC3333,
        fcolor: 0xAA4444,
        minX: -2000,
        maxX: 3000,
    },
    inside_cave : {
        structures : [
            { type: 'npc', name: 'coolpenguin', x: 1300, info: 'Press "t" to talk',
              dialog : [
                'hey kid...',
                'You lookin to try and beat up some of my kind... huh...',
                'Let me let you in on a little secret...',
                '"yo daddy" insults are much more effective than "yo mamma" insults',
                'Why did I tell you? You\'ll find out soon enough my friend...' 
            ] },
            { type: 'structure', name: 'rock', x:  0, info: '' },
            { type: 'structure', name: 'rock', x: -200, info: '' },
            { type: 'structure', name: 'rock', x: 1000, info: '' },
            { type: 'door', name: 'portal', x: 2000, info: 'Hold "w" to use portal', to: 'outside_ice2', toX: -6000 },
        ],
        bgcolor: 0x555555,
        fcolor: 0x222222,
        minX: -1000,
        maxX: 3000,
    },
    win : {
        structures : [
            { type: 'npc', name: 'shivani', x: -300, info: 'Press "t" to talk to Shivani',
              dialog : [
                'Hi i\'m Shivani',
                'Wow i am so glad that you saved me from those evil penguins.'
            ] },
            { type: 'structure', name: 'youwin', x: 400, info: '' },
            { type: 'npc', name: 'maxstanford', x: -1200, info: 'Press "t" to talk to Max Stanford',
              dialog : [
                'Hi.',
            ] },
            { type: 'npc', name: 'dane', x: 1600, info: 'Press "t" to talk to Dane',
              dialog : [
                'Thanks for getting rid of those penguins.',
                'We should go ride roller coasters now??',
            ] },
            { type: 'npc', name: 'maxmarcus', x: 2400, info: 'Press "t" to talk to Max Reggie Marcus',
              dialog : [
                'I thought those penguins were cool because they could swim fast,',
                'turns out they aren\'t as cool as you! Thanks for saving me!'
            ] },
            { type: 'npc', name: 'tyler', x: 3000, info: 'Press "t" to talk to Tyler Wilson',
              dialog : [
                'Sooooo how was everyone\'s day',
            ] },
            { type: 'npc', name: 'elijah', x: 3500, info: 'Press "t" to talk to EJ',
              dialog : [
                'Hi there thank you for saving me from the penguins. I am very good at hiding from them. Seeking, however... xDDD',
            ] },
            { type: 'npc', name: 'nina', x: 4500, info: 'Press "t" to talk to Nina!',
              dialog : [
                'The penguins almost got to me, luckily i had my pink helmet on.',
            ] },
            { type: 'npc', name: 'eva', x: 5000, info: 'Press "t" to talk to Eva',
              dialog : [
                'Ahhh-lalalalala-ahhh yes very nice singing thank you my life is so difficult',
            ] },
            { type: 'npc', name: 'pizza', x: 5500, info: 'Press "t" to talk to Pizza',
              dialog : [
                'Shhh the chicken needs to fall asleep.',
            ] },
            { type: 'npc', name: 'conna', x: 6000, info: 'Press "t" to talk to Connor',
              dialog : [
                'Man, what are all these people gonna eat............... ???',
                'LUNCH maybe....?',
            ] },
            { type: 'npc', name: 'coolpenguin', x: -1700, info: 'Press "t" to talk to Cool Penguin',
              dialog : [
                'hey kid...',
                'let me tell you why I told you...',
                'it\'s because...',
                'well...',
                '..',
                'yo mamma is a very nice woman and should not be insulted.',
                'also a bonus tip...',
                'if you tell JonPizza the word "Kumquat" he will try and get you a free ticket...',
                '... to the next fuzzy dice show if he can do that (probably not ??)'
            ] },
            { type: 'door', name: 'portal', x: 6500, info: 'Back to lobby', to: 'lobby', toX: 0 },
        ],
        bgcolor: 0xfc03cf,
        fcolor: 0x0cf52b,
        minX: -2400,
        maxX: 7000,
    },
    lobby : {
        structures : [
            { type: 'npc', name: 'shivani', x: -300, info: 'Press "t" to talk to Shivani',
              dialog : [
                'Hi i\'m Shivani',
                'Please save me from the evil penguins.'
            ] },
            { type: 'structure', name: 'fightpenguins', x: 400, info: '' },
            { type: 'npc', name: 'maxstanford', x: 800, info: 'Press "t" to talk to Max Stanford',
              dialog : [
                'Hi.',
            ] },
            { type: 'npc', name: 'dane', x: 1600, info: 'Press "t" to talk to Dane',
              dialog : [
                'Those darn penguins are in the way of my roller coasters :(',
                'Can you get rid of them??',
            ] },
            { type: 'npc', name: 'maxmarcus', x: 2400, info: 'Press "t" to talk to Max Reggie Marcus',
              dialog : [
                'I kind of like the penguins, I feel like they don\'t quite fit in...',
                'I guess you could say they are a bit misfit'
            ] },
            { type: 'npc', name: 'tyler', x: 3000, info: 'Press "t" to talk to Tyler Wilson',
              dialog : [
                'Sooooo how is your day going?',
                'Anyways, The penguins stole my Owala and I need it back'
            ] },
            { type: 'npc', name: 'elijah', x: 3500, info: 'Press "t" to talk to EJ',
              dialog : [
                'Hi I want to be saved from the penguins.',
            ] },
            { type: 'npc', name: 'nina', x: 4500, info: 'Press "t" to talk to Nina!',
              dialog : [
                'Oh gosh the penguins?? Please save me from the evil penguins!',
            ] },
            { type: 'npc', name: 'eva', x: 5000, info: 'Press "t" to talk to Eva',
              dialog : [
                'my life is so difficult...',
                'because of the penguins!'
            ] },
            { type: 'npc', name: 'pizza', x: 5500, info: 'Press "t" to talk to Pizza',
              dialog : [
                'I hate penguins because they are keeping my chicken up.',
            ] },
            { type: 'npc', name: 'conna', x: 6000, info: 'Press "t" to talk to Connor',
              dialog : [
                'IT\'S ME, CONNA...',
                'also known as Fortified Beaver Bunker.',
            ] },
            { type: 'door', name: 'portal', x: 0, info: 'Hold "w" to get started', to: 'outside', toX: 0 },
        ],
        fcolor: 0xfc03cf,
        bgcolor: 0x0cf52b,
        minX: -2000,
        maxX: 6500,
    }
}