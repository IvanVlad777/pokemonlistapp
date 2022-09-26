const ImageBlock = ({ pokemonColor, pokemonName, imageSrc }) => {
  return (
    <div
      className="border rounded-4"
      style={{ backgroundColor: `${pokemonColor}` }}
    >
      <h2>{pokemonName.toUpperCase()}</h2>
      <img className="m-3" height={'250px'} src={imageSrc} alt={pokemonName} />
    </div>
  );
};

export default ImageBlock;
