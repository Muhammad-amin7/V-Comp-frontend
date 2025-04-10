import './CatalogProductModal.scss'
import { CatalogName } from '../../Constants/Data'
import { FaChevronRight } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../../Hooks/Context'

export default function CatalogProductModal({ active, setActive }) {
      const { language } = useContext(Context)
      const [activeMenu, setActiveMenu] = useState(0)

      useEffect(() => {
            if (active) {
                  document.querySelector('body').style.overflow = "hidden"
            }
            else {
                  document.querySelector('body').style.overflow = "auto"
            }
            return (() => {
                  document.querySelector('body').style.overflow = "auto"
            })

      }, [active])

      return (
            <div className='catalogModalBg' style={{ display: active ? "flex" : 'none' }}>
                  {/* <ModalBG /> */}
                  <div className='catalogProductModal'>
                        <div className='close' onClick={() => setActive(false)}> <FaXmark /></div>
                        <ul className='menu'>
                              {CatalogName.map(({ id, name_uz, name_ru, icon }) => {
                                    return <React.Fragment key={id}>
                                          <li onClick={() => setActiveMenu(id)} key={id} className={id === activeMenu ? "active" : null}>
                                                <img src={icon} alt="" />
                                                <span>{language === "uz" ? name_uz : name_ru}</span>
                                                <FaChevronRight />
                                          </li>

                                          {activeMenu === id &&
                                                <ul className='d-block d-sm-none smContent'>
                                                      {
                                                            CatalogName.filter(item => item.id === activeMenu).map(({ menu_uz, menu_ru }) => (
                                                                  language === 'uz' ?
                                                                        menu_uz.map((item, index) => (
                                                                              <li key={index}>{item}</li>
                                                                        )) :
                                                                        menu_ru.map((item, index) => (
                                                                              <li key={index}>{item}</li>
                                                                        ))
                                                            ))
                                                      }
                                                </ul>}
                                    </React.Fragment>

                              })}
                        </ul>

                        <div className="content d-none d-sm-block">
                              <ul>
                                    {
                                          CatalogName.filter(item => item.id === activeMenu).map(({ menu_uz, menu_ru, name, id }) => (
                                                <div key={id}>
                                                      <h1>{name}</h1>
                                                      {language === "uz" ?
                                                            menu_uz.map((item, index) => (
                                                                  <li key={index}>{item}</li>
                                                            )) :
                                                            menu_ru.map((item, index) => (
                                                                  <li key={index}>{item}</li>
                                                            ))
                                                      }
                                                </div>
                                          ))

                                    }
                              </ul>
                        </div>
                  </div>
            </div>
      )
}

CatalogProductModal.propTypes = {
      active: PropTypes.bool.isRequired,
      setActive: PropTypes.func.isRequired,
}