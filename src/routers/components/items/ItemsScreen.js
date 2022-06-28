import { Link, useNavigate } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { useEffect } from 'react';

export const ItemsScreen = ({ state, setStateDos }) => {

    const navigate = useNavigate();

    const { data, loading, error } = useFetch(state);

    useEffect(() => {
        setStateDos(data);
        console.log(data, loading, error);
    });

    const handleReturn = () => {
        navigate('/');
    }

    return (
        <div className="items__main-container">
            <div className="items__main">
                <div className="items__return">
                    <button onClick={handleReturn} >◄ Regresar</button>
                    <h1>Pokémon</h1>
                </div>
                {
                    loading
                        ?
                        (
                            <div className="items__loading">loading...</div>
                        )
                        :
                        (
                            <div className="items__data-screen">
                                {
                                    data === null
                                        ?
                                        (<div> {error} </div>)
                                        :
                                        (
                                            <div className="items__data">
                                                <div> {`Hola soy: ${data.data.name}`} </div>
                                                <img src={data.data.sprites.front_default} alt="img" />
                                                <Link className='items__more' to={`/items/${data.data.name}`}> Más detalles... </Link>
                                            </div>
                                        )
                                }
                            </div>
                        )
                }
            </div>
        </div>
    )
}
