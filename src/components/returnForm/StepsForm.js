import { useState } from "react";

function StepsForm() {
    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);
    const [checkedThree, setCheckedThree] = useState(false);
    const [checkedFour, setCheckedFour] = useState(false);
    const [checkedFive, setCheckedFive] = useState(false);

    const [step, setStep] = useState(0);

    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState('Wybierz');
    const [selectedLocation, setSelectedLocation] = useState('Wybierz');
    const [choice, setChoice] = useState('FirstChoice');
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

    const handleChangeOne = () => {
        setCheckedOne(!checkedOne);
      };
      const handleChangeTwo = () => {
        setCheckedTwo(!checkedTwo);
      };
      const handleChangeThree = () => {
        setCheckedThree(!checkedThree);
      };
      const handleChangeFour = () => {
        setCheckedFour(!checkedFour);
      };
      const handleChangeFive = () => {
        setCheckedFive(!checkedFive);
      };
      
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
                        <label className="return_container_third-label">
                            <input
                            className="return_container_third-input"
                            type="checkbox"
                            value={checkedOne}
                            onChange={handleChangeOne}
                            />
                            ubrania, które nadają się do ponownego użycia
                        </label>
                        <label className="return_container_third-label">
                            <input
                            className="return_container_third-input"
                            type="checkbox"
                            value={checkedTwo}
                            onChange={handleChangeTwo}
                            />
                            ubrania, do wyrzucenia
                            <span class="checkmark"></span>
                        </label>
                        <label className="return_container_third-label">
                            <input
                            className="return_container_third-input"
                            type="checkbox"
                            value={checkedThree}
                            onChange={handleChangeThree}
                            />
                            zabawki
                        </label>
                        <label className="return_container_third-label">
                            <input
                            className="return_container_third-input"
                            type="checkbox"
                            value={checkedFour}
                            onChange={handleChangeFour}
                            />
                            książki
                        </label>
                        <label className="return_container_third-label">
                            <input
                            className="return_container_third-input"
                            type="checkbox"
                            value={checkedFive}
                            onChange={handleChangeFive}
                            />
                            Inne
                        </label>
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
                                    {options.map((option) => (
                                        <div className="return_container_third-dropdown-content-item"
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
                                    {optionsLocation.map((optionLocation) => (
                                        <div className="return_container_four-dropdown-content-item"
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
                                <div onClick={() => setChoice('FirstChoice')}
                                    className={choice === 'FirstChoice' 
                                                        ? "return_container_four_help-container-title-active"
                                                        : "return_container_four_help-container-title"
                                              }
                                >
                                    dzieciom
                                </div>
                                <div onClick={() => setChoice('SecondChoice')}
                                     className={choice === 'SecondChoice' 
                                                        ? "return_container_four_help-container-title-active"
                                                        : "return_container_four_help-container-title"
                                                    }
                                     >samotnym matkom
                                </div>
                                <div onClick={() => setChoice('ThirdChoice')}
                                     className={choice === 'ThirdChoice' 
                                                        ? "return_container_four_help-container-title-active"
                                                        : "return_container_four_help-container-title"
                                                    }
                                     >bezdomnym
                                </div>
                            </div>
                            <div className="return_container_four_help-container">
                            <div onClick={() => setChoice('FourthChoice')}
                                     className={choice === 'FourthChoice' 
                                                        ? "return_container_four_help-container-title-active"
                                                        : "return_container_four_help-container-title"
                                                    }
                                     >niepełnosprawnym
                                </div>
                                <div onClick={() => setChoice('FifthChoice')}
                                     className={choice === 'FifthChoice' 
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
                                        <input type="text"
                                        className="return_container_five_address-first-input"
                                        onChange={(e) => setStreet(e.target.value)}
                                        />  
                                </div>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Miasto</div>
                                        <input type="text"
                                        className="return_container_five_address-first-input"
                                        onChange={(e) => setCity(e.target.value)}
                                        />  
                                </div>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Kod pocztowy</div>
                                        <input type="text"
                                        className="return_container_five_address-first-input"
                                        onChange={(e) => setCode(e.target.value)}
                                        />  
                                </div>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Numer telefonu</div>
                                        <input type="text"
                                        className="return_container_five_address-first-input"
                                        onChange={(e) => setNumber(e.target.value)}
                                        />  
                                </div>
                            </div>
                            <div className="return_container_five_address-second">
                                <h4 className="return_container_five_address-second-title">Termin odbioru:</h4>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Data</div>
                                        <input type="text"
                                        className="return_container_five_address-first-input"
                                        onChange={(e) => setDate(e.target.value)}
                                        />  
                                </div>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Godzina</div>
                                        <input type="text"
                                        className="return_container_five_address-first-input"
                                        onChange={(e) => setTime(e.target.value)}
                                        />  
                                </div>
                                <div className="return_container_five_address-first-type">
                                    <div className="return_container_five_address-first-value">Uwagi dla kuriera</div>
                                        <textarea type="text"
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
        </>
    );
}

export default StepsForm;