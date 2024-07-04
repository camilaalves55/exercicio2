import react, { useState } from 'react';

function AlteracaoTexto() {
    const [texto, setTexto] = useState(true);

    const Alterar = () => {
      setTexto(texto => !texto);  
    }

    return (
        <>
            <div>
                <span>{texto ? <p>oiii</p> : <p>tchauu</p> }</span>
            </div>
           
            <button onClick={Alterar}>Alterar</button>
        </>
    );
}

export default AlteracaoTexto;