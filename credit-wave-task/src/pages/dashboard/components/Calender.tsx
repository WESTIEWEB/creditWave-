import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


const Calender = () => {
  return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateCalendar', 'DateCalendar']}>
            <DemoItem>
              {/* <div className='w-full h-full'> */}
                <DateCalendar defaultValue={dayjs()} readOnly />
              {/* </div> */}
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
  )
}

export default Calender
