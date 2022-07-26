import { useState } from "react";

function StepsForm() {
    const [checkedOne, setCheckedOne] = useState(false)
    const [checkedTwo, setCheckedTwo] = useState(false)
    const [checkedThree, setCheckedThree] = useState(false)
    const [checkedFour, setCheckedFour] = useState(false)
    const [checkedFive, setCheckedFive] = useState(false)

    const [step, setStep] = useState(0);

    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState('Wybierz');

    const options = ['1', '2', '3', '4', '5'];

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
                        <button className="return_container_third-btn"
                                onClick={completeSetStep}
                        > 
                            Dalej
                        </button>
                    </div>
                </>
            )}
        </>
    );
}

export default StepsForm;