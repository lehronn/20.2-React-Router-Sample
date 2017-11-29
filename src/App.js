import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Navigation}>
          <IndexRoute component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/hello/:name' component={Hello} />
          <Route path='*' component={PageNotFound} />
        </Route>
    </Router>
   )
 }
}

//komponenty
const Home = () => <h1>Hej, tu Home component</h1>;
const Contact = () => <h1>A tu Contact component</h1>;
const Navigation = props => (
    <div>
       <ul>
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><IndexLink to="/contact" activeClassName="active">Contact</IndexLink></li>
        </ul>
        {props.children}
    </div>
);
const Hello = (props) => <h1>Witaj, {props.params.name}</h1>
const PageNotFound = () => <h1>404 Not Found</h1>;


export default App

// <IndexRoute component={Home} /> to to samo co
// <Route path='/' component={Home} />

// IndexLink to bliźniaczy moduł do Link ale w IndexLink nie trzeba używać
// takiej długiej składni
// jak w Link <Link to="/" onlyActiveOnIndex>Home</Link>

// Należy pamiętać, że route ten musi zostać dodany jako ostatni,
// dlatego że route'y są sprawdzane w takiej kolejności w jakiej
// zostały zdefiniowane w Routerze. Gdybyśmy dodali ten route jako
// pierwszy, to nawet w przypadku odwołania pod poprawny adres
// renderowany byłby komponent zdefiniowany przez wyrażenie regularne.

// pod elementem <ul> zostanie wyrenderowany kod aktywnego
// komponentu, który jest “dzieckiem" komponentu <Navigation>.

// Przez fakt bycia nadrzędnym dla innych i odwoływania się do
// ścieżki '/', komponent <Navigation> będzie zawsze aktywny
// (o ile żądany przez użytkownika adres będzie istnieć).
// Dodatkowo, poprzez obecność w tym elemencie wywołania
// {props.children}, zostanie także wyrenderowany i aktywny
// kolejny komponent, którego ścieżka pokrywać się będzie z adresem URL.
