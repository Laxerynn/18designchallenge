import {useRef, useState,useEffect} from "react";
import {faCheck, FaTimes,faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { ImportsNotUsedAsValues } from "typescript";

const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3.23}$/;
const PWD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register =() => {
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFcus, setPwdFocus] = useState(false);

    const [matchPwd, setmatchPwd] = useState('');
    const [validMatch, setvalidMatch] = useState(false);
    const [matchFcus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [succes, setSucces] = useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.text(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(pwd);
        const match = pwd === matchPwd;
        setvalidMatch(match);
    },
    [pwd, matchPwd]) 
    
    
    

    useEffect(() => {
        setErrMsg('');
    }, [user,pwd,matchPwd])


    return (
        <section>
           <p ref={errRef} className={errMsg ? "errmsg" : 
           "offscreen"} aria-live="assertive">{errMsg}</p> 
           <h1>Register</h1>
           <form>
                <label htmlFor="username">
                    Username:
                </label>
                <Imput 
                    type = "text"
                    id= "username"
                    ref={userRef}
                    autoComplete ="off"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedy ="uidnote"
                    onFocus={()=> setUserFocus(true)}
                    onBlur={() => setUerFocus(false)}
                />
                <p id = "uidnote" className={userFocus && user && !invalidName ? "instrucions": "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 tot 24 tekens.<br />
                    begin altijd met letter.<br/>
                    letters, nummers, lage en hoge streepjes zijn toegestaan.
                </p>



           </form>
        </section>

    )
}

export default Register