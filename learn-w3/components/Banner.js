import {Button } from "@mui/material"

export default function Banner(){
    return(
        <div style={{
            height:'85vh',
           backgroundImage:'url("https://www.w3schools.com/w3images/sailboat.jpg")',
           backgroundSize:'cover',
           backgroundPosition:'center',
           display:'flex',
           alignItems:'flex-end',
           padding:'32px'
        }}>
            <Button variant="filled" sx={{
                padding:'24px 32px',
                background:'black',
                fontWeight:'900',
                color:'#eee'
            }}>LEARN W3.CSS</Button>
        </div>
    )
}