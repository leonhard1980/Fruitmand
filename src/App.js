import React, {useState} from 'react';
import './App.css';

function App() {
    const [aardbeien, setAardbeien] = useState(0);
    const [bananen, setbananen] = useState(0);
    const [kiwis, setKiwis] = useState(0);
    const [appels, setAppels] = useState(0);

    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(21);
    const [zip, setZip] = useState('');
    const [deliveryfrequency, toggledeliveryfrequency] = useState('om-de-week');
    const [agreeTerms, setAgreeTerms] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        console.log(`
            Voornaam: ${firstName},
            Achternaam: ${lastName},
            Leeftijd: ${age},
            Postcode: ${zip},
            Bezorgfrequentie: ${deliveryfrequency}
            checked: ${agreeTerms}
                        `);
        console.log(`
        aardbeien: ${aardbeien},
        bananen: ${bananen},
        kiwis: ${kiwis},
        appels: ${appels}
        `);
    }

    function resetFruit(){
        setAardbeien(0)
        setAppels(0)
        setbananen(0)
        setKiwis(0)
    }


    return (
    <>
      <h1>Fruitmand bezorgservice</h1>


        <article>
            <h2> 🍓 Aardbeien </h2>
            <button type="button" disabled={aardbeien <= 0} onClick={() => setAardbeien(aardbeien - 1)}>
                -
            </button >
            <p> {aardbeien} </p>
            <button type="button" onClick={() => setAardbeien(aardbeien +1)}>
                +
            </button>
        </article>


        <article>
            <h2> 🍌 Bananen </h2>
            <button type="button" disabled={bananen <= 0} onClick={() => setbananen(bananen - 1)}>
                -
            </button >
            <p> {bananen} </p>
            <button type="button" onClick={() => setbananen(bananen +1)}>
                +
            </button>
        </article>


        <article>
            <h2> 🥝 Kiwi's </h2>
            <button type="button" disabled={kiwis <= 0} onClick={() => setKiwis(kiwis - 1)}>
                -
            </button >
            <p> {kiwis} </p>
            <button type="button" onClick={() => setKiwis(kiwis +1)}>
                +
            </button>
        </article>


        <article>
            <h2> 🍏 Appels </h2>
            <button type="button" disabled={appels <= 0} onClick={() => setAppels(appels - 1)}>
                -
            </button >
            <p> {appels} </p>
            <button type="button" onClick={() => setAppels(appels +1)}>
                +
            </button>
        </article>

        <button onClick={() => resetFruit()} >
            RESET
        </button>


        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName-field">
                Voornaam
                <input
                    name="firstname"
                    type="text"
                    placeholder="type hier..."
                    id="firstName-field"
                    value={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </label>

            <label htmlFor="lastName-field">
                Achternaam
                <input
                    name="lastName"
                    type="text"
                    placeholder="type hier..."
                    id="lastName-field"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>

            <label htmlFor="age-field">
                Leeftijd
                <input
                    name="age"
                    type="number"
                    placeholder="type hier..."
                    id="age-field"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </label>

            <label htmlFor="zip-field">
                Postcode
                <input
                    name="zip"
                    type="text"
                    placeholder="type hier..."
                    id="zip-field"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                />
            </label>

            <label htmlFor="frequentie-field">
                Bezorgfrequentie
              <select
              name="delivery"
              id="delivery-field"
              value={deliveryfrequency}
              onChange={(e) => toggledeliveryfrequency(e.target.value)}
              >
                  <option value="elke-week"> Iedere week </option>
                  <option value="om-de-week"> Om de week </option>
                  <option value="maandelijks"> Iedere maand </option>
              </select>
            </label>


            <button type="radiobutton">
                <input className="dagNacht" type="radio" value="overdag" name="overdag" /> Overdag
                <input className="dagNacht" type="radio" value="avond" name="dag" /> 's Avonds
            </button>

            Opmerkingdag
            <label htmlFor="opmerking">

                <input
                    className="opmerkingen-field"
                    name="opmerking"
                    type="textarea"
                    placeholder="type hier aanvullende opmerkingen..."
                    id="opmerking"
                />
            </label>
                <label htmlFor="checked">
                <div>
                    <input
                        type="checkbox"
                        value="agreeTerms"
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                    />
                </div>

                    Ik ga akkoord met de voorwaarden
            </label>
            <button type="submit">
                Versturen
            </button>
        </form>

    </>
  );
}

export default App;
