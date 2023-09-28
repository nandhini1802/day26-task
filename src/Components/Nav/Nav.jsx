import { useState } from "react";
import './Nav.css'
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Nav = ({ navBar }) => {
    const [dropNav, setDropNav] = useState('none');
   
    const [dropNavPages, setDropNavPages] = useState('none');
    const [arrow, setArrow] = useState(<i className="fa-solid fa-angle-right"></i>)
   
    const [arrowPages, setArrowPages] = useState(<i className="fa-solid fa-angle-right"></i>)
    const dropdownNav = () => {
        if (dropNav === 'none') {
            setDropNav('block');
            setDropNavPages('none')
            setArrow(<i className="fa-solid fa-angle-up"></i>)
            setArrowPages(<i className="fa-solid fa-angle-right"></i>)
        } else {
            setDropNav('none')
            setArrow(<i className="fa-solid fa-angle-right"></i>)
        }
    }

    const dropdownNavPages = () => {
        if (dropNavPages === 'none') {
            setDropNavPages('block');
            setDropNav('none')
            setArrowPages(<i className="fa-solid fa-angle-up"></i>)
            setArrow(<i className="fa-solid fa-angle-right"></i>)
        } else {
            setDropNavPages('none')
            setArrowPages(<i className="fa-solid fa-angle-right"></i>)
        }
    }
    
    
    return (
        <div style={{
            display: 'flex'
        }}>
            {/* Side Nav bar */}
            <div className={navBar}>
                <div style={{
                    display: 'flex',
                    width: '170px',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <i className="fa-solid fa-face-laugh-wink" style={{
                        fontSize: '35px',
                        rotate: '-20deg',
                        marginTop : '5px'
                    }}></i>
                    <h3
                        style={{
                            fontSize: '25px',
                            letterSpacing : '4px',
                            cursor : 'pointer',
                            margin : '0px 0px 0px 10px'
                        }}>
                            <Link to={'/'} style={{
                                textDecoration : 'none',
                                color : 'white'
                            }} >
                            College
                            </Link>
                            
                        </h3>
                </div>
                <br />
                <hr />
                <div>
                    <ul>
                        <li>
                            <div style={{
                                display: 'flex',
                                width: '110px',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <Link to={'/'} style={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }}>
                                    <span>Dashboard</span>
                                </Link>
                            </div>
                        </li>

                        <hr />

                        <div style={{
                            marginTop : '25px'
                        }}>
                            <p style={{
                                color: 'black',
                                fontWeight: '600',
                                margin : '0px'
                            }}>Students</p>
                            <li>
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <i className="fa-solid fa-clipboard-user"></i>
                                        <span style={{
                                            position: 'relative',
                                            cursor: 'pointer',
                                            marginLeft : '10px'
                                        }}
                                            onClick={dropdownNav}
                                        >Attendance</span>
                                    </div>
                                    {arrow}
                                    <div className="dropdownNav" style={{
                                        position: 'absolute',
                                        top: '280px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: '10px',
                                        fontSize: '15px',
                                        borderRadius: '5px',
                                        display: dropNav,
                                        cursor: 'pointer'
                                    }}>
                                        <Link to={'/present'} style={{
                                            textDecoration: 'none',
                                            color : 'black'
                                        }}>
                                            <p onClick={dropdownNav}>Present</p>
                                        </Link>
                                        <Link to={'/absent'} style={{
                                            textDecoration: 'none',
                                            color : 'black'
                                        }}>
                                            <p onClick={dropdownNav}>Absent</p>
                                        </Link>

                                    </div>
                                </div>
                            </li>
                        </div>
                        <hr />
                        <div style={{
                            marginTop : '25px'
                        }}>
                            <p style={{
                                color: 'black',
                                fontWeight: '600'
                            }}>Administration</p>
                            <li>
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <i className="fas fa-fw fa-folder" style={{
                                            marginRight: '5px'
                                        }}
                                        ></i>
                                        <span style={{
                                            position: 'relative',
                                            cursor: 'pointer'
                                        }}
                                            onClick={dropdownNavPages}
                                        >Department</span>
                                    </div>
                                    {arrowPages}
                                    <div className="dropdownNav" style={{
                                        position: 'absolute',
                                        top: '400px',
                                        backgroundColor: 'white',
                                        color: 'black',
                                        padding: '10px',
                                        fontSize: '15px',
                                        borderRadius: '5px',
                                        display: dropNavPages,
                                        cursor: 'pointer'
                                    }}>
                                        <Link to={'/ece'} style={{
                                            textDecoration: 'none',
                                            color : 'black'
                                        }}>
                                            <p onClick={dropdownNavPages}>ECE</p>
                                        </Link>
                                        <Link to={'/eee'} style={{
                                            textDecoration: 'none',
                                            color :'black'
                                        }}>
                                            <p onClick={dropdownNavPages}>EEE</p>
                                        </Link>
                                        <Link to={'/cse'} style={{
                                            textDecoration: 'none',
                                            color : 'black'
                                        }}>
                                            <p onClick={dropdownNavPages}>CSE</p>
                                        </Link>
                                        <Link to={'/civil'} style={{
                                            textDecoration: 'none',
                                            color : 'black'
                                        }}>
                                            <p onClick={dropdownNavPages}>Civil</p>
                                        </Link>
                                        <Link to={'/mech'} style={{
                                            textDecoration: 'none',
                                            color : 'black'
                                        }}>
                                            <p onClick={dropdownNavPages}>Mech</p>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </li>
                        </div>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Nav