import './styles.css';

const AboutPage = () => {
    return (
        <div className='about-page'>
            <h1>About Us</h1>
            <div className ='about-bookstore-image'>
                <img src='images/bookstore.jpeg' alt='bookstore interior' />
            </div>
            <div className='about-description'>
                <h3>Moria Bookstore</h3>
                <p>Not just any bookstore. Moria Bookstore is the bookstore for wanders, bibliophiles, book appreciators, and bookworms. It is packed with a wide variety of books, shelves lined with leather, and architectural design with unique wooden shelves. Moria Bookstore is not just a basic traditional bookstore. It has a collection of original and unique books for all genres and needs, a library for avid readers and book lovers, and all-time low prices.</p>
                <p>With us, you don’t need to go all the way to your university library to borrow a dusty old classic. We have everything you’ll ever need, not just in a bookstore, but in your whole life. Everyone has different tastes and needs, which is why we offer so many services beyond books. Join Moria Bookstore today and find your perfect read.</p>
            </div>
            
        </div>
    )
}

export default AboutPage
