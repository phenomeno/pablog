class PostsModel {
    static get(cb) {
        cb({
            'posts': [
                {
                    'id': 0,
                    'title': 'How to drink coffee properly',
                    'text': 'Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. Coffee plants are cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, India and Africa. The two most commonly grown are the highly regarded arabica, and the less sophisticated but stronger and more hardy robusta. The latter is resistant to the coffee leaf rust, Hemileia vastatrix, but has a more bitter taste. Once ripe, coffee beans are picked, processed, and dried. Green (unroasted) coffee beans are one of the most traded agricultural commodities in the world. Once traded, the beans are roasted to varying degrees, depending on the desired flavor, before being ground and brewed to create coffee. Coffee is slightly acidic (pH 5.0–5.1) and can have a stimulating effect on humans because of its caffeine content. Coffee is one of the most popular drinks in the world. It can be prepared and presented in a variety of ways (e.g., espresso, cappucino, cafe latte, etc.). It is usually served hot, although iced coffee is also served. The effect of coffee on human health has been a subject of many studies; however, results have varied in terms of coffee\'s relative benefit. The majority of recent research suggests that moderate coffee consumption is benign or mildly beneficial in healthy adults. However, the diterpenes in coffee may increase the risk of heart disease.'
                },
                {
                    'id': 1,
                    'title': 'Starbucks history',
                    'text': 'Starbucks Corporation, doing business as Starbucks Coffee, is an American coffee company and coffeehouse chain based in Seattle, Washington. Starbucks is the largest coffeehouse company in the world, with 22,766 stores in 65 countries and territories, including 12,802 in the United States, 1,930 in China, 1,409 in Canada, 1,121 in Japan and 825 in the United Kingdom.'
                }
            ]
        });
    }
} 

module.exports = PostsModel;
