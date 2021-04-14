import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import Image from '../components/Image'
import AppContext from '../context/AppContext'
import shortid from 'shortid'

const Home = () => {

    const { searchTag, images, newSearch } = useContext(AppContext);

    //State del tag
    const [tag, setTag] = useState('')

    const handleSubmit = () => {
        if (tag.trim() === '') {
            toast.error('Debe llenar el campo Tag');
            return;
        }
        searchTag(tag)

    }
    return (
        <>
            <Header />
            {images.length === 0 ?
                <>
                    <div className="md:bg-gradient-to-tr md:from-blue-600 md:to-pink-600 md:w-80 md:h-80 md:fixed  md:rounded-full md:m-auto md:inset-0 lg:w-96 lg:h-96"></div>
                    <div className="bg-gradient-to-bl from-blue-600 to-pink-600 w-4/5 h-1/3 m-auto mt-20 p-6 rounded-xl text-center md:fixed md:m-auto md:inset-0">
                        <h1 className="text-white text-4xl font-medium mb-6">Photo Search </h1>
                        <div>
                            <div>
                                <input type="text" name="tag" id="" placeholder="Tag" className="rounded-md pl-2 py-1 outline-none mb-4 lg:w-60" onChange={e => setTag(e.target.value)} />
                            </div>
                            <div>
                                <button className="text-white font-medium bg-blue-600 py-1 px-8 rounded-full text-lg" onClick={handleSubmit}>Search</button>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="mx-auto text-center">
                        <button className="py-1 px-10 text-white text-xl bg-pink-600 rounded-full mt-3 mx-auto " onClick={newSearch}>Generar Nueva Consulta</button>
                    </div>
                    <div className="flex flex-row flex-wrap mt-10 justify-center mx-2">
                        {images.map(image => (

                            <Image 
                            key={shortid.generate()}
                            image={image} 
                            />

                        ))}
                    </div>
                </>
            }


        </>
    );
}

export default Home;