import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const onClick = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
  };
  return (
    <div>
      <button onClick={onClick}>CLICK to change lang</button>
      <h1>{t('Welcome to React')}</h1>
    </div>
  );
}

export default App;
