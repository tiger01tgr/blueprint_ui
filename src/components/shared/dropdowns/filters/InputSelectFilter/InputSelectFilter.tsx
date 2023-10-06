'use client'
import React from 'react'
import { Select } from '@mantine/core'
import classes from './InputSelectFilter.module.css'

interface InputSelectFilterSettings {
  title: string;
  options: string[];
}

const InputSelectFilter = (props: InputSelectFilterSettings) => {
  return (
    <Select
      classNames={{
        wrapper: classes.wrapper,
        dropdown: classes.dropdown,
        input: classes.input,
        label: classes.label,
        options: classes.options,
      }}
      label={props.title}
      data={props.options}
      searchable
      variant="standard"
    />
  )
}

export default InputSelectFilter