var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few examples locations to try out:</p>

      <ol>
        <li>
          <Link to="/?location=Mendoza">Mendoza, ARG</Link>  
        </li>
        <li>
          <Link to="/?location=BuenosAires">Buenos Aires, ARG</Link>  
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;