import { useState } from 'react';
import './TopNav.css';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const TopNav = ({ resNavBar, NorNavBar }) => {
    const [popupBell, setPopupBell] = useState('none')
    const [popupMail, setPopupMail] = useState('none')
    const [popupProf, setPopupProf] = useState('none')
    const handleBell = () => {
        if (popupBell === 'none') {
            setPopupBell('block')
            setPopupMail('none')
            setPopupProf('none')
        } else {
            setPopupBell('none')
        }
    }
    const handleMail = () => {
        if (popupMail === 'none') {
            setPopupMail('block')
            setPopupBell('none')
            setPopupProf('none')
        } else {
            setPopupMail('none')
        }
    }
    const handleProfile = () => {
        if (popupProf === 'none') {
            setPopupProf('block');
            setPopupBell('none');
            setPopupMail('none');
        } else {
            setPopupProf('none')
        }
    }
    const [bars, setBars] = useState('fa-solid fa-bars');
    const handleEvent = () => {
        if (bars === 'fa-solid fa-bars') {
            setBars('fa-solid fa-xmark')
            resNavBar();
        } else {
            setBars('fa-solid fa-bars')
            NorNavBar();
        }
    }

    return (
        <div>
            {/* Top Nav bar */}
            <div className="topNav" style={{
                color: 'white'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <div>
                        <button style={{
                            background: 'transparent',
                            border: 'none',
                            marginRight: '20px'
                        }}
                            onClick={handleEvent}
                        >
                            <i className={bars} style={{
                                color: 'white',
                                fontSize: '20px'
                            }}></i>
                        </button>

                    </div>
                    <div className='search'>
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2" style={{
                                    width: '300px'
                                }}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='child-topNav'>
                    <div>
                        <Link to={'/create'} style={{
                            textDecoration: 'none',
                            color: '#17202A'
                        }}
                        //  onClick={handleNav}
                        >
                            <button className="addPost">
                                <i className="fa-solid fa-plus"></i>
                                Add Post
                            </button>
                        </Link>
                    </div>



                    {/* Bell */}
                    <div className='bells'>
                        <div className="bell">
                            <button style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'white'
                            }}
                                onClick={handleBell}
                            >
                                <i className="fa-solid fa-bell"></i>
                                <sup style={{
                                    backgroundColor: 'red',
                                    borderRadius: '3px',
                                    padding: '1px 2px',
                                    fontSize: '10px'
                                }}>3+</sup>
                            </button>
                            <div className="bell-pop" style={{
                                display: popupBell,
                                height: '270px',
                                width: '340px',
                                padding: '0px 0px 0px 0px',
                                backgroundColor: 'white',
                                borderRadius: '5px',
                                top: '75px',
                                right: '15px',
                                position: 'absolute',
                                color: 'black',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                cursor: 'pointer'
                            }}>
                                <div>
                                    <div className="bg-primary" style={{
                                        height: '35px',
                                        width: '100%',
                                        color: 'white',
                                        padding: '5px 10px 0px 10px',
                                        borderRadius: '5px 5px 0px 0px'
                                    }}>
                                        <p>Alerts Center</p>
                                    </div>
                                    <div style={{
                                        padding: '10px 15px 10px 15px'
                                    }}>
                                        <div className="bell-pop">
                                            <div className="bg-primary" style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <i className="fas fa-file-alt text-white"></i>
                                            </div>
                                            <div>
                                                <p className="text-muted" style={{
                                                    fontSize: '11px'
                                                }}>December 12, 2019</p>
                                                <p>A new monthly report is ready to download!</p>

                                            </div>
                                        </div>
                                        <hr />
                                        <div className="bell-pop">
                                            <div className="bg-success" style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <i className="fas fa-donate text-white"></i>
                                            </div>
                                            <div>
                                                <p className="text-muted" style={{
                                                    fontSize: '11px'
                                                }}>December 7, 2019</p>
                                                <p>$290.29 has been deposited to your account</p>

                                            </div>
                                        </div>
                                        <hr />
                                        <div className="bell-pop">
                                            <div className="bg-warning" style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <i className="fas fa-exclamation-triangle text-white"></i>
                                            </div>
                                            <div>
                                                <p className="text-muted" style={{
                                                    fontSize: '11px'
                                                }}>December 2, 2019</p>
                                                <p>Spending Alert: We have noticed unusually hig!</p>

                                            </div>
                                        </div>


                                    </div>

                                    <hr />
                                    <div className="mail-pop">
                                        <p>Read More Messages</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bell">
                            <button style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'white'
                            }}
                                onClick={handleMail}
                            >
                                <i className="fa-solid fa-envelope"></i>
                                <sup style={{
                                    backgroundColor: 'red',
                                    borderRadius: '3px',
                                    padding: '1px 4px',
                                    fontSize: '10px'
                                }}>7</sup>
                            </button>
                            <div className="bell-pop" style={{
                                display: popupMail,
                                height: '330px',
                                width: '300px',
                                padding: '0px 0px 0px 0px',
                                backgroundColor: 'white',
                                borderRadius: '5px',
                                top: '75px',
                                right: '40px',
                                position: 'absolute',
                                color: 'black',
                                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                cursor: 'pointer'
                            }}>
                                <div>
                                    <div className="bg-primary" style={{
                                        height: '35px',
                                        width: '100%',
                                        color: 'white',
                                        padding: '5px 10px 0px 10px',
                                        borderRadius: '5px 5px 0px 0px'
                                    }}>
                                        <p>Message Center</p>
                                    </div>
                                    <div style={{
                                        padding: '10px 15px 10px 15px'
                                    }}>
                                        <div className="mail-pop">
                                            <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_1.svg" alt="" />
                                            <div>
                                                <p className="text-truncate">Hi there! I am wondering if you ...</p>
                                                <p className="text-muted" style={{
                                                    fontSize: '11px'
                                                }}>Emily Fowler · 58m</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="mail-pop">
                                            <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_2.svg" alt="" />
                                            <div>
                                                <p className="text-truncate">I have the photos that you orde...</p>
                                                <p className="text-muted" style={{
                                                    fontSize: '11px'
                                                }}>Jae Chun · 1d</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="mail-pop">
                                            <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_3.svg" alt="" />
                                            <div>
                                                <p className="text-truncate">Last months report looks great...</p>
                                                <p className="text-muted" style={{
                                                    fontSize: '11px'
                                                }}>Morgan Alvarez · 2d</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="mail-pop">
                                            <img src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                                            <div>
                                                <p className="text-truncate">Am I a good boy? The reason I...</p>
                                                <p className="text-muted" style={{
                                                    fontSize: '11px'
                                                }}>Chicken the Dog · 2w</p>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="mail-pop">
                                        <p>Read More Messages</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* User profile */}
                    <div style={{
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '40px'
                    }}>
                        <p style={{
                            padding: '15px',
                            marginTop: '10px'
                        }}>Nandhini</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Q9B6SzNu7bKRNtQv8wdfPHARH_oBOGszJk4mkTOfqSMB5OsiCdAF5_deIv90G40T0Gg&usqp=CAU" alt="" style={{
                            width: '40px',
                            height: '40px'
                        }}
                            onClick={handleProfile}
                        />
                        <div className="bell-pop" style={{
                            display: popupProf,
                            height: '150px',
                            width: '130px',
                            padding: '10px 20px 0px 20px',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            top: '75px',
                            right: '30px',
                            position: 'absolute',
                            color: 'black',
                            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                            cursor: 'pointer'
                        }}>
                            <div className="user-pop">
                                <i className="fa-solid fa-user"></i>
                                <p>Profile</p>
                            </div>
                            <div className="user-pop">
                                <i className="fa-solid fa-gear"></i>
                                <p>Settings</p>
                            </div>
                            <div className="user-pop">
                                <i className="fa-solid fa-list"></i>
                                <p>Activity log</p>
                            </div>
                            <hr style={{
                                margin: '7px 0px'
                            }} />
                            <div className="user-pop">
                                <i className="fa-solid fa-sign-out"></i>
                                <p>Log out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav;