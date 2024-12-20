import './styles/index.scss';
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from './providers/router';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', { }, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      
      <AppRouter />
    </div>
  )
}

export default App;