
import {useDispatch, useSelector} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import app from '../Actions/app'

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);

  const click = () =>{
    dispatch(app())
  }

  return (
    <div className="App">
      {state.count}
      <button onClick = {(e) => {click()}}>
        <FormattedMessage id = "btn" />
      </button>
    </div>
  );
}

export default App;
