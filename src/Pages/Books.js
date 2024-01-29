import { React, useState, useEffect } from 'react'
import Sidebar from '../Components/Sidebar'
import { Box, TextField, Toolbar, Snackbar } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { useSessionStorage } from 'react-storage-complete';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Fragment } from 'react';
export const Books = () => {

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState('');
    const [accessToken] = useSessionStorage('access_token', '');
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <Fragment>
            <Button color="primary" size="small" onClick={handleClose}>
                close
            </Button>
            <IconButton onClick={handleClose}>
            </IconButton>
        </Fragment>
    );
    useEffect(() => {
        if (!accessToken) {
            navigate("/login-student");
        }
    }, [accessToken, navigate]);

    const handleSearch = () => {
        fetch('https://brainiac-mcgk.onrender.com/books?q=' + searchText)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setSearchResults(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };
    const handleDownload = (isbn) => {
        fetch('https://brainiac-mcgk.onrender.com/book?isbn=' + isbn)
            .then(response => {
                console.log('Response status code:', response.status);
                return response.json();
            })
            .then(data => {
                if (data === false) {
                    handleClick();
                }
                if (data) {
                    window.open(data.url, '_blank', 'noopener,noreferrer');
                    return;
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

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
                                <Snackbar
                                    open={open}
                                    autoHideDuration={3000}
                                    onClose={handleClose}
                                    message="Book not Available"
                                    action={action}
                                />
                            </form>
                        </div>
                        <ul>

                            {searchResults === '' ? <p></p> : searchResults.map((book) => (

                                <li key={book.isbn}>

                                    <div className='flex flex-row card rounded-lg shadow-md py-3 px-5 justify-start align-middle text-left'>
                                        <div className='flex flex-col justify-center align-center  pl-24'>
                                            <img className='w-32 h-48 relative justify-center align-center' src={book.cover} alt={book.name} />
                                            <p className='btn bg-[#4361EE] w-32 my-2' onClick={() => handleDownload(book.isbn)}>Download</p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='text-lg font-bold ml-24'>{book.name}</p>

                                            <p className='ml-24'><b>Author:</b> {book.author}</p>

                                            <p className='ml-24'><b>Publish Year:</b> {book.publish_year}</p>

                                            <p className='ml-24'><b>Publisher:</b> {book.publisher}</p>

                                            <p className='ml-24 line-clamp-6'><b>Description:</b> {book.description}</p>
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
