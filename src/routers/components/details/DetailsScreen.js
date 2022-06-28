import { useNavigate } from "react-router-dom";

export const DetailsScreen = ({ stateDos }) => {

    const navigate = useNavigate();

    const { data } = stateDos;
    const { name, weight, types, sprites, abilities } = data;
    console.log(data)

    const handleInicio = () => {
        navigate('/');
    }

    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div className="details__main-container">
            <div className="details__main">
                <div className="details__buttons">
                    <button onClick={handleInicio} >Buscar otro pokémon</button>
                    <button onClick={handleReturn} >Regresar</button>
                </div>
                <div className="details__data">
                    <div className="details__data-name">
                        <h1>{`Nombre de Pokémon: ${name}`}</h1>
                        <div>{`Peso: ${weight}kg`}</div>
                        <div>{`Pokémon tipo: ${types[0].type.name}`}</div>
                        <div>{`Pokémon habilidad: ${abilities[0].ability.name}`}</div>
                        <div>{`Pokémon habilidad: ${abilities[1].ability.name}`}</div>
                    </div>
                    <div className="details__data-img">
                        <img src={sprites.front_default} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
