import React, {useState} from 'react';

export default ({ children }) => {

	const [open, setOpen] = useState(false);

	return( 
		<div className="pokedex">
			<div className="pokedex-header">
				<div className="pokedex-header-miti">
					<div className="btn-big"></div>
					<div className="btn-little red" ></div>
					<div className="btn-little yellow"></div>
					<div className="btn-little green"></div>
				</div>
				<div className="pokedex-header-miti miti2">
					<div className="pokedex-header-miti-top">
					</div>
					<div className="pokedex-header-miti-triangulo">
					</div>
				</div>
			</div>
			
			<div className="pokedex-pre-screen">
				<div className="cuchuflo">
					<div className="close" onClick={ () => setOpen(!open) }> <span className="the-x"></span> <p> Close </p> </div>
				</div>
				<div className="pokedex-marco-screen">
					<div className="pokedex-screen">
						<div className="pokedex-screen-shadow"></div>
						{children}
					</div>
				</div>
			</div>

			<div className="pokedex-bisagra"></div>
			
			<div onClick={ () => setOpen(!open) } className={ open ? 'pokedex-tapa open' : 'pokedex-tapa'}>
				<div className="pokedex-tapa-cuchuflo"></div>
				<div className="pokedex-tapa-tapa">
					<h1 className="text">
						TAP TO <br/> OPEN
					</h1>
					<div className="pokedex-tapa-bisagra">
						<div className="detalle"></div>
						<div className="detalle"></div>
					</div>
					<div className="pokedex-tapa-rendija"></div>
					<div className="pokedex-tapa-triangulo"></div>
				</div>
			</div>
		</div>
	);	
}