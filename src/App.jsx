import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button';

function App() {
  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Button className="mt-10" herf="#login">
          Something
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
