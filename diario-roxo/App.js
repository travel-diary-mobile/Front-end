import Navegacao from './src/navigation';
import { DiarioProvider } from './src/context/DiarioContext';

export default function App() {
  return (
    <DiarioProvider>
      <Navegacao />
    </DiarioProvider>
  );
}
