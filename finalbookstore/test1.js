var rowCounter = 0;
var books1 = [];
//var book = {};

function init() {
    /* var book = {};
    book.id = 1,
        book.name = "The Alchemist",
        book.author = "Paulo Coelho",
        book.price = 150,
        book.image = 'alchemist.jpg',
        book.description = "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest. No one knows what the treasure is, or if Santiago will be able to surmount the obstacles in his path. But what starts out as a journey to find worldly goods turns into a discovery of the treasure found within. Lush, evocative, and deeply humane, the story of Santiago is an eternal testament to the transforming power of our dreams and the importance of listening to our hearts."

    books.push(book);

    book.id = 2,
        book.name = "1984",
        book.author = "George Orwell",
        book.price = 180,
        book.image = '1984.jpg',
        book.description = "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written."
    books.push(book);
    book.id = 3,
        book.nam = "The Great Gatsby",
        book.author = "F.Scott Fitzgerald",
        book.price = 200,
        book.image = 'gatsby.jpg',
        book.description = "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted. \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s.The Great Gatsby is one of the great classics of twentieth-century literature."
    books.push(book);

    book.id = 4,
        book.name = "The Old Man and the Sea",
        book.author = "Ernest Hemingway",
        book.price = 'oldman.jpg',
        book.description = "The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the enduring works of American fiction. It is the story of an old Cuban fisherman and his supreme ordeal: a relentless, agonizing battle with a giant marlin far out in the Gulf Stream. Using the simple, powerful language of a fable, Hemingway takes the timeless themes of courage in the face of defeat and personal triumph won from loss and transforms them into a magnificent twentieth-century classic."
    books.push(book);


    book.id = 5,
        book.name = "The Hobbit There and Back Again",
        book.author = "J.R.R. Tolkien",
        book.price = 300,
        book.image = 'hobbit.jpg',
        book.description = "On a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001). Unforgettable!"


    books.push(book);


    book.id = 6,
        book.name = "Murder on the Orient Express",
        book.author = "Agatha Christie",
        book.price = 250,
        book.image = 'orient.jpg',
        book.description = "Le train estaussidangereux que le paquebot » affirme Hercule Poirot…Le lendemain, dans unevoiture de l’Orient-Express bloqué par les neigesyougoslaves, on découvre le cadavre d’un américainlardé de douze coups de couteau. L’assassinn’apuvenir de l’extérieur : voicidonc un huis clos, le plus fameux, peut-être, de toute la littératurepolicière. Pour mener son enquête, le petit détectivebelge a le choix entre uneprincesserusse, uneAméricaine fantasque, le secrétaire de la victime, un couple de Hongroisdistingués, l’inévitable colonel de retour des Indes, les domestiques de tout ce beau monde et le contrôleur du train."
    books.push(book);

    book.id = 7,
        book.name = "The Little Prince",
        book.author = "Antoine de Saint-Exupery",
        book.price = 220,
        book.image = 'price.jpg',
        book.description = "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures."

    books.push(book);
    book.id = 8,
        book.name = "The Metamorphosis",
        book.author = "Franz Kafka",
        book.price = 350,
        book.image = 'meta.jpg',
        book.description = "\"As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes.\" With it's startling, bizarre, yet surprisingly funny first opening, Kafka begins his masterpiece, The Metamorphosis. It is the story of a young man who, transformed overnight into a giant beetle-like insect, becomes an object of disgrace to his family, an outsider in his own home, a quintessentially alienated man. A harrowing—though absurdly comic—meditation on human feelings of inadequacy, guilt, and isolation, The Metamorphosishas taken its place as one of the most widely read and influential works of twentieth-century fiction. As W.H. Auden wrote, \"Kafka is important to us because his predicament is the predicament of modern man.\""


    books.push(book);
*/
    var book1 = [{
            id: 1,
            name: "1984",
            author: "George Orwell",
            price: 180,
            image: '1984.jpg',
            description: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written."
        },

        {
            id: 2,
            name: "The Alchemist",
            author: "Paulo Coelho",
            price: 150,
            image: 'alchemist.jpg',
            description: "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself king, and an alchemist, all of whom point Santiago in the direction of his quest. No one knows what the treasure is, or if Santiago will be able to surmount the obstacles in his path. But what starts out as a journey to find worldly goods turns into a discovery of the treasure found within. Lush, evocative, and deeply humane, the story of Santiago is an eternal testament to the transforming power of our dreams and the importance of listening to our hearts."
        },

        {
            id: 3,
            name: "Do Androids Dream of Electric Sheep?",
            author: "Philip K.Dick",
            price: 450,
            image: 'blade.jpg',
            description: "It was January 2021, and Rick Deckard had a license to kill.Somewhere among the hordes of humans out there, lurked several rogue androids. Deckard's assignment--find them and then...\"retire\" them. Trouble was, the androids all looked exactly like humans, and they didn't want to be found!"
        },
        {
            id: 4,
            name: "Chess Story",
            author: "Stefan Zweig",
            price: 300,
            image: 'chess.jpg',
            description: "Chess Story, also known as The Royal Game, is the Austrian master Stefan Zweig's final achievement, completed in Brazilian exile and sent off to his American publisher only a matter of days before his suicide in 1942. It is the only story in which Zweig looks at Nazism, and he does so with characteristic emphasis on the psychological.Travelers by ship from New York to Buenos Aires find that on board with them is the world champion of chess, an arrogant and unfriendly man. They come together to try their skills against him and are soundly defeated. Then a mysterious passenger steps forward to advise them and their fortunes change. How he came to possess his extraordinary grasp of the game of chess and at what cost lie at the heart of Zweig's story.This new translation of Chess Story brings out the work's unusual mixture of high suspense and poignant reflection"
        },
        {
            id: 5,
            name: "The Metamorphosis",
            author: "Franz Kafka",
            price: 350,
            image: 'meta.jpg',
            description: "\"As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes.\" With it's startling, bizarre, yet surprisingly funny first opening, Kafka begins his masterpiece, The Metamorphosis. It is the story of a young man who, transformed overnight into a giant beetle-like insect, becomes an object of disgrace to his family, an outsider in his own home, a quintessentially alienated man. A harrowing—though absurdly comic—meditation on human feelings of inadequacy, guilt, and isolation, The Metamorphosishas taken its place as one of the most widely read and influential works of twentieth-century fiction. As W.H. Auden wrote, \"Kafka is important to us because his predicament is the predicament of modern man.\""
        },
        {
            id: 6,
            name: "The Old Man and the Sea",
            author: "Ernest Hemingway",
            price: 200,
            image: 'oldman.jpg',
            description: "The last novel Ernest Hemingway saw published, The Old Man and the Sea has proved itself to be one of the enduring works of American fiction. It is the story of an old Cuban fisherman and his supreme ordeal: a relentless, agonizing battle with a giant marlin far out in the Gulf Stream. Using the simple, powerful language of a fable, Hemingway takes the timeless themes of courage in the face of defeat and personal triumph won from loss and transforms them into a magnificent twentieth-century classic."
        },
        {
            id: 7,
            name: "Murder on the Orient Express",
            author: "Agatha Christie",
            price: 250,
            image: 'orient.jpg',
            description: "Le train estaussidangereux que le paquebot » affirme Hercule Poirot…Le lendemain, dans unevoiture de l’Orient-Express bloqué par les neigesyougoslaves, on découvre le cadavre d’un américainlardé de douze coups de couteau. L’assassinn’apuvenir de l’extérieur : voicidonc un huis clos, le plus fameux, peut-être, de toute la littératurepolicière. Pour mener son enquête, le petit détectivebelge a le choix entre uneprincesserusse, uneAméricaine fantasque, le secrétaire de la victime, un couple de Hongroisdistingués, l’inévitable colonel de retour des Indes, les domestiques de tout ce beau monde et le contrôleur du train."
        },
        {
            id: 8,
            name: "The Little Prince",
            author: "Antoine de Saint-Exupery",
            price: 220,
            image: 'price.jpg',
            description: "Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little boy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. His personal odyssey culminates in a voyage to Earth and further adventures."
        }
    ];
    books1 = book1;
}

