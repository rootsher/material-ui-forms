import React from 'react';
import { Formik, FormikProps } from 'formik';

import { FormTextField } from './form/field/text/text-field';

interface Values {
    textField: string;
}

function App() {
    return (
        <>
            <Formik
                initialValues={{
                    textField: 'text',
                }}
                onSubmit={(values) => console.log(values)}
            >
                {(props: FormikProps<Values>) => (
                    <>
                        <FormTextField
                            name="textField"
                            placeholder="Enter value..."
                        />
                        <pre>{JSON.stringify(props.values)}</pre>
                    </>
                )}
            </Formik>
        </>
    );
}

export default App;
