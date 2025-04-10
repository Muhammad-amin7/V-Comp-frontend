import { FaSearch } from 'react-icons/fa';
import './SearchProducts.scss';
import { productData } from '../../Constants/ProductData';
import { useContext, useState } from 'react';
import { Context } from '../../Hooks/Context';
import { FaXmark } from 'react-icons/fa6';
import SearchResult from './SearchResult';

export default function SearchProducts() {
      const { language } = useContext(Context)
      const [searchValue, setSearchValue] = useState('');
      const [searchRes, setSearchRes] = useState([]);
      const [isSearch, setIsSearch] = useState(true)
      const [inpActive, setInpActive] = useState(false)

      const handleSearch = () => {
            if (!searchValue.trim()) {
                  setSearchRes([]);
                  return;
            }

            const filteredResults = productData.filter(item =>
            (item.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
                  item.description?.toLowerCase().includes(searchValue.toLowerCase()))
            );

            setIsSearch(false)
            setSearchRes(filteredResults);
      };

      return (
            <div className='navSearch'>
                  <form className='searchProduct' onSubmit={(e) => e.preventDefault()}>
                        <input
                              value={searchValue}
                              onChange={(e) => { setSearchValue(e.target.value); setIsSearch(true) }}
                              className='d-none d-sm-block'
                              type="text"
                              placeholder={language === 'uz' ? "Qidiruv" : "Поиск"}
                        />
                        {isSearch ?
                              <button type="button" className='d-none d-sm-block' onClick={handleSearch}>
                                    <FaSearch />
                              </button>


                              : <button
                                    className='clear d-none d-sm-block'
                                    onClick={() => {
                                          setSearchValue("");
                                          setSearchRes([]);
                                          setIsSearch(true)
                                    }}>
                                    <FaXmark />
                              </button>

                        }
                        <button className='d-block d-sm-none' onClick={() => setInpActive(prev => !prev)}>
                              <FaSearch />
                        </button>
                  </form>

                  <SearchResult searchRes={searchRes} setSearchValue={setSearchValue} setIsSearch={setIsSearch} isSearch={isSearch} searchValue={searchValue} handleSearch={handleSearch} setSearchRes={setSearchRes} inpActive={inpActive} />
            </div>
      );
}
