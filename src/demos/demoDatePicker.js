import React, { useState } from 'react';

import DateWithDatePicker from 'react-custom-date-field';


function DemoDatePicker() {
    const [dateValue1, setDateValue1] = useState(null);
    const [dateValue2, setDateValue2] = useState(null);
    const [dateErrorMessage1 ] = useState(null);
    const [dateValid1, setDateValid1] = useState(true);

    return (
        <div className="demo-datepicker-wrapper">
            <div className="row">
                <h3>Date Input (with date picker)</h3>
                <form name='frmMain'>
                    <div className='field-row-invalid-feedback'>
                        <DateWithDatePicker
                        id="fldDate1_ID"
                        name="fldDate1"
                        autoComplete={false}
                        label="Date field 1"
                        className="field-one"
                        placeolder="Inform a date"
                        floatingPlaceholder={false}
                        disabled={false}
                        requiredMark={true}
                        initialValue={dateValue1}
                        value={dateValue1}
                        errorMessage={dateErrorMessage1 ? dateErrorMessage1 : (!dateValid1 ? "Invalid or incomplete" : "")}
                        clearInvalidValueOnBlur={true}
                        swapMonthAndDay={false}
                        onChange={(val, valid) => { setDateValue1(val); setDateValid1(valid); }}
                        datePicker={{ 
                            enabled: true,
                            locale: undefined,
                            offsetYAboveInput: 0,
                            offsetYUnderInput: 0,
                            minDate: "01/01/2023",
                            maxDate: "12/31/2030",
                            pickImageTitle: "Open date picker",
                            pickImageAlt: "date picker",
                            customTriggerContent: undefined
                        }}
                        customization={null}
                        />

                        <DateWithDatePicker
                        id="fldDate2_ID"
                        name="fldDate2"
                        label={null}
                        className="field-two"
                        placeolder="Date field 2"
                        floatingPlaceholder={true}
                        disabled={false}
                        requiredMark={false}
                        initialValue={dateValue2}
                        value={dateValue2}
                        errorMessage={null}
                        clearInvalidValueOnBlur={true}
                        onChange={(val, valid) => setDateValue2(val)}
                        datePicker={{
                            enabled: true
                        }}
                        customization={null}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DemoDatePicker;
