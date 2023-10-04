'use client'
import React from "react";
import { Select } from '@mantine/core';
import classes from './SelectFilter.module.css'

interface SelectFilterSettings {
  title: string;
  options: string[];
}

const SelectFilter = (props: SelectFilterSettings) => {

  const handleChange = (value: string) => {
    console.log(value)
  }

  return (
    <Select
      classNames={{
        wrapper: classes.wrapper,
        dropdown: classes.dropdown,
        input: classes.input
      }}
      label="Industry"
      placeholder="Industry"
      data={props.options}
      onChange={handleChange}
      allowDeselect={true}
      variant="standard"
    />
  )
}



export default SelectFilter