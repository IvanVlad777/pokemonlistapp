import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Pokemon List Application</h1>
      <p className="lead">
        This is a simple application that list all pokemons from Pokemon API.
      </p>
      <hr className="my-4" />
      <p>Explore Pokemons...</p>
      <p className="lead">
        <Link to="/">
          <button className="btn btn-primary btn-lg" href="/" type="button">
            Begin...
          </button>
        </Link>
      </p>
    </div>
  );
};

export default Hero;
