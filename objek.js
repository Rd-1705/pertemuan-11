// let car = {
//     type: "fiat",
//     model: "500",
//     color: "white",
//     // method (function)
//     start: function(){
//     console.log("Ini adalah methode Start")
//     },
//     drive: function(){
//     console.log("Ini adalah methode Drive")
//     },
//     brake: function(){
//     console.log("Ini adalah methode Brake")
//     },
//     stop: function(){
//     console.log("Ini adalah methode Stop")
//     }
// }



const produk = [
    {
    id: 1,
    name: "Laptop",
    Image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=1024",
    price : "Rp.8.000.000,00",
},
{
    id: 2,
    name: "Laptop",
    Image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=1024",
    price : "Rp.8.000.000,00",
},
    {
    id: 3,
    name: "Laptop",
    Image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=1024",
    price : "Rp.8.000.000,00",
},
    {
    id: 4,
    name: "Laptop",
    Image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=1024",
    price : "Rp.8.000.000,00",
},
    {
    id: 5,
    name: "Laptop",
    Image: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=1024",
    price : "Rp.8.000.000,00",
}
    
]
    
produk.forEach((produk) => {
    document.write(`
        <figure>
        <img src=${produk.Image} alt="">
        <figcaption>
            <h1>${produk.name}</h1>
            <h2>${produk.price}</h2>
            <button onClick = "confirm('Apakah anda ingin membeli?')">Beli Sekarang</button>
            <button onClick = "alert('Anda menyukai produk ini')">Like</button>
            <button onClick = "prompt('tambahkan komentar')">Komen</button>
        </figcaption>
    </figure>
    `);
});