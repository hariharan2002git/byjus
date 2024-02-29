import React, { useState } from 'react';
import '../Search/search.css'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('');

  const [sortOrder, setSortOrder] = useState('asc');
  const [data, setData] = useState([
    { id: 1, name: "BYJUS Class10", img: 'https://shop.byjus.com/cdn/shop/files/Byjus_Classes_G10.webp?v=1706011062&width=165%20165w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G10.webp?v=1706011062&width=360%20360w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G10.webp?v=1706011062&width=533%20533w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G10.webp?v=1706011062&width=668%20668w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G10.webp?v=1706011062&width=720%20720w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G10.webp?v=1706011062&width=940%20940w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G10.webp?v=1706011062&width=940%20940w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G10.webp?v=1706011062&width=1066%201066w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G10.webp?v=1706011062&width=1200%201200w',category:'highrating',price:10000},
    { id: 2, name: "BYJUS Class09", img: 'https://shop.byjus.com/cdn/shop/files/Byjus_Classes_G9.webp?v=1706007740&width=165%20165w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G9.webp?v=1706007740&width=360%20360w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G9.webp?v=1706007740&width=533%20533w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G9.webp?v=1706007740&width=668%20668w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G9.webp?v=1706007740&width=720%20720w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G9.webp?v=1706007740&width=940%20940w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G9.webp?v=1706007740&width=940%20940w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G9.webp?v=1706007740&width=1066%201066w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G9.webp?v=1706007740&width=1200%201200w',category:'bestselling',price:12000 },
    { id: 3, name: "BYJUS Class08", img: 'https://shop.byjus.com/cdn/shop/files/Byjus_Classes_G8.webp?v=1706007755&width=165%20165w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G8.webp?v=1706007755&width=360%20360w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G8.webp?v=1706007755&width=533%20533w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G8.webp?v=1706007755&width=668%20668w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G8.webp?v=1706007755&width=720%20720w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G8.webp?v=1706007755&width=940%20940w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G8.webp?v=1706007755&width=940%20940w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G8.webp?v=1706007755&width=1066%201066w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G8.webp?v=1706007755&width=1200%201200w' ,category:'high',price:6000},
    { id: 4, name: "BYJUS Class07", img: 'https://shop.byjus.com/cdn/shop/files/Byjus_Classes_G7.webp?v=1706011982&width=165%20165w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G7.webp?v=1706011982&width=360%20360w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G7.webp?v=1706011982&width=533%20533w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G7.webp?v=1706011982&width=668%20668w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G7.webp?v=1706011982&width=720%20720w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G7.webp?v=1706011982&width=940%20940w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G7.webp?v=1706011982&width=940%20940w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G7.webp?v=1706011982&width=1066%201066w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G7.webp?v=1706011982&width=1200%201200w',category:'bestselling',price:7000 },
    { id: 5, name: "BYJUS Class06", img: 'https://shop.byjus.com/cdn/shop/files/Byjus_Classes_G6.webp?v=1706009263&width=165%20165w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G6.webp?v=1706009263&width=360%20360w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G6.webp?v=1706009263&width=533%20533w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G6.webp?v=1706009263&width=668%20668w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G6.webp?v=1706009263&width=720%20720w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G6.webp?v=1706009263&width=940%20940w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G6.webp?v=1706009263&width=940%20940w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G6.webp?v=1706009263&width=1066%201066w,%20//shop.byjus.com/cdn/shop/files/Byjus_Classes_G6.webp?v=1706009263&width=1200%201200w',category:'low' ,price:7000},

  ]);
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterOption === '' || filterOption === 'all' || item.category === filterOption || item.price === parseInt(filterOption))
  );

  const sortedData = filteredData.slice().sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div  className="searchoption">
      <div className="filterstotal">

      
       <div className='searchfilterss'>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className='inputsearchfunc'
      />
      <select value={filterOption} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="high">High cost</option>
        <option value="low">Low cost</option>
        <option value="bestselling">Bestselling</option>
        <option value="6000">Less than 6000</option>
        <option value="7000">7000</option>
        <option value="10000">10000</option>
        <option value="12000">12000</option>
      </select>
     </div>
      <div className='radiobtn'>
        <input
          type="radio"
          id="asc"
          value="asc"
          checked={sortOrder === 'asc'}
          onChange={handleSortOrderChange}
        />
        <label htmlFor="asc">Ascending</label>
        <input
          type="radio"
          id="desc"
          value="desc"
          checked={sortOrder === 'desc'}
          onChange={handleSortOrderChange}
        />
        <label htmlFor="desc">Descending</label>
      </div>
      </div>
      <ul className='gridsearch'>
        {sortedData.length > 0 ? (
          sortedData.map((item) => (
            <React.Fragment>
              <div key={item.id}>
              <Singlepro item={item}/>
              </div>
            </React.Fragment>
          ))
        ) : (
          <span className='spanwarning'>
            <li className='noresult'>No results found</li>
          </span>
        )}
      </ul>
    </div>
  );
};




const Singlepro =({item})=>{
  return(
    <>
      <div className="mainpro">
      <div className="singleprocard">
      <img src={item.img} alt={item.name} height={300} width={300}/>
              <li className='fontli'>{item.name}</li>
              <div className="bageelements">
              <p className='fontp'><del className='strike'>9000</del>{item.price}</p><span className='singleprobadge'>25%</span>
              </div>
      </div>
      </div>
    </>
  )
}

export default Search;


