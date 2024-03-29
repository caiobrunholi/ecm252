import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'
import axios from "axios";
import striptags from "striptags";

const Busca = () => {
    const [termoDeBusca, setTermoBusca] = useState('React')
    const [resultados, setResultados] = useState([])
    console.log(resultados)
    useEffect(() => {
        console.log("Causando um efeito colateral")
        return () => {
            console.log("Posso 'limpar' algo deixado para trás")
        }
    })

    // useEffect(() => {
    //     console.log("executando todas as vezes...")
    // })

    // useEffect(() => {
    //     console.log("Executa apenas uma vez ...")
    // }, [])

    useEffect(() => {
        // console.log("Executando somente quando o termo é alterado...")
        //definimos a função
        const fazBusca = async () => {
            try {
                const { data } = await axios.get(
                    'https://en.wikipedia.org/w/api.php', {
                    params: {
                        action: 'query',
                        list: 'search',
                        format: 'json',
                        // instruindo o navegador a permitir
                        // conteúdo de qualque origem
                        origin: '*',
                        srsearch: termoDeBusca
                    }
                }
                )
                setResultados(data.query.search)
            } catch (err) {
                console.log(err)
            }
        }
        if (termoDeBusca && !resultados.length){
            fazBusca()
        }else{
            const timeoutID = setTimeout(() => {
                if (termoDeBusca) {
                    // chamar a função
                    fazBusca()
                }
            }, 1000)
            return() => {
                clearTimeout(timeoutID)
            }
        }
    }, [termoDeBusca])

    return (
        <div>
            <span className="p-input-icon-left">
                <i className="pi pi-search"></i>
                <InputText
                    onChange={(e) => setTermoBusca(e.target.value)}
                />
            </span>
            {
                resultados.map((resultado) => (
                    <div
                        key={resultado.pageid}
                        // margem e borda
                        className="my-2 border border-1 border-400">
                        <div
                            // borda, padding e ajuste textual
                            className="border-bottom border-1 border-400 p-2 text-center font-bold">
                            {resultado.title}
                            <span>
                                <Button
                                    icon="pi pi-send"
                                    className=" ml-2 p-button-rounded p-button-secondary"
                                    onClick={() => window.open(
                                        `https://en.wikipedia.org?curid=${resultado.pageid}`)}
                                />
                            </span>
                        </div>
                        {/* {padding} */}
                        <div className="p-2">
                            <span dangerouslySetInnerHTML={{ __html: resultado.snippet }}>
                            </span>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}


export default Busca