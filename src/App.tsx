import './App.css'
import Navbar from './components/navbar/navbar'
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <>
     <Navbar />
     <div>
      <h1>{t('welcome')}</h1>
      {/* O resto do seu app */}
    </div>
    </>
  )
}

export default App
