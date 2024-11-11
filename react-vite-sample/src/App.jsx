import './App.css'
import ReactList from './components/ReactList';
import UpliftLogoIcon from './components/UpliftLogoIcon'


const App = () => {

  const trainosys = 'Hello Universe,';
  const helloWorld = 'Hello World!'

  const isMale = false;
  const mayPasokBa = true;

  const age = 10;
  const currentYear = 2024;

  const getUsername = () => {
    return 'jelly';
  }

  const getSum = (number) => {
    return number + 10;
  }

  return (
    <>
      <button>
        <UpliftLogoIcon />
      </button>
      <div>{`${trainosys} and ${helloWorld}`}</div>
      <div>{` Birth year: ${currentYear - age}`}</div>
      <div>{ mayPasokBa ? 'Yes, sad' : 'Walang pasok, may bagyo'}</div>
      <br />
      <br />
      <br />
      <span>{getUsername()}</span>
      <br />
      <span>{getSum(30)}</span>
      <br />
      <br />
      <button>Button</button>
      <ReactList />
    </>
  )
}

export default App
