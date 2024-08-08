import { useState } from 'react';
import styles from './Calculadora.module.css'

function Calculadora() {
    let [peso , setPeso] = useState(0);
    let [altura , setAltura] = useState(0);
    function calculaImc() {
        const imc = peso / (altura**2);
        return imc.toFixed(2);
    }
    function tipoImc() {
        let myImc= calculaImc();
        switch(true){
            case myImc < 16.9:
                return "Muito abaixo do peso";
            case myImc < 18.4:
                return "Abaixo do peso";
            case myImc < 24.9:
                return "Peso normal";
            case myImc < 29.9:
                return "Acima do peso";
            case myImc < 34.9:
                return "Obesidade grau I";
            case myImc < 40:
                return "Obesidade grau II";
            case myImc > 40:
                return "Obesidade grau III";                 
            



        }
    }
    return (
        <>  
                <div className={styles.container}>
                    <h1>Calculadora de IMC</h1>
                    <form>
                        <div className="calculo">
                            <h4>Peso(kg):</h4>
                            <input type="number" onChange={evento => setPeso(evento.target.value)} />

                        </div>
                        <div className="calculo">
                            <h4>Altura(m): </h4>
                            <input type="number" onChange={evento => setAltura(evento.target.value)} />
                            
                        </div>                       

                    </form>
                    <p>
                        
                    </p>
                    {altura > 0 && peso >0 &&(
                        
                        <p>
                            Seu IMC é <b>{calculaImc()} </b>
                            <br />
                            Sua classificação é <b> {tipoImc()}</b>
                        </p>
                        )}                       
                </div>
        </>


    )
}


export default Calculadora;