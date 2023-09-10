// Initially declared 10 type of object
let items = [
    { id: 1, name: "Apple", category: "grocery", price: 2.5 },
    { id: 2, name: "Milk", category: "grocery", price: 1.8 },
    { id: 3, name: "Bread", category: "grocery", price: 2.0 },
    { id: 4, name: "Book", category: "other", price: 10.0 },
    { id: 5, name: "Eggs", category: "grocery", price: 3.0 },
    { id: 6, name: "Notebook", category: "other", price: 2.5 },
    { id: 7, name: "Banana", category: "grocery", price: 1.0 },
    { id: 8, name: "Pen", category: "other", price: 0.5 },
    { id: 9, name: "Cheese", category: "grocery", price: 4.0 },
    { id: 10, name: "Shoes", category: "other", price: 25.0 },
];

// find and create two category object
const categoryFilterItems = [
    {
        id: 1, name: 'grocery'
    },
    {
        id: 2, name: 'other'
    }
]
// take a empty object
let selectedCategory = {};

const getItems = () => items
// console.log(getItem)

// create a copy object from the original items object
const newItem = [...items]

// using 'Find' for find out selected item
const handleSelectedCategory = (id) => {
    const selectedNewCategory = categoryFilterItems.find(categoryItems => categoryItems.id == id)
    selectedCategory = selectedNewCategory;

}

handleSelectedCategory(5)
// console.log(getItems())


// using 'filter' for separate item category

const handleFilteredCategory = (filterItem) => {
    if (selectedCategory) {
        const filteredItem = items.filter(item => item.category === filterItem.name)
        items = filteredItem
    }
    else {
        console.log('Item not exist')
    }
}
handleFilteredCategory(selectedCategory)
// console.log('after filter', getItems())


// using 'filter' for separate item category on bases of price
const handleFilteredPrice = (filterPrice) => {
    const filteredItem = items.filter(item => item.price >= filterPrice.min && item.price <= filterPrice.max)
    items = filteredItem
}

handleFilteredPrice({
    min: 0,
    max: 10
})
console.log('After price filter', getItems())

// using for clear item
const clearItems = () => {
    items = newItem
}
clearItems()
console.log('Clear cart', getItems())
