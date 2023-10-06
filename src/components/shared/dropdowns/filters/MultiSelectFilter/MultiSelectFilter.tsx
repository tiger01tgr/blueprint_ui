'use client'
import React, { useState, useEffect } from "react";
import { MultiSelect } from '@mantine/core';
import classes from './MultiSelectFilter.module.css'

interface MultiSelectFilterSettings {
  title: string;
  options: string[];
}

const MultiSelectFilter = (props: MultiSelectFilterSettings) => {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <MultiSelect
      classNames={{
        wrapper: classes.wrapper,
        dropdown: classes.dropdown,
        input: classes.input,
        label: classes.label,
        options: classes.options,
      }}
      label={props.title}
      data={props.options}
      onChange={setValue}
      variant="standard"
      clearable={true}
    />
  )
}



export default MultiSelectFilter