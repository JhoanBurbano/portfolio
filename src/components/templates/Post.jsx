import { useRef } from "react";
import axios from 'axios'
import { useGlobal } from "../../hooks/useGlobal";
import { SubirForm } from "../styles";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Post = () => {
    const MySwal = withReactContent(Swal) 
    const {toggleTheme, theme} = useGlobal()
    const imgRef = useRef ()
    const handlerSubmit = () => {
        console.log(imgRef)
        axios.post(`${process.env.BACK_SERVER}projects/pic?name=${'ejemplo'}`, {file: imgRef.files})
    }

    return (
        <SubirForm>
            <form onSubmit={e=>{e.preventDefault(); handlerSubmit()}}>
                <p onClick={toggleTheme} >{theme}</p>
                <input ref={imgRef} type="file" />
                <button type="submit">enviar</button>
            </form>
            <button onClick={
                ()=>{
                    MySwal.fire({
                        title: <p>Hello World</p>,
                        footer: 'Copyright 2018',
                        icon: 'info',
                        toast: true,
                        showConfirmButton: false,
                        timer: 15000,
                        position: 'bottom-right',
                        timerProgressBar: true,
                        customClass: {
                            popup: 'myswal-container'
                        }

                      })
                }                
            } > Swal </button>
        </SubirForm>
    )
}

export {Post}
