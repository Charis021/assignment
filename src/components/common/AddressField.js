import React from 'react';
import {Formik} from 'formik';
import {View, TextInput} from 'react-native';

const AddressField = ({address, input, handleChange}) => {
  return (
    <>
      <TextInput
        placeholder="Address Line 1"
        value={address.line1}
        style={input}
        onChangeText={text => handleChange('address.line1')}
      />
      <TextInput
        placeholder="Address Line 2"
        style={input}
        value={address.line2}
        onChangeText={text => onChange(text, 'line2')}
      />
      <TextInput
        placeholder="City"
        value={address.city}
        style={input}
        onChangeText={text => onChange(text, 'city')}
      />
      <TextInput
        placeholder="State"
        value={address.state}
        style={input}
        onChangeText={text => onChange(text, 'state')}
      />
      <TextInput
        placeholder="Zip"
        value={address.zip}
        style={input}
        onChangeText={text => onChange(text, 'zip')}
      />
    </>
  );
};

export default AddressField;

