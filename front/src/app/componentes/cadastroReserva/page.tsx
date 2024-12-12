import { useEffect, useState } from "react"

interface Reserva{
    id: number,
    usuario_id: number,
    mesa_id: number,
    data: Date,
    n_pessoas: number,
    status: boolean 
}

export default function PagReserva(){
    const [mesa, setMesa] = useState<MesasType[]>([])
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3333/reservas')
            console.log(await response.json())
        }
        fetchData()
    },
    [])
    return(
        <div></div>
    )
}