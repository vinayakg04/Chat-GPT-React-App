import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import OptionSelection from './components/OptionSelection'
import Translation from './components/Translation'
import "./App.css"
import { arrayItems } from './AIOptions'



const App = () => {

    const OPENAI_API_KEY = `Put your unique openai API Key here`
    const configuration = new Configuration({
        apiKey: OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration);

    const [option, setoption] = useState({})
    const [result, setresult] = useState("")
    const [input, setinput] = useState("")
    //We need to see Translation only when we have selected an option 
    const selectOption = (option) => {
        setoption(option)
    }

    const doStuff = async () => {
        let object = { ...option, prompt: input }
        const response = await openai.createCompletion(object);
        setresult(response.data.choices[0].text)

    }
    return (
        <>
            <div className='App'>

                {

                    Object.values(option).length === 0 ?
                        (
                            <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
                        ) : (<Translation doStuff={doStuff} setinput={setinput} result={result} />)
                }

            </div>
        </>
    )
}

export default App