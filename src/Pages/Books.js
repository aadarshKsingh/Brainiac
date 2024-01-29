import { React, useState, useEffect } from 'react'
import Sidebar from '../Components/Sidebar'
import { Box, TextField, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { useSessionStorage } from 'react-storage-complete';
import { useNavigate } from 'react-router-dom';
export const Books = () => {

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState('');
    const [accessToken] = useSessionStorage('access_token', '');
    const navigate = useNavigate();
    useEffect(() => {
        if (!accessToken) {
            navigate("/login-student");
        }
    }, [accessToken, navigate]);

    const handleSearch = () => {
        fetch('https://brainiac-mcgk.onrender.com/books?q=' + searchText)
            .then(response => {
                console.log('Response status code:', response.status);
                return response.json();
            })
            .then(data => {
                setSearchResults(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    if (accessToken) {
        return (

            <Box sx={{ display: "flex" }}>
                {console.log("data", searchResults)}
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <div className="flex flex-col justify-center text-center place-items-center mr-96">
                        <p className='text-7xl w-96 text-center  font-montserrat font-bold'>Books</p>
                        <div className='flex flex-row ml-24 mr-24 pb-10'>
                            <b className='text-xl font-montserrat font-bold'>Powered by LibGen</b>
                            <img src="https://duckduckgo.com/i/79a2d7a6.png" className='w-5 h-5' alt='libgen' />
                        </div>

                        <div className='flex items-center justify-center'>
                            <form style={{ width: 1000 }} className='flex flex-col items-center'>
                                <TextField
                                    label="Search"
                                    placeholder='Search for Name, Author, ISBN'
                                    variant="filled"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    className='w-full'
                                />
                                <NavLink to={handleSearch}>
                                    <p onClick={handleSearch} className='btn bg-[#4361EE] w-96 font-montserrat text-white px-10 py-2 my-10' >
                                        Search
                                    </p>
                                </NavLink>
                            </form>
                        </div>
                        <ul>

                            {searchResults === '' ? <p></p> : searchResults.map((book) => (

                                <li key={book.isbn}>

                                    <div className='flex flex-row card rounded-lg shadow-md py-3 px-5 justify-start align-middle text-left'>
                                        <img className='w-32 h-48 justify-center align-center m-5' src={book.cover} alt={book.name} />
                                        <div className='flex flex-col'>
                                            <p className='text-lg font-bold'>{book.name}</p>

                                            <p><b>Author:</b> {book.author}</p>

                                            <p><b>Publish Year:</b> {book.publish_year}</p>

                                            <p><b>Publisher:</b> {book.publisher}</p>

                                            <p><b>Description:</b> {book.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Box>
            </Box>
        )
    }
}
