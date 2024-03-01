"use client"
import { useRef, useState, useEffect } from "react";
import { useShopContext } from "@/services/providers/ShopContext";
import axios from "@/services/api/axiosConfig";
import { useRouter } from 'next/navigation';
import { INTER_FACE_KEY } from '@/hooks/useUserInterfaceDisplay'

import {
    Check,
    Clear,
    Info,
} from '@mui/icons-material/';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

type ResponseType = {
    user: string;
    pwd: string;
    accessToken: string;
    data: any;
}

export default function RegistrationForm() {
    const { setUserInterface } = useShopContext();

    const userRef = useRef<HTMLInputElement | null>(null);
    const errRef = useRef<HTMLParagraphElement | null>(null);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const currentElement = userRef.current;
        if (currentElement instanceof HTMLParagraphElement) {
            currentElement.focus();
        }
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response: ResponseType = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            setSuccess(true);
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err: any) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            const currentElement = userRef.current;
            if (currentElement instanceof HTMLParagraphElement) {
                currentElement.focus();
            }
        }
    }

    const handleOpenLoginMenu = () => {
        setUserInterface(INTER_FACE_KEY.LOGIN_MODAL, true)
        router.push('/', undefined);
    }

    const handleOpenLoginMenuLink = () => {
        setUserInterface(INTER_FACE_KEY?.LOGIN_MODAL, true)
    }

    return (
        <>
            {success ? (
                <section>
                    <h1 className="py-5">Sikeres Regisztráció!</h1>
                    <button onClick={handleOpenLoginMenu} className="butttonClass">Bejelentkezés</button>
                </section>
            ) : (
                <section
                    className="p-5 w-7/12">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form
                        className="flex flex-col space-y-4"
                        onSubmit={handleSubmit}
                    >

                        <label htmlFor="username" className="flex">
                            Email címed:
                            <Check className={validName ? "block" : "hidden"} />
                            <Clear className={validName || !user ? "hidden" : "block"} />
                        </label>
                        <input
                            className="imputClass"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "block" : "hidden"}>
                            <Info />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>


                        <label htmlFor="password" className="flex">
                            Jeszó:
                            <Check className={validPwd ? "block" : "hidden"} />
                            <Clear className={validPwd || !pwd ? "hidden" : "block"} />
                        </label>
                        <input
                            className="imputClass"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "block" : "hidden"}>
                            <Info />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        <label htmlFor="confirm_pwd" className="flex">
                            Jeszó újra:
                            <Check className={validMatch && matchPwd ? "block" : "hidden"} />
                            <Clear className={validMatch || !matchPwd ? "hidden" : "block"} />
                        </label>
                        <input
                            className="imputClass"
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "block" : "hidden"}>
                            <Info />
                            Must match the first password input field.
                        </p>

                        <button
                            className="butttonClass"
                            disabled={!validName || !validPwd || !validMatch ? true : false}>Regisztrálok</button>
                    </form>

                    <p>
                        Már regisztráltá?<br />
                        <span className="line">
                            <a className='cursor-pointer' onClick={handleOpenLoginMenuLink}>Bejelentkezés</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}