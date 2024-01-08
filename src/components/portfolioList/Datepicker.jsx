import { useState } from 'react';
import DatePicker from 'react-datepicker'
import { DatepickerWrap } from './PortfolioListStyle';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date())

    const onDate = () => {
        setStartDate(`${startDate.getFullYear()}.${startDate.getMonth()+1}.${startDate.getDate()}`)
    }
    return (
        <DatepickerWrap>
            <DatePicker seleted={startDate} onChange={onDate} dateFormat='yyyy.MM.dd' />
        </DatepickerWrap>
    );
};

export default Datepicker;