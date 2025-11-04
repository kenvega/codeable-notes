// usaremos el componente ErrorBoundary que ya esta como un paquete aqui https://github.com/bvaughn/react-error-boundary
// pero aqui tienes un ejemplo de como crear uno tu mismo usando clases

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que se muestra el fallback en el siguiente render
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Recibe el error capturado y la información del error.
    // Útil si se desea registrar el error en algún servicio externo.
    logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // Renderiza el prop 'fallback' (elemento de React) brindado por el consumidor
      return this.props.fallback;
    }

    return this.props.children;
  }
}
