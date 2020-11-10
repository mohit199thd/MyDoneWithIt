import React from 'react';
import { useFormikContext} from 'formik';
import AppPicker from '../components/AppPicker';
import ErrorMessage from '../components/forms/ErrorMessage';



function AppFormPicker({items,name,placeHolder,PickerItemComponent}) {

    const { errors,setFieldValue,touched,values} = useFormikContext();
  

    return (

        <>   
            <AppPicker
                PickerItemComponent={PickerItemComponent}
                items={items}
                onSelectItem={(item) => setFieldValue(name,item)}
                placeHolder={placeHolder}
                selectedItem={values[name]}
            />
            <ErrorMessage  error={errors[name]} visible={touched[name]} />
        </>
    );
}


export default AppFormPicker;