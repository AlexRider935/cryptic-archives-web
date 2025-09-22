// src/data/mockData.js
export const mockCases = [
    {
        id: 'the-missing-rembrandt',
        title: 'The Missing Rembrandt',
        description: 'A priceless painting vanishes from a locked museum gallery. The only clue is a cryptic note left behind.',
        image: '/images/case1.jpg',
        difficulty: 4,
        tier: 'Vetted', // This property is important
        evidence: [ /* ... */],
    },
    {
        id: 'the-silent-sabotage',
        title: 'The Silent Sabotage',
        description: 'A tech firm’s server farm is wiped overnight with no signs of forced entry. An inside job or a digital ghost?',
        image: '/images/case2.jpg',
        difficulty: 3,
        tier: 'Community', // This property is important
        evidence: [ /* ... */],
    },
    {
        id: 'the-marionettes-secret',
        title: 'The Marionette\'s Secret',
        description: 'A famous puppeteer is found lifeless in his workshop, strings attached. Was it a tragic accident or a final performance?',
        image: '/images/case3.jpg',
        difficulty: 5,
        tier: 'Vetted', // This property is important
        evidence: [ /* ... */],
    },
];