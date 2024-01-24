const React = require('react')
const Default = require('./layouts/Default')

function error404 ({error404}) {
    return (
      <Default>
        <img src="/assets/breads-404-error.png" alt="404 ERROR DAWG with Dog and Bread from chat gpt"></img>
        <p>404 ERROR DAWG</p>

        <li><a href="/breads">GO HOME NERD</a></li>
      </Default>
    )
}

module.exports = error404