import React, { useState } from 'react'
import './style.css'



export function SecaoComentario(props) {
	return (
		<div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={props.valor}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}