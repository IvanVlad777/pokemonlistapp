import { firstLetterUpper } from '../../../helper/helperMethods';
import { typeColor, colors } from '../../../helper/pokemonColors';

const SpecificsBlock = ({
  pokemonColor,
  abilityArray,
  statsArray,
  typesArray,
}) => {
  return (
    <div
      className="border rounded-3 mt-2"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        color: 'white',
        textShadow:
          '-1px -1px 1px #000, 1px -1px 1px #000, -1px 1px 1px #000, 1px 1px 1px #000',
      }}
    >
      <p>Abilities:</p>
      <div className="d-flex justify-content-center">
        {abilityArray.map((ability) => (
          <p
            key={ability.ability.name}
            className="border border-dark rounded p-2 m-2"
            style={{
              backgroundColor: `${pokemonColor}`,
            }}
          >
            {firstLetterUpper(ability.ability.name)}
          </p>
        ))}
      </div>
      <p>Types:</p>
      <div className="d-flex justify-content-center">
        {typesArray.map((type) => (
          <p
            key={type.type.name}
            className="border border-dark rounded p-2 m-2"
            style={{
              backgroundColor: `${typeColor(type.type.name, colors)}`,
            }}
          >
            {firstLetterUpper(type.type.name)}
          </p>
        ))}
      </div>
      <p>
        <b> Stats:</b>
      </p>
      <div>
        {statsArray.map((stat) => (
          <div key={stat.stat.name}>
            {firstLetterUpper(stat.stat.name)}: {stat.base_stat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecificsBlock;