function renderBooks() {
    console.log(books1);
    var st = "";
    books1.forEach(function(ele, i) {
        st += `<div class="col-3 p-2">
                <div class="card card1">
                    <img class="card-img-top" src=${ele.image} height="300px" width="300px" alt=" Card image cap ">
                    <div class="card-body ">
                        <h5 class="card-title ">${ele.name}</h5>
                        <p class="card-text ">
                            <button type="button" class="btn btn-primary" data-toggle="modal"
                                data-target="#exampleModal0" onclick="ad(${i})">
                                BUY
                            </button>
                        </p>
                    </div>
                </div>  
            </div>`
    })
    document.querySelector("#bookStore").innerHTML = st;
    console.log(st)
}

$(document).ready(function() {
    init();
    renderBooks();
})

function ad(id) {
    document.getElementById('0').innerText = ""
    document.getElementById('foot').innerText = ""
    var index = Number(id);
    console.log(id);
    let bold = document.createElement('b');
    console.log(books1);
    let btext = document.createTextNode(books1[index].price + "$");
    let para = document.createElement('p');
    let ptext = document.createTextNode(books1[index].description);
    para.appendChild(ptext);
    bold.appendChild(btext);
    bold.appendChild(para);
    document.getElementById('exampleModalLabel').innerText = books1[index].name;

    document.getElementById('0').appendChild(bold);


    let footerbuttom = document.createElement('button');
    footerbuttom.classList.add('btn');
    footerbuttom.classList.add('btn-primary');
    let addcart = "addcart(" + id + ")";
    footerbuttom.setAttribute('onclick', addcart);
    let footerbuttomstr = document.createTextNode('Add To Cart');
    footerbuttom.appendChild(footerbuttomstr);
    document.getElementById('foot').appendChild(footerbuttom);

}


function addcart(get) {
    var book = {};
    alert("added to the cart");
    counter++;
    var id1 = Number(get);
    book.id = counter;
    book.name = books1[id1].name;
    book.author = books1[id1].author;
    book.price = books1[id1].price;

    var table = document.getElementById("book").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.rows.length);
    var id = row.insertCell(0);
    var name = row.insertCell(1);
    var author = row.insertCell(2);
    var price = row.insertCell(3);
    var idBtn1 = row.insertCell(4);
    id.innerText = book.id;
    name.innerText = book.name;
    author.innerText = book.author;
    price.innerText = book.price;
    idBtn1.innerHTML = idBtn1.innerHTML + `<button type="button" class="btn btn-success" onclick="del(this)">REMOVE</button>`

    books.push(book);
    //console.log(books);
}