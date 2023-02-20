
import './App.css';
import Testimonio from './componentes/Testimonios';



function App() {
  return (
    <div className="App">
      <h1 className='palo'>Our Story Through the Time</h1>
      <div className='contenedor-principal'>
        
        <Testimonio
          ano='2006-2015'
          paso='First years '
          imagen='2006'
          descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat in magna at sagittis'
          partes='The beginning, First support, On the big league'
          />
        <Testimonio
          ano='2016-2018'
          paso='Opening'
          imagen='2016'
          descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat in magna at sagittis.'
          partes='Our Opening, Optimen and the Aerospace Cluster, First South American Client, Guanajuato Talent, Go Innovation Forum, Other Relationships' />
        <Testimonio
          ano='2019-2020'
          paso='Growth'
          imagen='2019'
          descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat in magna at sagittis.'
          partes='Ou Orpening, Optimen and the Aerospace Cluster, First South American Client, Guanajuato Talent, Go Innovation Forum'
        />
        <Testimonio
          ano='2021-2023'
          paso='Actually'
          imagen='2021'
          descripcion='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat in magna at sagittis.'
          partes='Distinctive "Marca GTO", EDUCAFIN EVOLUCIONA'
        />
      </div>
    </div>
  );
}

export default App;
