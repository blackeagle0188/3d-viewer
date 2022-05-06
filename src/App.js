import './App.css';
import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <div className="App">
        <ModelViewer scale="0.002" modelPath={"/model/3DTerrain.glb"} />
    </div>
  );
}

export default App;
