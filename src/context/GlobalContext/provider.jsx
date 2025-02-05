import { useState } from 'react';
import GlobalContext from './context';


export const GlobalProvider = ({ children }) => {
    const [modal, setModal] = useState ({
        'isOpen' : true,
        'isError' : false,
        'message' : 'null',
    })

    return (
        <GlobalContext.Provider value={{ 
                    modal, 
                    setModal 
                }}>

            {children}

        </GlobalContext.Provider>
    );
    };