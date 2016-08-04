import React from 'react';
import Componente from './app.jsx';

React.render(<Componente classe = "classe">  </Componente>, document.getElementById('contador'));
React.render(<Componente/>, document.getElementById('contador1'));
React.render(<Componente/>, document.getElementById('contador2'));
