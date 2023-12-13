function Authordetails(name,birthyear,nationality){
 this.name=name;
 this.birthyear=birthyear;
 this.nationality=nationality;
}



function Book(title,author,genre,price){
    this.title=title;
    this.author=author;
    this.genre=genre;
    this.price=price
    
}

let author1 = new Authordetails("Hector Garcia",1998,"Japan")
let author2= new  Authordetails("James Clear",2000,"American")
let author3= new Authordetails("Kautilya" ,340,"Indian")
let author4  = new Authordetails("Robert Cecil Martin",1990,"American")

let book1 = new Book("Ikigai",author1,"Self helpbook",120)

let book2 =new Book("Atomic habbit" ,author2,"Self help",150)

let book3 = new Book("Chankya niti",author3,"Politics",100)

let book4 = new Book("Clean code",author4,"Developer ",200)
console.log(book1,book2,book3,book4)






let allBookdetails =[book1,book2,book3,book4]
function allBook(allBookdetails){
    for(let i=0;i <= allBookdetails.length;i++){
        
    }
    console.log(allBookdetails)
}
allBook(allBookdetails)