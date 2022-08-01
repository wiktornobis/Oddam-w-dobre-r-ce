import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTshirt, faVolleyball, faBook, faBoxOpen} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import icon from '../../assets/Icon.png';
import icon2 from '../../assets/Decoration.svg';


function StepsForm() {
    const [step, setStep] = useState(0);
    const [checkedbox, setCheckbox] = useState([
        {
            id: 1,
            name: 'ubrania, które nadają się do ponownego użycia',
            check: false,
            icon: <FontAwesomeIcon  icon={faTshirt} className="icon" />
        },
        {
            id: 2,
            name: 'ubrania, do wyrzucenia',
            check: false,
            icon: <FontAwesomeIcon  icon={faTshirt} className="icon" />
        },
        {
            id: 3,
            name: 'zabawki',
            check: false,
            icon: <FontAwesomeIcon  icon={faVolleyball} className="icon" />
        },
        {
            id: 4,
            name: 'książki',
            check: false,
            icon: <FontAwesomeIcon  icon={faBook} className="icon" />
        },
         {
            id: 5,
            name: 'inne',
            check: false,
            icon: <FontAwesomeIcon  icon={faBoxOpen} className="icon" />
        },
    ])

    const handleChangeCheckedBox = id => {
        setCheckbox(prev => {
            return prev.map(item => {
                 if(item.id === id){
                    return{...item, check:!item.check}
                } else {
                    return {...item}
                }
            })
        })
    }

    const renderCheckedBox = () => {
        return checkedbox.map(item => (
            <label className="return_container_third-label"
                   key={item.id}
                   onClick={()=> handleChangeCheckedBox(item.id)}
            >
                <input
                className="return_container_third-input"
                type="checkbox"
                id={item.id}
                />
                {item.name}
            </label>
        ))
    }

    const renderFilters = () => {
        return checkedbox.map((item) => {
            if (item.check) {
                return (
                    <span key={item.id}>{item.icon}</span>
                )
            } else {
                return null
            }
        })
    }

    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState('Wybierz');
    const [selectedLocation, setSelectedLocation] = useState('Wybierz');
    const [choice, setChoice] = useState('dzieciom');
    const [value, setValue] = useState('');

    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [code, setCode] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [remarks, setRemarks] = useState('');
    

    const options = ['1', '2', '3', '4', '5'];
    const optionsLocation = ['Poznań', 'Warszawa', 'Kraków', 'Katowice', 'Wrocław'];

    
      
      const completeSetStep = () => {
        setStep(cur => cur + 1)
      }
      const backSetStep = () => {
        setStep(cur => cur - 1)
      }
    return (
        <>
            {step === 0 && (
                <>
                    <div className="return_container_second">
                        <h4 className="return_container_second-title">Ważne!</h4>
                        <p className="return_container_second-paragraph">
                        Uzupełnij szczegóły dotyczące Twoich rzeczy. 
                        Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
                        </p>
                    </div>
                    <div className="return_container_third">
                        <p className="return_container_third-paragraph">Krok 1/4</p>
                        <p className="return_container_third-title">Zaznacz co chcesz oddać</p>
                        {renderCheckedBox()}
                        <button className="return_container_third-btn"
                                onClick={completeSetStep}
                        > 
                            Dalej
                        </button>
                    </div>
                </>
            )}
            {step === 1 && (
                <>
                    <div className="return_container_second">
                        <h4 className="return_container_second-title">Ważne!</h4>
                        <p className="return_container_second-paragraph">
                            Wszystkie rzeczy do oddania zapakuj w 60l worki. 
                            Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.
                        </p>
                    </div>
                    <div className="return_container_third">
                        <p className="return_container_third-paragraph">Krok 2/4</p>
                        <p className="return_container_third-title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
                        <div className="return_container_third-dropdown">
                        <p className="return_container_third-dropdown-title"> Liczba 60l worków:</p>  
                        <p 
                            onClick={() => setIsActive(!isActive)}
                            className={isActive === false 
                                                ? "return_container_third-dropdown-arrow" 
                                                : "return_container_third-dropdown-arrow-active"}
                            >   
                            </p>  
                        <div className="return_container_third-dropdown-btn"
                                onClick={e => setIsActive(!isActive)}
                            >
                                {selected}
                                <span className="return_container_third-dropdown-down"></span>
                            </div>
                            {isActive && (
                                <div className="return_container_third-dropdown-content">
                                    {options.map((option, index) => (
                                        <div className="return_container_third-dropdown-content-item"
                                            key={index}
                                            onClick={(e) => {
                                            setSelected(option)
                                            setIsActive(false)
                                            }
                                    }   >
                                            {option}
                                        </div>

                                    ))}
                                </div>
                        )}
                        </div>
                        <div className="return_container_third-buttons">
                            <button className="return_container_third-btn"
                                    onClick={backSetStep}
                            > 
                                Wstecz
                            </button>
                            <button className="return_container_third-btn"
                                    onClick={completeSetStep}
                            > 
                                Dalej
                            </button>
                        </div>
                    </div>
                </>
            )}
            {step === 2 && (
                <>
                    <div className="return_container_second">
                        <h4 className="return_container_second-title">Ważne!</h4>
                        <p className="return_container_second-paragraph">
                            Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce.
                            Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.
                        </p>
                    </div>
                    <div className="return_container_four">
                        <p className="return_container_four-paragraph">Krok 3/4</p>
                        <p className="return_container_four-title">Lokalizacja:</p>
                        <div className="return_container_four-dropdown">
                        <p 
                            onClick={() => setIsActive(!isActive)}
                            className={isActive === false 
                                                ? "return_container_four-dropdown-arrow" 
                                                : "return_container_four-dropdown-arrow-active"}
                            >   
                            </p>  
                        <div className="return_container_four-dropdown-btn"
                                onClick={e => setIsActive(!isActive)}
                            >
                                {selectedLocation}
                                <span className="return_container_four-dropdown-down"></span>
                            </div>
                            {isActive && (
                                <div className="return_container_four-dropdown-content">
                                    {optionsLocation.map((optionLocation, index) => (
                                        <div className="return_container_four-dropdown-content-item"
                                            key={index}
                                            onClick={(e) => {
                                            setSelectedLocation(optionLocation)
                                            setIsActive(false)
                                            }
                                    }   >
                                            {optionLocation}
                                        </div>

                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="return_container_four_help">
                            <h3 className="return_container_four_help-title">Komu chcesz pomóc?</h3>
                            <div className="return_container_four_help-container">
                                <div onClick={() => setChoice('dzieciom')}
                                    className={choice === 'dzieciom' 
                                                        ? "return_container_four_help-container-title-active"
                                                        : "return_container_four_help-container-title"
                                              }
                                >
                                    dzieciom
                                </div>
                                <div onClick={() => setChoice('samotnym matkom')}
                                     className={choice === 'samotnym matkom' 
                                                        ? "return_container_four_help-container-title-active"
                                                        : "return_container_four_help-container-title"
                                                    }
                                     >samotnym matkom
                                </div>
                                <div onClick={() => setChoice('bezdomnym')}
                                     className={choice === 'bezdomnym' 
                                                        ? "return_container_four_help-container-title-active"
                                                        : "return_container_four_help-container-title"
                                                    }
                                     >bezdomnym
                                </div>
                            </div>
                            <div className="return_container_four_help-container">
                            <div onClick={() => setChoice('niepełnosprawnym')}
                                     className={choice === 'niepełnosprawnym'
                                                        ? "return_container_four_help-container-title-active"
                                                        : "return_container_four_help-container-title"
                                                    }
                                     >niepełnosprawnym
                                </div>
                                <div onClick={() => setChoice('osobom starszym')}
                                     className={choice === 'osobom starszym' 
                                                        ? "return_container_four_help-container-title-active"
                                                        : "return_container_four_help-container-title"
                                                    }
                                     >osobom starszym
                                </div>
                            </div>  
                            <h4 className="return_container_four_help-organization">
                                    Wpisz nazwę konkretnej organizacji (opcjonalnie)
                            </h4>
                            <input type="text"
                                   className="return_container_four_help-input"
                                   onChange={(e) => setValue(e.target.value)}
                            />             
                        </div>
                        <div className="return_container_four-buttons">
                            <button className="return_container_four-btn"
                                    onClick={backSetStep}
                            > 
                                Wstecz
                            </button>
                            <button className="return_container_four-btn"
                                    onClick={completeSetStep}
                            > 
                                Dalej
                            </button>
                        </div>
                    </div>
                </>
            )}
            {step === 3 && (
                <>
                    <div className="return_container_second">
                        <h4 className="return_container_second-title">Ważne!</h4>
                        <p className="return_container_second-paragraph">
                            Podaj adres oraz termin odbioru rzeczy.
                        </p>
                    </div>
                    <div className="return_container_five">
                        <p className="return_container_five-paragraph">Krok 4/4</p>
                        <p className="return_container_five-title">
                            Podaj adres oraz termin odbioru rzecz przez kuriera
                        </p>
                        <div className="return_container_five_address">
                            <div className="return_container_five_address-first">
                                <h4 className="return_container_five_address-first-title">Adres odbioru:</h4>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Ulica</div>
                                        <input 
                                            type="text"
                                            className="return_container_five_address-first-input"
                                            onChange={(e) => setStreet(e.target.value)}
                                        />  
                                </div>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Miasto</div>
                                        <input 
                                            type="text"
                                            className="return_container_five_address-first-input"
                                            onChange={(e) => setCity(e.target.value)}
                                        />  
                                </div>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Kod pocztowy</div>
                                        <input 
                                            type="text" 
                                            className="return_container_five_address-first-input"
                                            onChange={(e) => setCode(e.target.value)}
                                        />  
                                </div>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Numer telefonu</div>
                                        <input 
                                            type="tel"
                                            className="return_container_five_address-first-input"
                                            onChange={(e) => setNumber(e.target.value)}
                                        />  
                                </div>
                            </div>
                            <div className="return_container_five_address-second">
                                <h4 className="return_container_five_address-second-title">Termin odbioru:</h4>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Data</div>
                                        <input 
                                            type="date"
                                            className="return_container_five_address-first-input"
                                            onChange={(e) => setDate(e.target.value)}
                                        />  
                                </div>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Godzina</div>
                                        <input 
                                            type="time"
                                            className="return_container_five_address-first-input"
                                            onChange={(e) => setTime(e.target.value)}
                                        />  
                                </div>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Uwagi dla kuriera</div>
                                        <textarea 
                                            type="text"
                                            className="return_container_five_address-first-textarea"
                                            onChange={(e) => setRemarks(e.target.value)}
                                        />  
                                </div>
                            </div>
                        </div>       
                        <div className="return_container_five-buttons">
                            <button className="return_container_five-btn"
                                    onClick={backSetStep}
                            > 
                                Wstecz
                            </button>
                            <button className="return_container_five-btn"
                                    onClick={completeSetStep}
                            > 
                                Dalej
                            </button>
                        </div>
                    </div>
                </>
            )}
            {step === 4 && (
                <>
                    <div className="return_container_summary">
                        <h3 className="return_container_summary-title">Podsumowanie Twojej darowizy</h3>
                        <p className="return_container_summary-paragraph">Oddajesz:</p>
                        <div className="return_container_summary-information">  
                           <p>{renderFilters()}</p>
                           <p className="return_container_summary-information-title">
                                {selected} worki, ubrania w dobrym stanie, {choice}
                           </p>
                        </div>
                        <div className="return_container_summary-information">  
                                <img src={icon} 
                                     alt="" 
                                     className="return_container_summary-information-icon"
                                />
                           <p className="return_container_summary-information-title">
                                dla lokalizacji: {selectedLocation}
                           </p>
                           
                        </div>
                        <p className="return_container_summary-information-organization">{value}</p>
                        <div className="return_container_five_address">
                            <div className="return_container_five_address-first">
                                    <h4 className="return_container_five_address-first-title">Adres odbioru:</h4>
                                    <div className="return_container_five_address-first-type">
                                        <div className="return_container_five_address-first-value">Ulica</div>
                                           <p className="return_container_five_address-first-summary">{street}</p>
                                    </div>
                                    <div className="return_container_five_address-first-type">
                                        <div className="return_container_five_address-first-value">Miasto</div>
                                        <p className="return_container_five_address-first-summary">{city}</p>
                                    </div>
                                    <div className="return_container_five_address-first-type">
                                        <div className="return_container_five_address-first-value">Kod pocztowy</div>
                                        <p className="return_container_five_address-first-summary">{code}</p>
                                    </div>
                                    <div className="return_container_five_address-first-type">
                                        <div className="return_container_five_address-first-value">Numer telefonu</div>
                                        <p className="return_container_five_address-first-summary">{number}</p>
                                    </div>
                                </div>
                                <div className="return_container_five_address-second">
                                    <h4 className="return_container_five_address-second-title">Termin odbioru:</h4>
                                    <div className="return_container_five_address-first-type">
                                        <div className="return_container_five_address-first-value">Data</div>
                                        <p className="return_container_five_address-first-summary">{date}</p>
                                    </div>
                                    <div className="return_container_five_address-first-type">
                                        <div className="return_container_five_address-first-value">Godzina</div>
                                        <p className="return_container_five_address-first-summary">{time}</p>
                                    </div>
                                    <div className="return_container_five_address-first-type">
                                        <div className="return_container_five_address-first-value">Uwagi dla kuriera</div>
                                        <p className="return_container_five_address-first-summary">{remarks}</p>
                                    </div>
                                </div>
                            </div>
                        <div className="return_container_five-buttons">
                            <button className="return_container_five-btn"
                                    onClick={backSetStep}
                            > 
                                Wstecz
                            </button>
                            <button className="return_container_five-btn return_container_summary-information-btn"
                                    onClick={completeSetStep}
                            > 
                                Potwierdzam
                            </button>
                        </div>
                    </div>            
                </>
            )}
            {step === 5 && (
                <>
                    <div className="return_container_thanks">
                        <div className="return_container_thanks_container">
                            <h3 className="return_container_thanks_container_title">
                                Dziękujemy za przesłanie formularza 
                                Na maila prześlemy wszelkie informacje o odbiorze.
                            </h3>
                            <img src={icon2} 
                                 alt="" 
                                 className="return_container_thanks_container_img"
                            />
                        </div>
                   
                    </div>            
                </>
            )}
        </>
    );
}

export default StepsForm;