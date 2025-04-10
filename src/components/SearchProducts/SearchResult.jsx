import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Hooks/Context';
import { FaSearch } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

export default function SearchResult({ searchRes, setSearchValue, setIsSearch, isSearch, searchValue, handleSearch, setSearchRes, inpActive }) {
      const navigate = useNavigate()
      const { setAddedCart, language } = useContext(Context);

      return (
            (searchRes.length > 0 || inpActive) && (
                  <>

                        <div className="searchResult">
                              <form className='searchProduct d-sm-none' onSubmit={(e) => e.preventDefault()}>
                                    <input
                                          value={searchValue}
                                          onChange={(e) => { setSearchValue(e.target.value); setIsSearch(true) }}
                                          type="text"
                                          placeholder={language === 'uz' ? "Qidiruv" : "Поиск"}
                                    />
                                    {isSearch ?
                                          <button type="button" onClick={handleSearch}>
                                                <FaSearch />
                                          </button>

                                          : <button
                                                className='clear'
                                                onClick={() => {
                                                      setSearchValue("");
                                                      setSearchRes([]);
                                                      setIsSearch(true)
                                                }}>
                                                <FaXmark />
                                          </button>
                                    }
                              </form>
                              {searchRes.map(item => (
                                    <div className="item" key={item.id}>
                                          <div className="left" onClick={() => { navigate(`/productDetails/${item.id}`); setSearchValue('') }}>
                                                <img src={item.image[0]} alt={item.name} />
                                                <h4>{item.name}</h4>
                                          </div>
                                          <button
                                                onClick={() => setAddedCart(prev => {
                                                      const find = prev.find(element => element.id === item.id);
                                                      if (find) {
                                                            return prev.map(filt => filt.id === item.id ? { ...filt, count: filt.count + 1 } : filt);
                                                      } else {
                                                            return [...prev, { ...item, count: 1 }];
                                                      }
                                                })}
                                          >
                                                {language === 'uz' ? "SOTIB OLISH" : "КУПИТЬ"}
                                          </button>
                                    </div>
                              ))}
                        </div>
                  </>
            )

      )
}


SearchResult.propTypes = {
      searchRes: PropTypes.array.isRequired,
      setSearchValue: PropTypes.func.isRequired,
      setIsSearch: PropTypes.func.isRequired,
      isSearch: PropTypes.bool.isRequired,
      searchValue: PropTypes.string.isRequired,
      handleSearch: PropTypes.func.isRequired,
      setSearchRes: PropTypes.func.isRequired,
      inpActive: PropTypes.bool.isRequired,
}