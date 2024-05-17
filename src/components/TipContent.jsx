import { useState } from 'react';
import BillInput from './Bill-Input';
import Output from './Output';
import Percentages from './Percentages';
import ResetButton from './ResetButton';

function TipContent() {
  const [billInput, setBillInput] = useState('');
  const [mePercentage, setMePercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  let tip = billInput * ((mePercentage + friendPercentage) / 2 / 100);

  const handleReset = () => {
    setBillInput('');
    setMePercentage(0);
    setFriendPercentage(0);
  };
  return (
    <div>
      <BillInput
        billInput={billInput}
        onSetBillInput={setBillInput}
      />
      <Percentages
        percentage={mePercentage}
        onSetPercentage={setMePercentage}
      >
        How did you like it?
      </Percentages>
      <Percentages
        percentage={friendPercentage}
        onSetPercentage={setFriendPercentage}
      >
        How did your firend like it?
      </Percentages>
      {billInput ? (
        <>
          <Output
            tip={tip}
            billInput={billInput}
          />
          <ResetButton handleReset={handleReset} />
        </>
      ) : null}
    </div>
  );
}
export default TipContent;
