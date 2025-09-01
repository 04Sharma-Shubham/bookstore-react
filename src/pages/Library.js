import React, { useState } from 'react';
import '../styles/Library.css';

const booksData = [
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL._SX277_BO1,204,203,200_.jpg',
    description: "A story about adolescent Holden Caulfield's disillusionment with the adult world.",
    price: '₹ 999',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL._SX331_BO1,204,203,200_.jpg',
    description: 'A romantic novel that charts the emotional development of Elizabeth Bennet.',
    price: '₹ 259',
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg',
    description: 'Bilbo Baggins embarks on a quest to reclaim the lost Dwarf Kingdom of Erebor.',
    price: '₹ 779',
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    image: 'https://pictures.abebooks.com/isbn/9783453164123-us-300.jpg',
    description: 'A dystopian novel about a future American society where books are outlawed.',
    price: '₹ 299',
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51rOnIjLqzL._SX331_BO1,204,203,200_.jpg',
    description: "The narrative of Captain Ahab's obsessive quest to kill the white whale.",
    price: '₹ 499',
  },
];

const Library = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library-container">
      <h2>Library</h2>
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="book-grid">
        {filteredBooks.map(({ title, author, image, description, price }) => (
          <div key={title} className="book-card">
            <img src={image} alt={title} />
            <div className="book-info">
              <h3>{title}</h3>
              <p><em>{author}</em></p>
              <p>{description}</p>
              <p className="price">{price}</p>
            </div>
          </div>
        ))}
        {filteredBooks.length === 0 && <p>No books found.</p>}
      </div>
    </div>
  );
};

export default Library;