import { FaChevronDown, FaChevronUp, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { telephoneNumbers } from "../../Constants/Data";
import { LuPhoneCall } from "react-icons/lu";
import { useContext, useState } from "react";
import "./TelephoneNumbers.scss";

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Context } from "../../Hooks/Context";

export default function TelephoneNumbers() {
      const { language } = useContext(Context)
      const [phone, setPhone] = useState('');
      // toggle show all numbers
      const [numbers, setNumbers] = useState(false);
      const [name, setName] = useState('');

      const token = "7687272018:AAFav5xYZ1Mt1jQGjqwX65iSpCeEERjaR10";
      const chatId = "6528186432";

      const handleSendData = (e) => {
            e.preventDefault()
            if (name && phone) {
                  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                              chat_id: chatId,
                              text: `call back :\n name: ${name}\n number: +${phone}`
                        })
                  })
                        .then(data => data.json())
                        .then(data => {
                              if (data.ok) {
                                    setName("")
                                    setPhone("+998")
                              }
                        })
            }
      }


      return (
            <div className="telNumbers">
                  {telephoneNumbers.map(({ id, number }) => (
                        id === 0 && (
                              <div className="top" key={id}>
                                    <a className="number d-none d-xl-block" href={"tel:" + number}>{number}</a>
                                    <button onClick={() => setNumbers(prev => !prev)}>
                                          <span className="d-none d-xl-block">
                                                {numbers ? <FaChevronUp /> : <FaChevronDown />}
                                          </span>
                                          <span className="d-block d-xl-none lg-icon">
                                                <LuPhoneCall />
                                          </span>
                                    </button>
                              </div>
                        )
                  ))}

                  <div className={numbers ? "numbersModal active" : "numbersModal"}>
                        <div className="head">
                              <div className="left">
                                    {telephoneNumbers.map(({ id, number }) => (
                                          id !== 0 && (
                                                <a key={id} className="number" href={"tel:" + number}>
                                                      <LuPhoneCall /> {number}
                                                </a>
                                          )
                                    ))}
                              </div>
                              <div className="right">
                                    <FaWhatsapp />
                                    <FaTelegram />
                              </div>
                        </div>
                        <p>{language === 'uz' ? "yoki" : "или"}</p>
                        <h2>{language === "uz" ? "Qayta qo'ng'iroq qilish" : "Перезвонить мне"}</h2>
                        <form autoComplete="off">
                              <input value={name} type="text" name="name" placeholder={language === 'uz' ? "Izmingiz" : "Ваше имя"} required onChange={(e) => setName(e.target.value)} />
                              <PhoneInput
                                    country={'uz'}
                                    value={phone}
                                    onChange={setPhone}
                                    name="phone"
                                    required
                              />
                              <button type="submit" onClick={(e) => handleSendData(e)}>{language === "uz" ? "QONG'IROQ QILING" : "ЗАКАЗАТЬ ЗВОНОК"}</button>
                        </form>
                  </div>
            </div>
      );
}
