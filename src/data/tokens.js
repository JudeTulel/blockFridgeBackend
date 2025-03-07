const tokens = {
    1: {
        name: "Unga (Maize Flour)",
        description: "Essential for making Ugali, Kenya's beloved staple dish. This 2kg pack ensures your family enjoys hearty meals.",
        image: "https://i.imgur.com/mhBbGb2.png",
        attributes: [
            { trait_type: "Category", value: "Food" },
            { trait_type: "Weight", value: "2kg" },
            { trait_type: "Price", value: "Ksh 160" }
        ],
        stock: 200
    },
    2: {
        name: "Sukumawiki (Kale)",
        description: "Fresh, nutritious greens perfect for accompanying your meals. A bundle of rich in vitamins.",
        image: "https://i.imgur.com/FoIFjpx.png",
        attributes: [
            { trait_type: "Category", value: "Vegetable" },
            { trait_type: "Weight", value: "400g" },
            { trait_type: "Price", value: "Ksh 20" }
        ],
        stock: 150
    },
    3: {
        name: "Milk (Packet)",
        description: "Fresh pasteurized milk, ideal for your tea or cereal. Each 500ml packet brings farm freshness to your home.",
        image: "https://i.imgur.com/RlwTE8W.png",
        attributes: [
            { trait_type: "Category", value: "Beverage" },
            { trait_type: "Volume", value: "500ml" },
            { trait_type: "Price", value: "Ksh 60" }
        ],
        stock: 300
    },
    4: {
        name: "Tomatoes",
        description: "A mix of fresh tomatoes perfect for stews and salads.",
        image: "https://i.imgur.com/0cJWlvT.png",
        attributes: [
            { trait_type: "Category", value: "Food" },
            { trait_type: "Weight", value: "3 pcs" },
            { trait_type: "Price", value: "Ksh 20" }
        ],
        stock: 100
    },
    5: {
        name: "Bread (Loaf)",
        description: "Soft and freshly baked, this 400g loaf is perfect for breakfast or as a snack.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_bread_05.jpg/800px-Fresh_made_bread_05.jpg",
        attributes: [
            { trait_type: "Category", value: "Food" },
            { trait_type: "Weight", value: "400g" },
            { trait_type: "Price", value: "Ksh 65" }
        ],
        stock: 250
    },
    6: {
        name: "Sugar (Packet)",
        description: "Sweeten your beverages and desserts with this 1kg packet of fine sugar.",
        image: "https://i.imgur.com/QJaEaAo.png",
        attributes: [
            { trait_type: "Category", value: "Food" },
            { trait_type: "Weight", value: "1kg" },
            { trait_type: "Price", value: "Ksh 172" }
        ],
        stock: 180
    },
    7: {
        name: "Cooking Oil",
        description: "Pure vegetable oil suitable for all your frying and cooking needs. Comes in a 1L bottle.",
        image: "https://i.imgur.com/bBYUm0k.png",
        attributes: [
            { trait_type: "Category", value: "Food" },
            { trait_type: "Volume", value: "1L" },
            { trait_type: "Price", value: "Ksh 250" } // Estimated average price
        ],
        stock: 120
    },
    8: {
        name: "Rice (Pishori)",
        description: "Aromatic and fluffy, this 2kg pack of Pishori rice is perfect for your favorite meals.",
        image: "https://i.imgur.com/drMctev.png",
        attributes: [
            { trait_type: "Category", value: "Food" },
            { trait_type: "Weight", value: "2kg" },
            { trait_type: "Price", value: "Ksh 469" }
        ],
        stock: 170
    },
    9: {
        name: "Beef",
        description: "Enjoy a healthy dose of proteins and vitamins from this primal meal.",
        image: "https://as2.ftcdn.net/v2/jpg/06/99/89/39/1000_F_699893993_4fC2tQ4BsefIHDTYepmvm8OZpuJZFMjV.jpg",
        attributes: [
            { trait_type: "Category", value: "Food" },
            { trait_type: "Weight", value: "1kg" },
            { trait_type: "Price", value: "Ksh 600" } 
        ],
        stock: 140
    },
    
};

module.exports = {
    tokens
};
