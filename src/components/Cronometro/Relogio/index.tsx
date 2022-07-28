import React from "react";
import style from './Relogio.module.scss';

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
    
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [MinutoDezena, MinutoUnidade] = String(minutos).padStart(2, '0');
    const [SegundoDezena, SegundoUnidade] = String(segundos).padStart(2, '0');

    return (
       <>
            <span className={style.relogioNumero}>{MinutoDezena}</span>
            <span className={style.relogioNumero}>{MinutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{SegundoDezena}</span>
            <span className={style.relogioNumero}>{SegundoUnidade}</span>
        </>
    )
}