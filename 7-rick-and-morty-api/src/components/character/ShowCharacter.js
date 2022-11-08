import {Character} from './Character'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'

const ShowCharacter = ({name}) => {
    const [characters, loading] = useFetch(name)

    if(loading){
        return 'ComponenteLoading'
    }
    return (
        <div className='row mt-2'>
            {characters.map((item) => {
                <Character key={item.id} characters={item}/>
            })}
        </div>
    )
}